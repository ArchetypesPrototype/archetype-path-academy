import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

const socialLinks = [
  { icon: "telegram", url: "https://t.me/EliteArchetypes", label: "Telegram" },
  { icon: "instagram", url: "https://instagram.com", label: "Instagram" },
  { icon: "youtube", url: "https://youtube.com/@12.elite.archetypes", label: "YouTube" },
  { icon: "tiktok", url: "https://tiktok.com", label: "TikTok" },
  { icon: "etsy", url: "https://etsy.com", label: "Etsy" },
];

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const EtsyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M8.559 1.641c0-.541-.331-.641-1.164-.641H3.227c-.833 0-1.164.1-1.164.641v.308c0 .441.331.541.665.607l.998.166c.5.1.666.232.666.607v17.324c0 .375-.166.508-.666.607l-.998.166c-.334.066-.665.166-.665.607v.308c0 .541.331.641 1.164.641h9.666c.833 0 1.497-.432 1.828-1.264l1.83-4.391c.166-.4.066-.666-.334-.832l-.332-.133c-.4-.166-.6-.033-.766.367l-1.497 3.527c-.2.467-.433.6-.932.6H7.561c-.5 0-.666-.133-.666-.6V12.59h4.494c.5 0 .666.166.832.666l.433 1.33c.133.4.267.533.666.4l.334-.133c.4-.166.466-.4.333-.8l-.666-2.327c-.167-.567-.5-.9-1.066-.9H6.894V3.039c0-.466.166-.599.666-.599h4.66c.5 0 .733.133.933.6l1.497 3.527c.166.4.366.533.766.367l.332-.133c.4-.166.5-.432.334-.832l-1.83-4.391c-.331-.832-.995-1.264-1.828-1.264H8.559v1.327z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      {/* Social Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center text-background hover:scale-110 hover:shadow-gold transition-all duration-300 animate-pulse-glow"
              aria-label={social.label}
            >
              {social.icon === "telegram" && <TelegramIcon />}
              {social.icon === "instagram" && <Instagram className="w-5 h-5" />}
              {social.icon === "youtube" && <Youtube className="w-5 h-5" />}
              {social.icon === "tiktok" && <TikTokIcon />}
              {social.icon === "etsy" && <EtsyIcon />}
            </a>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Link
            to="/offer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Договір оферти
          </Link>
          
          <p className="text-sm text-muted-foreground">
            Всі права захищені. 2025 © Школа Архетипів
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
