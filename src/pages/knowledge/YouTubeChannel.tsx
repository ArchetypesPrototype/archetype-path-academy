import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const YouTubeChannel = () => {
  const videos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Архетипи та їх сила - Урок ${i + 1}`,
    description: "Детальний розбір архетипічних енергій та їх практичне застосування у повсякденному житті.",
    views: Math.floor(Math.random() * 5000) + 500,
    date: `${Math.floor(Math.random() * 28) + 1}.12.2024`,
  }));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">YOUTUBE Канал</span>
          </h1>
          <p className="text-muted-foreground mb-6">
            12 Elite Archetypes — відео про архетипи та духовні практики
          </p>
          <a
            href="https://www.youtube.com/@12.elite.archetypes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-gold">
              <ExternalLink className="mr-2 w-4 h-4" />
              Відвідати канал
            </Button>
          </a>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="card-elevated overflow-hidden group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{video.views} переглядів</span>
                  <span>{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="flex justify-center gap-2 mt-12">
          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "default" : "outline"}
              size="sm"
              className={page === 1 ? "btn-gold" : ""}
            >
              {page}
            </Button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default YouTubeChannel;
