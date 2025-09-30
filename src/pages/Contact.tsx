import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      skola: formData.get("school"),
      eventDate: formData.get("date"),
      message: formData.get("message"),
    };

    try {
      await emailjs.send(
        "service_s2v838b", // Användaren behöver ersätta detta
        "template_o722wf6", // Användaren behöver ersätta detta
        templateParams,
        "haUbQ6BgswMBjfusB"
      );

      toast({
        title: "Meddelande skickat!",
        description: "Vi återkommer till dig så snart som möjligt.",
      });

      form.reset();;
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Ett fel uppstod",
        description: "Kunde inte skicka meddelandet. Försök igen senare.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-party bg-clip-text text-transparent">
              Kontakta Oss
            </h1>
            <p className="text-xl text-muted-foreground">
              Redo att planera din oförglömliga kväll? Hör av dig så hjälper vi dig!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Kontaktinformation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">E-post</h3>
                        <p className="text-muted-foreground">hornhusetstudentskiva@gmail.com</p>
                        <p className="text-sm text-muted-foreground">Svarar inom 24 timmar</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Send className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Tiktok</h3>
                        <p className="text-muted-foreground">@hurnhuset_studentskivor</p>
                        <p className="text-sm text-muted-foreground">Skicka ett dm för enklare frågor</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Adress</h3>
                        <p className="text-muted-foreground">Långholmsgatan 15b</p>
                        <p className="text-muted-foreground">117 33 Stockholm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Öppettider</h3>
                        <p className="text-muted-foreground">Söndag - Torsdag</p>
                        <p className="text-sm text-muted-foreground">Bokningar efter överenskommelse</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>


            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Skicka Meddelande</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
               
                  <div>
                    <Label htmlFor="name">Namn</Label>
                    <Input id="name" name="name" placeholder="Ditt namn" required />
                  </div>

                  
                  <div>
                    <Label htmlFor="email">E-post</Label>
                    <Input id="email" name="email" type="email" placeholder="din@email.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="070-123 45 67" />
                  </div>

                  <div>
                    <Label htmlFor="school">Skola</Label>
                    <Input id="school" name="school" placeholder="Ditt gymnasium" />
                  </div>
                  
                  <div>
                    <Label htmlFor="date">Önskat datum</Label>
                    <Input className="bg-primary/40" id="date" name="date" type="date" />
                  </div>
                  
  
                  
                  <div>
                    <Label htmlFor="message">Meddelande</Label>
                    <Textarea 
                      id="message"
                      name="message" 
                      placeholder="Berätta om er fest, era önskemål och frågor..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Skickar..." : "Skicka Meddelande"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;