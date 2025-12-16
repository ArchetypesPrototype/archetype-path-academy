import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const menuItems = [
  { title: "ГОЛОВНА", path: "/" },
  {
    title: "БАЗА ЗНАНЬ",
    submenu: [
      { title: "FAQ | Термінологія", path: "/knowledge/faq" },
      { title: "Навігація по сайту", path: "/knowledge/navigation" },
      { title: "YOUTUBE канал", path: "/knowledge/youtube" },
      { title: 'Технологія "місто Богів"', path: "/knowledge/city-of-gods" },
    ],
  },
  {
    title: "НАВЧАННЯ",
    submenu: [
      { title: "1й курс – ініціація якостей", path: "/courses/course-1" },
      { title: "2й курс – практика героя у суспільстві", path: "/courses/course-2" },
      { title: "3й курс – магія стихій з таро", path: "/courses/course-3" },
      { title: "4й курс – підкорення астрологічних сил", path: "/courses/course-4" },
      { title: "Повна програма навчання", path: "/courses/program" },
    ],
  },
  {
    title: "МАЙСТЕР",
    submenu: [
      { title: "Про майстра", path: "/master/about" },
      { title: "Спитати майстра", path: "/master/ask" },
      { title: "Індивідуальні заняття", path: "/master/private-lessons" },
    ],
  },
  { title: "КОНСУЛЬТАЦІЇ", path: "/consultations" },
  {
    title: "МАЙСТЕРНЯ",
    submenu: [
      { title: "INFINITY COINS", path: "/workshop/infinity-coins" },
      { title: "СЕЗОННІ ПРОЦЕДУРИ", path: "/workshop/seasonal" },
      { title: "ПЕЧАТКИ МАЙСТРА", path: "/workshop/stamps" },
      { title: "АТРИБУТИКА", path: "/workshop/attributes" },
      { title: "ЮВЕЛІРНІ ПРИКРАСИ", path: "/workshop/jewelry" },
      { title: "ОСОБИСТИЙ МІФ", path: "/workshop/personal-myth" },
    ],
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "py-2 bg-background/95 backdrop-blur-md shadow-soft"
          : "py-4 bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="font-display text-xl font-bold text-primary-foreground">D</span>
            </div>
            <span className={`font-display text-xl font-semibold text-foreground transition-all ${isScrolled ? "hidden lg:block" : ""}`}>
              Dobrev Opus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/50 text-sm font-medium">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-64 p-2 bg-popover border border-border rounded-lg shadow-elevated">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.path}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={subItem.path}
                                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors"
                                  >
                                    {subItem.title}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-secondary/50 ${
                          location.pathname === item.path ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <Link
              to="/auth"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:brightness-110 transition-all shadow-gold"
            >
              <User className="w-4 h-4" />
              <span>Увійти</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-up">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.title}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                      >
                        {item.title}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openSubmenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSubmenu === item.title && (
                        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-primary/30 pl-4">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 text-sm font-medium rounded-md hover:bg-secondary transition-colors ${
                        location.pathname === item.path ? "text-primary bg-secondary" : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/auth"
                  className="flex items-center justify-center gap-2 mx-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm"
                >
                  <User className="w-4 h-4" />
                  <span>Увійти</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
