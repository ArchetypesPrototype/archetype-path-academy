import Layout from "@/components/Layout";
import Mandala from "@/components/Mandala";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutMaster = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1 animate-fade-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">Костянтин Добрев</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Засновник Школи Архетипів та автор унікальної системи духовних практик 
              <strong> Dobrev Opus Zodiac</strong>.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Понад 15 років практики та досліджень в області архетипічної психології, 
              астрології та езотеричних традицій. Поєднання західної алхімії з сучасними 
              методами трансформації особистості.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Мета — допомогти кожному віднайти свій унікальний шлях через розуміння 
              архетипічних енергій та їх практичне застосування у повсякденному житті.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-gold group">
                Записатися на консультацію
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline-gold">
                Спитати майстра
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Mandala size={150} />
                    <p className="mt-4 text-muted-foreground">Фото майстра</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { value: "15+", label: "Років практики" },
            { value: "1000+", label: "Учнів" },
            { value: "4", label: "Авторські курси" },
            { value: "12", label: "Архетипів" },
          ].map((stat, index) => (
            <div key={index} className="card-elevated p-6 text-center">
              <div className="font-display text-4xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Філософія школи</h2>
          <blockquote className="text-xl text-muted-foreground italic leading-relaxed mb-8">
            "Архетипи — це ключі до розуміння себе та світу. Пізнаючи їх, ми отримуємо 
            можливість свідомо творити своє життя, а не бути жертвою обставин."
          </blockquote>
          <p className="text-muted-foreground">— Костянтин Добрев</p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMaster;
