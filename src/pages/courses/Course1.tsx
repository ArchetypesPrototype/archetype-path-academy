import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Mandala from "@/components/Mandala";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Course1 = () => {
  const [mandalaAnimated, setMandalaAnimated] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setMandalaAnimated(true), 100);
    const timer2 = setTimeout(() => setTitleVisible(true), 500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero with Mandala */}
        <div className="relative flex flex-col items-center mb-16">
          <div className={`transition-all duration-1000 ${mandalaAnimated ? "opacity-100" : "opacity-0"}`}>
            <Mandala size={150} />
          </div>
          
          <h1 
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-8 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-gradient-gold">1й КУРС</span>
            <span className="block text-foreground mt-2">ІНІЦІАЦІЯ ЯКОСТЕЙ. ЗБІР ЦІЛІСНОСТІ</span>
          </h1>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="archetypes" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="archetypes" className="text-xs md:text-sm">
              ЗНАЙОМСТВО З АРХЕТИПАМИ
            </TabsTrigger>
            <TabsTrigger value="meditations" className="text-xs md:text-sm">
              МЕДИТАЦІЇ ІНІЦІАЦІЇ
            </TabsTrigger>
            <TabsTrigger value="exam" className="text-xs md:text-sm">
              ЕКЗАМЕНАЦІЯ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="archetypes" className="animate-fade-up">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                ТЕОРЕТИЧНИЙ МОДУЛЬ | ВИЗНАЧЕННЯ АРХЕТИПІВ
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Профайлінг та деталізація архетипів (зодіак).<br />
                Функції та призначення архетипів.<br />
                Стадії розвитку архетипу.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <CourseButton title="СКОРПІОН, ТЕЛЕЦЬ ТА ДІВА" />
                <CourseButton title="ОВЕН, КОЗЕРІГ ТА БЛИЗНЮКИ" />
                <CourseButton title="СТРІЛЕЦЬ, ЛЕВ ТА РИБИ" />
                <CourseButton title="ВОДОЛІЙ, ТЕРЕЗИ ТА РАК" />
              </div>
              
              <div className="card-elevated p-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <Mandala size={100} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Програма курсу</h3>
                <p className="text-sm text-muted-foreground">
                  Детальне вивчення кожного архетипу зодіаку, його характеристик, 
                  сильних та слабких сторін, шляхів розвитку та інтеграції.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="meditations" className="animate-fade-up">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                ПРАКТИЧНИЙ МОДУЛЬ | 4 ВІКНО БЕЗДОГАННОСТІ
              </h2>
              <p className="text-muted-foreground">
                Медитації що ініціюють частини матриці душі.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <CourseButton title="ІНІЦІАЦІЯ СИСТЕМИ ЛІБІДО" variant="mystic" />
                <CourseButton title="ІНІЦІАЦІЯ СИСТЕМИ ПОЧУТТІВ" variant="mystic" />
                <CourseButton title="ІНІЦІАЦІЯ СИСТЕМИ РОЗУМУ" variant="mystic" />
                <CourseButton title="ІНІЦІАЦІЯ СИСТЕМИ УВАГИ" variant="mystic" />
              </div>
              
              <div className="card-elevated p-6">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-mystic/20 rounded-lg mb-4 flex items-center justify-center">
                  <Mandala size={100} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Програма медитацій</h3>
                <p className="text-sm text-muted-foreground">
                  Практичні медитації для пробудження та ініціації кожної системи 
                  вашої матриці душі.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="exam" className="animate-fade-up">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                ЕКЗАМЕНАЦІЯ | ПОБУДОВА ВЛАСНОГО СУБ'ЄКТИВНОГО ПРОСТОРУ
              </h2>
              <p className="text-muted-foreground">
                ПРОСТОРУ АРХЕТИПУ СІМ'Ї
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Ви можете безкоштовно ознайомитись із ключами екзаменації.
                </p>
                <p className="text-muted-foreground">
                  Але для переходу на 2й курс ви маєте пройти 4 заняття по екзамінації 
                  з майстром на онлайн-зустрічі.
                </p>
                <p className="text-muted-foreground">
                  До екзаменації можна повертатись час від часу, щоб краще та глибше 
                  засвоювати ключі створення суб'єктивного простору.
                </p>
              </div>
              
              <div className="flex items-center justify-center">
                <Button className="btn-gold text-lg px-8 py-6">
                  ПРОЙТИ ЕКЗАМЕНАЦІЮ
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <CourseButton title="ПОТРЕБИ ТА БАЖАННЯ ПАРТНЕРІВ" />
                <CourseButton title="ОБМІН МІЖ ПАРТНЕРАМИ" />
                <CourseButton title="ПРАВИЛА ПОБУТУ ПАРТНЕРІВ" />
                <CourseButton title="СУСПІЛЬНА РЕАКЦІЯ НА СТОСУНКИ" />
                <CourseButton title="АРХЕТИП СІМ'Ї" />
              </div>
              
              <div className="card-elevated p-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <Mandala size={100} />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Матеріали екзаменації розміщені безкоштовно.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Якщо у Вас виникло бажання віддячити автору, то Ви можете задонатити 
                  будь яку суму, для підтримки проекту "Школа Архетипів".
                </p>
                <Button className="w-full btn-mystic">
                  ПІДТРИМАТИ ПРОЕКТ
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

interface CourseButtonProps {
  title: string;
  variant?: "gold" | "mystic";
}

const CourseButton = ({ title, variant = "gold" }: CourseButtonProps) => (
  <Button
    className={`w-full justify-start text-left h-auto py-4 px-6 ${
      variant === "gold" ? "btn-outline-gold" : "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
    }`}
  >
    {title}
  </Button>
);

export default Course1;
