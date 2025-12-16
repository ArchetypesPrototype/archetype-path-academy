import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";

const faqSections = [
  "8 чакра",
  "Алхімічні константи",
  "DobrevOpusZodiac",
  "Шлях Героя",
  "Архетипи",
  "Базові визначення",
  "Практика 4х Королів",
  "Чорний місяць",
  "Визначення Архетипів через гештальт",
  "Розділ 10",
  "Розділ 11",
  "Розділ 12",
  "Розділ 13",
  "Розділ 14",
  "Розділ 15",
];

const FAQ = () => {
  const [activeSection, setActiveSection] = useState(faqSections[0]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="card-elevated p-4 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide">
              <h2 className="font-display text-lg font-semibold mb-4 px-2">
                FAQ | Термінологія
              </h2>
              <nav className="space-y-1">
                {faqSections.map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left ${
                      activeSection === section
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <span>{section}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      activeSection === section ? "rotate-90" : ""
                    }`} />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3">
            <div className="card-elevated p-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">{activeSection}</span>
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Це розділ термінології та часто задаваних питань про {activeSection.toLowerCase()}. 
                  Тут ви знайдете детальні пояснення та визначення ключових понять.
                </p>

                <div className="bg-secondary/50 rounded-lg p-6 mb-6">
                  <h3 className="font-display text-xl font-semibold mb-3">Визначення</h3>
                  <p className="text-muted-foreground">
                    {activeSection} — це фундаментальне поняття в системі архетипів, 
                    що описує взаємозв'язок енергій та їх прояв у житті людини.
                  </p>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">Практичне застосування</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  У практичній роботі {activeSection.toLowerCase()} використовується для 
                  глибшого розуміння внутрішніх процесів та трансформації особистості. 
                  Це ключовий елемент у роботі з архетипами.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Позитивні аспекти</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Глибина розуміння</li>
                      <li>• Трансформація</li>
                      <li>• Інтеграція</li>
                    </ul>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Виклики</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Тінь архетипу</li>
                      <li>• Опір змінам</li>
                      <li>• Балансування</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
