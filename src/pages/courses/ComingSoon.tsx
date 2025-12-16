import Layout from "@/components/Layout";
import { Sparkles } from "lucide-react";

const ComingSoon = ({ title }: { title: string }) => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-16 h-16 text-primary" />
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-primary/20 animate-ping" />
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">{title}</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-2">Coming Soon</p>
          <p className="text-muted-foreground max-w-md mx-auto">
            Цей курс знаходиться в розробці. Слідкуйте за оновленнями!
          </p>
          
          <div className="mt-12 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-primary animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ComingSoon;
