import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "Hur många gäster kan vi ha?",
      answer: "Vi kan ta emot 70-110 middagsgäster och 220-350 gäster för eftersläpp. Om ni är två klasser som har fest tillsammans kan vi ta emot upp till 500 gäster för eftersläpp."
    },
    {
      question: "Vilka dagar kan vi boka?",
      answer: "Vi är öppna för bokningar söndag till torsdag. Detta ger er möjlighet att ha er fest under veckans lugnare dagar med full fokus på er fest."
    },
    {
      question: "Var ligger Hornhuset?",
      answer: "Vi ligger på Långholmsgatan 15b i Stockholm, på Södermalm i Hornstull. Enkelt att ta sig till med kollektivtrafik."
    },
    {
      question: "Vad ingår i hyran?",
      answer: "I hyran ingår lokalen med alla våra faciliteter, grundljud och ljus, samt vår personal som hjälper till under kvällen."
    },
    {
      question: "Kan vi ta med egen mat och dryck?",
      answer: "Ja, ni kan antingen anlita vår cateringpartner eller ta med egen mat. För alkohol krävs serveringstillstånd som vi hjälper er med."
    },
    {
      question: "Finns det parkeringsmöjligheter?",
      answer: "Det finns begränsad gatuparkering i området. Vi rekommenderar kollektivtrafik då Hornstull station ligger mycket nära."
    },
    {
      question: "Hur långt i förväg ska vi boka?",
      answer: "Vi rekommenderar att ni bokar så tidigt som möjligt, helst 3-6 månader i förväg, då våra populära datum brukar bli fullbokade snabbt."
    },
    {
      question: "Kan vi dekorera lokalen?",
      answer: "Absolut! Ni kan dekorera lokalen efter eget tycke. Vi hjälper gärna till med tips och råd för att skapa den perfekta atmosfären."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl md:leading-[1.3] leading-[1.3] font-bold mb-6 bg-gradient-party bg-clip-text text-transparent">
              Vanliga Frågor
            </h1>
            <p className="text-xl text-muted-foreground">
              Svar på de mest ställda frågorna om Hornhuset
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;