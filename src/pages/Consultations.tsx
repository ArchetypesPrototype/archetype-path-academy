import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Video } from "lucide-react";

const consultations = [
  {
    title: "Загальна консультація",
    subtitle: "Онлайн-зустріч",
    duration: "1 год",
    price: "1000 грн",
    description: `ТЕМИ:

Терапевтичні консультації по життєвим подіям:
1. Особисті стосунки.
2. Конфлікти та напруженості у суспільному житті.
3. Повернення життєвих подій до гармонічного стану.

Особиста терапія:
4. Травми важких подій життя.
5. Травми дитинства та юності.
6. Кризи середнього віку.
7. Глибокі травми підсвідомості.`,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Консультація на мові архетипів",
    subtitle: "Онлайн-зустріч",
    duration: "2 год",
    price: "2000 грн",
    description: `👨🏻‍💻На особистій консультації ми розглядаємо події вашого життя та спілкуємося щодо їх покращення. Ми використовуємо мову архетипів, яка сприяє гармонійному розумінню вашої особистості та вашого життєвого шляху.

☝🏻Архетипи надають глибину для розвитку та вдосконалення людини.

📎Після консультації архетипи відразу починають впливати на гармонію вашого життя, утворюючи зміни на краще.

💫Наша бесіда створює у вас та у вашому житті гармонію архетипа. Це працює як магічне закляття, що покращує події.

📌Мова архетипів — це мова гармонії. Її використовують таємні товариства для здобуття справжньої влади над світом.`,
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "Зцілення підсвідомості",
    subtitle: "Онлайн-зустріч",
    duration: "Цикл сеансів",
    price: "Від 4000 грн",
    description: `Ця процедура має на увазі занурення у вашу підсвідомість, виявлення складних артефактів підсвідомості, та їх оптимізація.

🖇️Досвід практик поглиблення у підсвідомість вказує на те, що складні артефакти підсвідомості мають коріння у попередніх життях.

💫Іноді людям достатньо розуміння того, що сценарії їх теперішнього життя це відтворення сценарія із певного попереднього життя.

⚡️Іноді ми знаходимо у попередніх життях складні травми які треба лікувати специфічними енергетичними засобами та медитаціями.

👨🏻‍💻Робота із попередніми життями відчиняє безодню.`,
    gradient: "from-mystic/20 to-mystic/5",
  },
];

const Consultations = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Консультації</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Індивідуальний підхід до кожного клієнта. Виберіть формат консультації, 
            який найкраще відповідає вашим потребам.
          </p>
        </div>

        {/* Consultations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {consultations.map((consultation, index) => (
            <ConsultationCard key={index} {...consultation} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

interface ConsultationCardProps {
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  gradient: string;
}

const ConsultationCard = ({
  title,
  subtitle,
  duration,
  price,
  description,
  gradient,
}: ConsultationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`card-elevated overflow-hidden group`}>
      <div className={`h-32 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <Video className="w-12 h-12 text-foreground/50" />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-display text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            {duration}
          </span>
          <span className="font-semibold text-primary">{price}</span>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Згорнути" : "Детальніше"}
        </Button>

        {isExpanded && (
          <div className="pt-4 border-t border-border animate-fade-up">
            <p className="text-sm text-muted-foreground whitespace-pre-line mb-4">
              {description}
            </p>
            <Button className="w-full btn-gold">
              ЗАПИСАТИСЬ
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

import { useState } from "react";

export default Consultations;
