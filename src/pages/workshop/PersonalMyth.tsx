import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Mandala from "@/components/Mandala";

const PersonalMyth = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">ОСОБИСТИЙ МІФ</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Розрахуйте вашу натальну карту та дізнайтеся свій особистий міф 
            за системою домів Плацидус
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="card-elevated p-8">
            <h2 className="font-display text-2xl font-semibold mb-6">Введіть дані</h2>
            
            <form onSubmit={handleCalculate} className="space-y-6">
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
                <Label htmlFor="birthDate">Дата народження</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthTime">Час народження</Label>
                <Select value={birthTime} onValueChange={setBirthTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Виберіть час" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    {Array.from({ length: 24 }, (_, h) => 
                      Array.from({ length: 4 }, (_, m) => {
                        const time = `${h.toString().padStart(2, '0')}:${(m * 15).toString().padStart(2, '0')}`;
                        return (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        );
                      })
                    ).flat()}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthPlace">Місце народження</Label>
                <Input
                  id="birthPlace"
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                  placeholder="Місто, країна"
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-gold">
                Розрахувати
              </Button>
            </form>
          </div>

          {/* Result */}
          <div className="card-elevated p-8">
            {calculated ? (
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-semibold text-center">
                  Натальна карта
                </h2>
                
                {/* Chart placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                  <Mandala size={250} />
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 btn-gold">
                    Текстовий міф
                  </Button>
                  <Button className="flex-1 btn-mystic">
                    Міф картами Таро
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p className="mb-2"><strong>Сонце:</strong> Козеріг (10 дім)</p>
                  <p className="mb-2"><strong>Місяць:</strong> Рак (4 дім)</p>
                  <p className="mb-2"><strong>Асцендент:</strong> Терези</p>
                  <p className="mb-2"><strong>Меркурій:</strong> Водолій (5 дім)</p>
                  <p><strong>Венера:</strong> Стрілець (3 дім)</p>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <Mandala size={150} />
                <h2 className="font-display text-2xl font-semibold mt-6 mb-2">
                  Ваша натальна карта
                </h2>
                <p className="text-muted-foreground">
                  Заповніть форму ліворуч, щоб розрахувати вашу астрологічну карту
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalMyth;
