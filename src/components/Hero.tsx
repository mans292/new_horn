import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hem" className="relative h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background video with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920"
        >
          <source src="/videos/hornfilm-liten.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-party bg-clip-text text-transparent drop-shadow-2xl">
          HORNHUSET
        </h1>
        <p className="text-2xl md:text-3xl text-foreground mb-12 font-light drop-shadow-lg">
          En kväll att minnas, för alla
        </p>
        <Button
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105"
          onClick={() => (window.location.href = "/Kontakt")}
        >
          Boka
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-50 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
