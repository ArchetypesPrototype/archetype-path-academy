import Layout from "@/components/Layout";
import Mandala from "@/components/Mandala";

const CityOfGods = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Технологія "Місто Богів"</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Унікальна система роботи з архетипічними енергіями для трансформації реальності
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="card-elevated p-6 aspect-square flex items-center justify-center">
              <Mandala size={200} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Що таке "Місто Богів"?</h2>
              <p className="text-muted-foreground leading-relaxed">
                "Місто Богів" — це метафора внутрішнього простору, де мешкають архетипічні 
                енергії. Кожен архетип має своє місце у цьому просторі, свою роль та функцію.
                Робота з цією технологією дозволяє свідомо взаємодіяти з цими силами.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-2xl font-bold mb-4">Як це працює?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Технологія базується на візуалізації та медитативних практиках. 
                Ви вчитеся бачити своє внутрішнє місто, знайомитесь з його мешканцями 
                та вчитеся з ними взаємодіяти для досягнення своїх цілей.
              </p>
            </div>
            <div className="card-elevated p-6 aspect-square flex items-center justify-center order-1 md:order-2">
              <Mandala size={200} />
            </div>
          </div>

          {/* Video placeholder */}
          <div className="card-elevated p-8">
            <h2 className="font-display text-2xl font-bold mb-6 text-center">
              Відео про технологію
            </h2>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground">Відео буде доступне незабаром</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CityOfGods;
