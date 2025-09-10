import { Card } from "@/components/ui/card";
import { 
  Car, 
  Truck, 
  Wrench, 
  AlertTriangle, 
  Zap, 
  ParkingCircle,
  Mountain,
  Bike
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Евакуація по Львову та області",
      description: "24/7 евакуація автомобілів у Львові та сусідніх областях",
      highlight: true
    },
    {
      icon: AlertTriangle,
      title: "Евакуація після ДТП",
      description: "Швидка допомога після дорожньо-транспортних пригод"
    },
    {
      icon: Truck,
      title: "Доставка авто від дистриб'юторів США",
      description: "Професійна доставка імпортних автомобілів"
    },
    {
      icon: Wrench,
      title: "Авто з пошкодженими колесами",
      description: "Спеціалізована евакуація при проблемах з ходовою частиною"
    },
    {
      icon: ParkingCircle,
      title: "Евакуація з підземних паркінгів",
      description: "Витягуємо автомобілі з обмеженого простору"
    },
    {
      icon: Mountain,
      title: "Евакуація з кюветів, перевертання авто",
      description: "Складні випадки евакуації з важкодоступних місць"
    },
    {
      icon: Car,
      title: "Легкові, джипи, кросовери, буси",
      description: "Евакуація різних типів транспортних засобів до 3т"
    },
    {
      icon: Bike,
      title: "Мотоцикли та інші перевезення",
      description: "Спеціалізована евакуація мототехніки"
    },
    {
      icon: Car,
      title: "Авто з низьким кліренсом",
      description: "Бережна евакуація спорткарів та низьких автомобілів"
    },
    {
      icon: Zap,
      title: "Допомога в дорозі",
      description: "Прикурка авто при несправному АКБ та інша допомога"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Наші Послуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Професійна евакуація автомобілів та допомога на дорогах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className={`
                  p-6 bg-gradient-card border-border/50 shadow-card-premium 
                  hover:shadow-glow hover:scale-105 transition-all duration-300 ease-bounce-in
                  ${service.highlight ? 'ring-2 ring-primary/50 bg-gradient-primary/5' : ''}
                `}
              >
                <div className="text-center">
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
                    ${service.highlight ? 'bg-gradient-primary' : 'bg-primary/20'}
                  `}>
                    <IconComponent 
                      className={`
                        w-8 h-8 
                        ${service.highlight ? 'text-primary-foreground' : 'text-primary'}
                      `} 
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;