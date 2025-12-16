import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import Layout from "@/components/Layout";
import Mandala from "@/components/Mandala";
import { Button } from "@/components/ui/button";

const heroButtons = [
  { title: "КУРСИ НАВЧАННЯ", path: "/courses/program", variant: "gold" },
  { title: "КОНСУЛЬТАЦІЯ", path: "/consultations", variant: "outline" },
  { title: "МАЙСТЕРНЯ", path: "/workshop/infinity-coins", variant: "outline" },
  { title: "АРХЕТИПИ", path: "/knowledge/faq", variant: "mystic" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 pointer-events-none" />
        
        {/* Mandala */}
        <div className="relative z-10 mb-8 animate-fade-up">
          <Mandala size={180} useImage />
        </div>

        {/* Title */}
        <div className="relative z-10 text-center mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient-gold">
            Dobrev Opus Zodiac
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Авторська система духовних практик
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="relative z-10 flex flex-wrap justify-center gap-4 max-w-3xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {heroButtons.map((btn) => (
            <Link key={btn.path} to={btn.path}>
              <Button
                className={`px-6 py-6 text-sm font-semibold tracking-wide transition-all duration-300 ${
                  btn.variant === "gold"
                    ? "bg-primary text-primary-foreground hover:brightness-110 shadow-gold"
                    : btn.variant === "mystic"
                    ? "bg-accent text-accent-foreground hover:brightness-110"
                    : "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {btn.title}
              </Button>
            </Link>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="w-3/4 h-3/4 bg-card rounded-xl shadow-elevated flex items-center justify-center">
                  <Mandala size={200} />
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Відкрийте силу <span className="text-gradient-gold">архетипів</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Школа Архетипів — це унікальна система духовного розвитку, заснована на глибокому 
                розумінні архетипічних енергій зодіаку. Ми поєднуємо древню мудрість з сучасними 
                практиками для трансформації вашого життя.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Кожен архетип несе в собі унікальну якість та силу. Пізнаючи їх, ви отримуєте 
                ключі до гармонійного життя, успішних стосунків та реалізації свого потенціалу.
              </p>
              <Link to="/master/about">
                <Button className="btn-gold group">
                  Дізнатися більше
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Пізнайте світ <span className="text-gradient-mystic">архетипів</span>
            </h2>
            <p className="text-muted-foreground">
              Перегляньте відео та дізнайтеся більше про нашу методику
            </p>
          </div>
          
          <div className="relative aspect-video bg-card rounded-2xl shadow-elevated overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
            </div>
            <iframe
              className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <div className="text-center mt-8">
            <Link to="/master/about">
              <Button className="btn-mystic">
                ПРО МАЙСТРА
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Telegram Widget Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Новини та оновлення
            </h2>
            <p className="text-muted-foreground">
              Слідкуйте за останніми новинами у нашому Telegram каналі
            </p>
          </div>
          
          <div className="card-elevated p-6 md:p-10">
            <div className="aspect-[4/3] bg-secondary rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary-foreground">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">@EliteArchetypes</h3>
                <p className="text-muted-foreground mb-4">Telegram канал Школи Архетипів</p>
                <a
                  href="https://t.me/EliteArchetypes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-110 transition-all"
                >
                  Приєднатися
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
