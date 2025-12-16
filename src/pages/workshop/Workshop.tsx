import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Mandala from "@/components/Mandala";
import { ArrowRight, ShoppingCart } from "lucide-react";

const workshopMenu = [
  { title: "INFINITY COINS", path: "/workshop/infinity-coins" },
  { title: "СЕЗОННІ ПРОЦЕДУРИ", path: "/workshop/seasonal" },
  { title: "ПЕЧАТКИ МАЙСТРА", path: "/workshop/stamps" },
  { title: "АТРИБУТИКА", path: "/workshop/attributes" },
  { title: "ЮВЕЛІРНІ ПРИКРАСИ", path: "/workshop/jewelry" },
  { title: "ОСОБИСТИЙ МІФ", path: "/workshop/personal-myth" },
];

const products = [
  { id: 1, name: "Infinity Coin Овен", price: "1200 грн" },
  { id: 2, name: "Infinity Coin Телець", price: "1200 грн" },
  { id: 3, name: "Infinity Coin Близнюки", price: "1200 грн" },
  { id: 4, name: "Infinity Coin Рак", price: "1200 грн" },
  { id: 5, name: "Infinity Coin Лев", price: "1200 грн" },
  { id: 6, name: "Infinity Coin Діва", price: "1200 грн" },
  { id: 7, name: "Infinity Coin Терези", price: "1200 грн" },
  { id: 8, name: "Infinity Coin Скорпіон", price: "1200 грн" },
  { id: 9, name: "Infinity Coin Стрілець", price: "1200 грн" },
  { id: 10, name: "Infinity Coin Козеріг", price: "1200 грн" },
  { id: 11, name: "Infinity Coin Водолій", price: "1200 грн" },
  { id: 12, name: "Infinity Coin Риби", price: "1200 грн" },
];

const Workshop = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Menu */}
          <aside className="lg:col-span-1">
            <div className="card-elevated p-4 sticky top-24">
              <h2 className="font-display text-lg font-semibold mb-4 px-2">Майстерня</h2>
              <nav className="space-y-1">
                {workshopMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient-gold">INFINITY COINS</span>
              </h1>
              <p className="text-muted-foreground">
                Колекція енергетичних монет з символами зодіаку. Кожна монета несе 
                унікальну архетипічну енергію та може слугувати талісманом.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="card-elevated overflow-hidden group">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Mandala size={100} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{product.name}</h3>
                    <p className="text-primary font-semibold mb-3">{product.price}</p>
                    <Button className="w-full btn-gold group/btn" size="sm">
                      <ShoppingCart className="mr-2 w-4 h-4" />
                      Купити
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Workshop;
