import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Mandala from "@/components/Mandala";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "1й курс",
    subtitle: "Ініціація якостей",
    description: "Збір цілісності. Знайомство з архетипами та медитації ініціації.",
    progress: 0,
    available: true,
    path: "/courses/course-1",
    color: "from-primary to-gold-light",
  },
  {
    id: 2,
    title: "2й курс",
    subtitle: "Практика героя",
    description: "Практика архетипів у суспільстві. Набуття маси та впливу.",
    progress: 0,
    available: false,
    path: "/courses/course-2",
    color: "from-accent to-mystic-light",
  },
  {
    id: 3,
    title: "3й курс",
    subtitle: "Магія стихій з таро",
    description: "Зв'язок із стихіями. Практика з картами Таро.",
    progress: 0,
    available: false,
    path: "/courses/course-3",
    color: "from-emerald-500 to-emerald-300",
  },
  {
    id: 4,
    title: "4й курс",
    subtitle: "Підкорення астрологічних сил",
    description: "Пробудження бездоганних сил. Вища магія архетипів.",
    progress: 0,
    available: false,
    path: "/courses/course-4",
    color: "from-rose-500 to-rose-300",
  },
];

const CourseProgram = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Програма навчання</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Повна програма навчання школи архетипів. Проходьте курси послідовно, 
            кожен наступний відкривається після завершення 80% попереднього.
          </p>
        </div>

        {/* Course Tree */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line connecting courses */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted -translate-x-1/2 hidden md:block" />

            {/* Courses */}
            <div className="space-y-8 md:space-y-16">
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className={`relative ${index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"}`}
                >
                  {/* Connection dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 hidden md:block">
                    {course.available ? (
                      <CheckCircle2 className="w-full h-full text-primary" />
                    ) : (
                      <Lock className="w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                    )}
                  </div>

                  {/* Course Card */}
                  <div
                    className={`card-elevated p-6 transition-all duration-300 ${
                      course.available
                        ? "hover:shadow-gold hover:border-primary/30"
                        : "opacity-60"
                    }`}
                  >
                    <div className="flex gap-6">
                      <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center flex-shrink-0`}>
                        <Mandala size={50} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-xl font-bold">{course.title}</h3>
                          {!course.available && (
                            <Lock className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                        <p className="text-primary font-medium text-sm mb-2">{course.subtitle}</p>
                        <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                        
                        {/* Progress bar */}
                        <div className="mb-4">
                          <div className="flex justify-between text-xs text-muted-foreground mb-1">
                            <span>Прогрес</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${course.color} transition-all duration-500`}
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>

                        {course.available ? (
                          <Link to={course.path}>
                            <Button className="btn-gold group">
                              Почати навчання
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        ) : (
                          <Button disabled className="opacity-50">
                            <Lock className="mr-2 w-4 h-4" />
                            Заблоковано
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="mt-20 text-center">
          <div className="card-elevated max-w-2xl mx-auto p-8">
            <h2 className="font-display text-2xl font-bold mb-4">Як проходить навчання?</h2>
            <ul className="text-left text-muted-foreground space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Кожен курс складається з теоретичних та практичних модулів</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Прогрес зараховується після перегляду 90% контенту уроку</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Наступний курс відкривається при 80% завершенні попереднього</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Екзаменація проходить на онлайн-зустрічі з майстром</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseProgram;
