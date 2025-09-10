import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Truck, 
  Bike, 
  Zap, 
  Lock, 
  XCircle, 
  MapPin,
  Phone
} from "lucide-react";

const PricingSection = () => {
  const cityPrices = [
    {
      icon: Car,
      service: "Легкові авто по місту",
      price: "від 1200",
      unit: "грн",
      popular: true
    },
    {
      icon: Truck,
      service: "Кросовери",
      price: "від 1400",
      unit: "грн"
    },
    {
      icon: Truck,
      service: "Буси",
      price: "від 1600",
      unit: "грн"
    },
    {
      icon: Bike,
      service: "Мото",
      price: "від 1500",
      unit: "грн"
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      service: "Прикурка АКБ",
      price: "від 800",
      unit: "грн",
      highlight: true
    },
    {
      icon: Lock,
      service: "Заблоковане колесо",
      price: "+400",
      unit: "грн"
    },
    {
      icon: XCircle,
      service: "Скасоване замовлення по місту",
      price: "700",
      unit: "грн"
    },
    {
      icon: MapPin,
      service: "Міжмісто",
      price: "від 30",
      unit: "грн/км",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Тарифи
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозорі та конкурентні ціни на всі види послуг
          </p>
        </div>

        {/* City Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Евакуація по місту Львів
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityPrices.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index}
                  className={`
                    relative p-6 bg-gradient-card border-border/50 shadow-card-premium 
                    hover:shadow-glow hover:scale-105 transition-all duration-300 ease-bounce-in text-center
                    ${item.popular ? 'ring-2 ring-primary/50' : ''}
                  `}
                >
                  {item.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                      Популярно
                    </Badge>
                  )}
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
                    ${item.popular ? 'bg-gradient-primary' : 'bg-primary/20'}
                  `}>
                    <IconComponent 
                      className={`
                        w-8 h-8 
                        ${item.popular ? 'text-primary-foreground' : 'text-primary'}
                      `}
                    />
                  </div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    {item.service}
                  </h4>
                  <div className="text-3xl font-black text-primary mb-1">
                    {item.price}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {item.unit}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Додаткові послуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index}
                  className={`
                    relative p-6 bg-gradient-card border-border/50 shadow-card-premium 
                    hover:shadow-glow hover:scale-105 transition-all duration-300 ease-bounce-in text-center
                    ${item.popular ? 'ring-2 ring-primary/50' : ''}
                    ${item.highlight ? 'bg-gradient-primary/5' : ''}
                  `}
                >
                  {item.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                      Популярно
                    </Badge>
                  )}
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
                    ${item.popular || item.highlight ? 'bg-gradient-primary' : 'bg-primary/20'}
                  `}>
                    <IconComponent 
                      className={`
                        w-8 h-8 
                        ${item.popular || item.highlight ? 'text-primary-foreground' : 'text-primary'}
                      `}
                    />
                  </div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    {item.service}
                  </h4>
                  <div className="text-3xl font-black text-primary mb-1">
                    {item.price}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {item.unit}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-card p-8 rounded-3xl shadow-card-premium border border-border/50">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Потрібна евакуація зараз?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Зателефонуйте нам і ми оперативно приїдемо на допомогу. 
            Працюємо 24/7 без вихідних.
          </p>
          <Button 
            variant="premium" 
            size="xl"
            onClick={() => window.location.href = 'tel:+380737773710'}
          >
            <Phone className="w-5 h-5 mr-2" />
            073-777-37-10
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;