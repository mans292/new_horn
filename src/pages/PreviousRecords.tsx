import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PreviousRecords = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl leading-[1.3] md:text-7xl md:leading-[1.3] font-bold mb-6 bg-gradient-party bg-clip-text text-transparent">
              Tidigare Skivor
            </h1>
            <p className="text-xl text-muted-foreground">
              Titta på videor från våra tidigare events
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Minnen från Tidigare Fester</CardTitle>
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
                  <source src="/videos/sittningen.mp4" type="video/mp4" />
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
                  <source src="/videos/skiva6.mp4" type="video/mp4" />
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
                  <source src="/videos/fest.mp4" type="video/mp4" />
                  Din webbläsare stöder inte video.
                </video>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PreviousRecords;
