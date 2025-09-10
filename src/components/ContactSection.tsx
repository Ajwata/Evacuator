import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Clock, MapPin, Instagram, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <footer className="py-20 px-4 bg-gradient-dark border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Контакти
          </h2>
          <p className="text-xl text-muted-foreground">
            Ми завжди готові допомогти вам 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card-premium">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Телефон</h3>
                  <p className="text-2xl font-black text-primary">073-777-37-10</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 shadow-card-premium">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Режим роботи</h3>
                  <p className="text-lg text-primary font-semibold">24/7 - Цілодобово</p>
                  <p className="text-muted-foreground">Без вихідних та святкових</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 shadow-card-premium">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Зона обслуговування</h3>
                  <p className="text-primary font-semibold">Львів та область</p>
                  <p className="text-muted-foreground">Сусідні області</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Emergency Contact */}
          <div className="flex flex-col justify-center">
            <Card className="p-8 bg-gradient-primary/10 border-primary/30 shadow-glow text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-10 h-10 text-primary-foreground animate-pulse" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-2">
                  Екстрена допомога
                </h3>
                <p className="text-muted-foreground mb-6">
                  Потрібна негайна евакуація? Телефонуйте прямо зараз!
                </p>
              </div>
              
              <Button 
                variant="emergency" 
                size="xl" 
                className="w-full mb-4"
                onClick={() => window.location.href = 'tel:+380737773710'}
              >
                <Phone className="w-6 h-6 mr-3" />
                073-777-37-10
              </Button>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => window.open('https://www.instagram.com/dml_auto_lviv', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => window.location.href = 'tel:+380737773710'}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Viber
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-8 border-t border-border/20">
          <p className="text-muted-foreground mb-4">
            © 2024 ЕВАКУАТОР ЛЬВІВ. Професійна евакуація автомобілів 24/7
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
