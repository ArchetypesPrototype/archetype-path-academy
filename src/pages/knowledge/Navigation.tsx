import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Video, MessageCircle, ShoppingBag, User, GraduationCap } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "База знань",
    description: "FAQ, термінологія та основні поняття школи архетипів",
    link: "/knowledge/faq",
  },
  {
    icon: GraduationCap,
    title: "Навчання",
    description: "Курси, програма навчання та практичні заняття",
    link: "/courses/program",
  },
  {
    icon: User,
    title: "Майстер",
    description: "Про майстра, консультації та індивідуальні заняття",
    link: "/master/about",
  },
  {
    icon: Video,
    title: "YouTube канал",
    description: "Відео про архетипи та духовні практики",
    link: "/knowledge/youtube",
  },
  {
    icon: ShoppingBag,
    title: "Майстерня",
    description: "Артефакти, атрибутика та енергетичні товари",
    link: "/workshop/infinity-coins",
  },
  {
    icon: MessageCircle,
    title: "Особистий кабінет",
    description: "Ваші курси, повідомлення та налаштування",
    link: "/auth",
  },
];

const Navigation = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Навігація по сайту</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Повний путівник по всіх розділах сайту Школи Архетипів
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.link}
              className="card-elevated p-6 group hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <section.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {section.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {section.description}
              </p>
              <span className="inline-flex items-center text-sm text-primary font-medium">
                Перейти
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* How to use */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="font-display text-2xl font-bold text-center mb-8">
            Як користуватися сайтом?
          </h2>
          
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <h3 className="font-semibold mb-2">1. Створіть обліковий запис</h3>
              <p className="text-muted-foreground text-sm">
                Зареєструйтесь для доступу до курсів та особистого кабінету. 
                Ви можете використати email або Google акаунт.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="font-semibold mb-2">2. Ознайомтесь з базою знань</h3>
              <p className="text-muted-foreground text-sm">
                Почніть з розділу FAQ та термінології, щоб зрозуміти основні поняття 
                та підготуватися до навчання.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="font-semibold mb-2">3. Оберіть свій шлях</h3>
              <p className="text-muted-foreground text-sm">
                Ви можете почати з безкоштовних матеріалів або одразу записатися 
                на курс чи консультацію з майстром.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Navigation;
