import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Train, Bus, Car } from "lucide-react";

const Location = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-party bg-clip-text text-transparent">
              Hitta Hit
            </h1>
            <p className="text-xl text-muted-foreground">
              Långholmsgatan 15b, Stockholm - Södermalm Hornstull
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Adress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Hornhuset</h3>
                    <p className="text-muted-foreground">Långholmsgatan 15b</p>
                    <p className="text-muted-foreground">117 33 Stockholm</p>
                    <p className="text-muted-foreground">Södermalm, Hornstull</p>
                  </div>
                  <Button className="w-full" asChild>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Långholmsgatan+15b,+Stockholm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Öppna i Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Kollektivtrafik</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Tunnelbana</h4>
                      <p className="text-sm text-muted-foreground">
                        Röda linjen till Hornstull station
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Bus className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Buss</h4>
                      <p className="text-sm text-muted-foreground">
                        Flera busslinjer stannar vid Hornstull
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Bil</h4>
                      <p className="text-sm text-muted-foreground">
                        Begränsad parkering i området
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Videor från Lokalen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <video
                  className="w-full max-h-[50vh] rounded-lg object-cover"
                  
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/lokalen.mp4" type="video/mp4" />
                  Din webbläsare stöder inte video.
                </video>
                <video
                  className="w-full max-h-[50vh] rounded-lg object-cover"
                  
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/lokal-takbar.mp4" type="video/mp4" />
                  Din webbläsare stöder inte video.
                </video>
                <video
                  className="w-full max-h-[50vh] rounded-lg object-cover"
                  
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/lokalen3.mp4" type="video/mp4" />
                  Din webbläsare stöder inte video.
                </video>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Karta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.8884044!2d18.0321!3d59.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f0e06c4f1d%3A0x2df4a0b9a8f9c9a0!2sL%C3%A5ngholmsgatan%2015B%2C%20117%2033%20Stockholm!5e0!3m2!1ssv!2sse!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Location;