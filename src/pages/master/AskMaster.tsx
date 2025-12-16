import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircle } from "lucide-react";

const mockQA = [
  {
    question: "Як почати вивчення архетипів?",
    author: "Олена",
    answer: "Рекомендую почати з першого курсу 'Ініціація якостей'. Там ви отримаєте базове розуміння всіх 12 архетипів та їх функцій.",
    date: "2024-12-10",
  },
  {
    question: "Чи можна поєднувати практики архетипів з іншими духовними практиками?",
    author: "Михайло",
    answer: "Так, архетипічна робота чудово поєднується з медитацією, йогою та іншими практиками. Вона дає глибше розуміння внутрішніх процесів.",
    date: "2024-12-08",
  },
];

const AskMaster = () => {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Питання відправлено!",
        description: "Майстер відповість найближчим часом.",
      });
      setName("");
      setQuestion("");
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Задайте своє питання</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Костянтину Добреву
          </p>
        </div>

        {/* Question Form */}
        <div className="max-w-2xl mx-auto mb-20">
          <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Ім'я</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше ім'я"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="question">Питання</Label>
              <Textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Напишіть ваше питання..."
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full btn-gold" disabled={isSubmitting}>
              {isSubmitting ? (
                "Відправляємо..."
              ) : (
                <>
                  <Send className="mr-2 w-4 h-4" />
                  Відправити
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Q&A Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-center mb-8">
            Питання та відповіді
          </h2>

          <div className="space-y-6">
            {mockQA.map((item, index) => (
              <div key={index} className="card-elevated p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{item.question}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.author} • {item.date}
                    </p>
                  </div>
                </div>

                {item.answer && (
                  <div className="ml-14 pl-4 border-l-2 border-primary/30">
                    <p className="text-muted-foreground">{item.answer}</p>
                    <p className="text-sm text-primary mt-2">— Костянтин Добрев</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AskMaster;
