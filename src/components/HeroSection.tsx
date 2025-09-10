import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-tow-truck.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional tow truck service" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Phone Number - Most Prominent */}
        <div className="mb-8 animate-in slide-in-from-top duration-1000">
          <Button 
            variant="phone" 
            size="phone" 
            className="mb-4"
            onClick={() => window.location.href = 'tel:+380737773710'}
          >
            <Phone className="w-6 h-6 mr-3" />
            073-777-37-10
          </Button>
          <p className="text-muted-foreground text-lg">Цілодобово • 24/7</p>
        </div>

        {/* Main Heading */}
        <div className="mb-12 animate-in slide-in-from-bottom duration-1000 delay-300">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
            ЕВАКУАТОР
            <span className="block text-3xl md:text-5xl lg:text-6xl">ЛЬВІВ</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Професійна евакуація автомобілів у Львові та області. 
            Швидко, безпечно, доступно.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-in slide-in-from-bottom duration-1000 delay-500">
          <div className="bg-gradient-card p-6 rounded-2xl shadow-card-premium border border-border/50">
            <Clock className="w-10 h-10 text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">24/7 Сервіс</h3>
            <p className="text-muted-foreground">Працюємо цілодобово без вихідних</p>
          </div>
          
          <div className="bg-gradient-card p-6 rounded-2xl shadow-card-premium border border-border/50">
            <MapPin className="w-10 h-10 text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Вся Область</h3>
            <p className="text-muted-foreground">Львів та сусідні області</p>
          </div>
          
          <div className="bg-gradient-card p-6 rounded-2xl shadow-card-premium border border-border/50">
            <Phone className="w-10 h-10 text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Швидкий Виїзд</h3>
            <p className="text-muted-foreground">Прибуваємо максимально швидко</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-1000 delay-700">
          <Button 
            variant="premium" 
            size="xl"
            onClick={() => window.location.href = 'tel:+380737773710'}
          >
            <Phone className="w-5 h-5 mr-2" />
            Замовити Евакуатор
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Наші Послуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;