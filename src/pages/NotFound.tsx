import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Mandala from "@/components/Mandala";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mb-8 opacity-50">
          <Mandala size={150} />
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl font-bold text-gradient-gold mb-4">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Сторінку не знайдено
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="btn-gold">
              <Home className="mr-2 w-4 h-4" />
              На головну
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Назад
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
