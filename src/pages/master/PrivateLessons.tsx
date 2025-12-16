import Layout from "@/components/Layout";
import Mandala from "@/components/Mandala";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Clock, MessageCircle } from "lucide-react";

const packages = [
  {
    title: "НАСТАВНИЦТВО",
    price: "5000 грн",
    features: [
      "4 онлайн-зустрічі",
      "1 раз на тиждень",
      "1,5 години",
      "Формат: особиста бесіда",
    ],
    gradient: "from-primary/20 to-gold-light/20",
  },
  {
    title: "УЧЕНЬ БЛИЗЬКОГО КОЛА",
    price: "10000 грн",
    features: [
      "4 індивідуальні зустрічі",
      "1 раз на тиждень",
      "2 години",
      "Формат: практики та медитації",
      "Відповіді на питання в чаті у робочі часи",
    ],
    topics: [
      "Практика з картами ТАРО",
      "Практика Архетипів (Західна Алхімія)",
      "Індивідуальний план занять під Ваш запит",
    ],
    gradient: "from-accent/20 to-mystic-light/20",
    featured: true,
  },
];

const PrivateLessons = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Індивідуальні заняття</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Персональне навчання з майстром. Глибоке занурення в практику архетипів 
            з індивідуальним підходом.
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card-elevated overflow-hidden ${
                pkg.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Header */}
              <div className={`h-48 bg-gradient-to-br ${pkg.gradient} flex items-center justify-center relative`}>
                <Mandala size={100} />
                {pkg.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Рекомендовано
                  </span>
                )}
              </div>

              <div className="p-6 space-y-6">
                <div className="text-center">
                  <h2 className="font-display text-2xl font-bold mb-2">{pkg.title}</h2>
                  <p className="text-3xl font-bold text-gradient-gold">{pkg.price}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      {i === 0 && <Video className="w-4 h-4 text-primary" />}
                      {i === 1 && <Clock className="w-4 h-4 text-primary" />}
                      {i === 2 && <Clock className="w-4 h-4 text-primary" />}
                      {i === 3 && <MessageCircle className="w-4 h-4 text-primary" />}
                      {i === 4 && <MessageCircle className="w-4 h-4 text-primary" />}
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Topics */}
                {pkg.topics && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold mb-3">ТЕМИ:</p>
                    <ul className="space-y-2">
                      {pkg.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button className="w-full btn-gold group">
                  ПОЧАТИ
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PrivateLessons;
