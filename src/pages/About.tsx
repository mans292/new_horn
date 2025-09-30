import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-party bg-clip-text text-transparent">
              Om Hornhuset
            </h1>
            <p className="text-xl text-muted-foreground">
              Stockholms mest unika studentfestlokal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Vår Historia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Hornhuset har varit en del av Stockholms studentliv i många år. Beläget i det charmiga Hornstull 
                  på Södermalm, erbjuder vi en unik miljö för dina viktigaste firanden och minnesstunder.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Vår Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Vi strävar efter att skapa oförglömliga upplevelser för alla våra gäster. Varje fest, varje firande 
                  ska vara något extraordinärt - en kväll att minnas för alla.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-primary mb-8">Vad Gör Oss Unika?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Atmosfär</h3>
                  <p className="text-sm text-muted-foreground">
                    En magisk miljö som skapar perfekta minnen
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Läge</h3>
                  <p className="text-sm text-muted-foreground">
                    Centralt beläget i hjärtat av Södermalm
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Service</h3>
                  <p className="text-sm text-muted-foreground">
                    Personlig service som överträffar förväntningarna
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;