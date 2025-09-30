import { Card } from "@/components/ui/card";
import { Users, Calendar, MapPin } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Hur många? */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-party flex items-center justify-center mb-6 shadow-glow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Hur många?</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Middagsgäster:</span> 70-110 gäster
                </p>
                <p>
                  <span className="font-semibold text-foreground">Eftersläppsbiljetter:</span> 220-350st
                </p>
                <p className="text-sm mt-4">
                  (500st eftersläppsbiljett är möjligt om ni är 2 klasser som har skivan ihop)
                </p>
              </div>
            </div>
          </Card>

          {/* Bokningsbara dagar */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-party flex items-center justify-center mb-6 shadow-glow">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Bokningsbara dagar</h3>
              <p className="text-xl text-muted-foreground">Söndag-torsdag</p>
            </div>
          </Card>

          {/* Plats */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-party flex items-center justify-center mb-6 shadow-glow">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Plats</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Långholmsgatan+15b,+Stockholm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors underline"
              >
                Långholmsgatan 15b, Stockholm
              </a>
              <p className="text-muted-foreground mt-2">Södermalm Hornstull</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
