import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Mandala from "@/components/Mandala";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Course2 = () => {
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
        {/* Hero with Mandala - different color */}
        <div className="relative flex flex-col items-center mb-16">
          <div className={`transition-all duration-1000 ${mandalaAnimated ? "opacity-100" : "opacity-0"}`}>
            <div className="[&_*]:!from-accent [&_*]:!to-mystic-light">
              <Mandala size={150} />
            </div>
          </div>
          
          <h1 
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-8 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-gradient-mystic">2й КУРС</span>
            <span className="block text-foreground mt-2">ПРАКТИКА ГЕРОЯ. ПРАКТИКА АРХЕТИПІВ У СУСПІЛЬСТВІ</span>
          </h1>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="space" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="space" className="text-xs">ПРОСТІР ПОДВИГІВ</TabsTrigger>
            <TabsTrigger value="heroes" className="text-xs">ГЕРОЇ ТА ЇХ СИЛА</TabsTrigger>
            <TabsTrigger value="weight" className="text-xs">ВЛАСНА ВАГА</TabsTrigger>
            <TabsTrigger value="influence" className="text-xs">ВПЛИВ</TabsTrigger>
            <TabsTrigger value="exam" className="text-xs">ЕКЗАМЕНАЦІЯ</TabsTrigger>
          </TabsList>

          <TabsContent value="space" className="animate-fade-up">
            <CourseSection
              title="ТЕОРЕТИЧНИЙ МОДУЛЬ"
              subtitle="Правила за якими герої набувають славу."
              variant="mystic"
            />
          </TabsContent>

          <TabsContent value="heroes" className="animate-fade-up">
            <CourseSection
              title="ТЕОРЕТИЧНИЙ МОДУЛЬ"
              subtitle="Сила яка дозволяє героям діяти"
              variant="mystic"
            />
          </TabsContent>

          <TabsContent value="weight" className="animate-fade-up">
            <CourseSection
              title="ПРАКТИЧНИЙ МОДУЛЬ | 1 ВІКНО БЕЗДОГАННОСТІ"
              subtitle="Медитації що набувають вагу частин матриці душі."
              variant="gold"
            />
          </TabsContent>

          <TabsContent value="influence" className="animate-fade-up">
            <CourseSection
              title="ПРАКТИЧНИЙ МОДУЛЬ | 1 ВІКНО БЕЗДОГАННОСТІ"
              subtitle="Медитації що набувають вплив на простір життя."
              variant="gold"
            />
          </TabsContent>

          <TabsContent value="exam" className="animate-fade-up">
            <CourseSection
              title="ЕКЗАМЕНАЦІЯ"
              subtitle="Вибудова профілю героя. Людини що активно діє у суспільстві як бізнесмен."
              variant="mystic"
            />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

interface CourseSectionProps {
  title: string;
  subtitle: string;
  variant: "gold" | "mystic";
}

const CourseSection = ({ title, subtitle, variant }: CourseSectionProps) => (
  <div>
    <div className="text-center mb-12">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <Button
            key={i}
            className={`w-full justify-start text-left h-auto py-4 px-6 ${
              variant === "gold"
                ? "btn-outline-gold"
                : "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Урок {i}
          </Button>
        ))}
      </div>
      
      <div className="card-elevated p-6">
        <div className={`aspect-video bg-gradient-to-br ${
          variant === "gold" ? "from-primary/20 to-gold-light/20" : "from-accent/20 to-mystic-light/20"
        } rounded-lg mb-4 flex items-center justify-center`}>
          <Mandala size={100} />
        </div>
        <h3 className="font-display text-xl font-semibold mb-2">Програма курсу</h3>
        <p className="text-sm text-muted-foreground">
          Детальна програма модуля з практичними завданнями та медитаціями.
        </p>
      </div>
    </div>
  </div>
);

export default Course2;
