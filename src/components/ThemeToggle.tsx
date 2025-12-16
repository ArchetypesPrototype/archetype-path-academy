import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span 
        className={`absolute right-full mr-3 whitespace-nowrap text-sm font-medium text-muted-foreground transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        {theme === "light" ? "Перейти на темну сторону" : "Перейти на світлу сторону"}
      </span>
      
      <button
        onClick={toggleTheme}
        className="relative h-8 w-14 rounded-full bg-secondary border border-border transition-all duration-300 hover:shadow-gold focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Toggle theme"
      >
        <span
          className={`absolute top-1 h-6 w-6 rounded-full bg-primary shadow-md transition-all duration-300 flex items-center justify-center ${
            theme === "dark" ? "left-7" : "left-1"
          }`}
        >
          {theme === "light" ? (
            <Sun className="h-4 w-4 text-primary-foreground" />
          ) : (
            <Moon className="h-4 w-4 text-primary-foreground" />
          )}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
