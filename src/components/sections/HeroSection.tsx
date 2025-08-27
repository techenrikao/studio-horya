import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-wellness">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteudo */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm font-medium text-primary">


              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                O seu caminho para uma vida
                <span className="bg-gradient-primary bg-clip-text text-transparent"> sem dor</span>
                <br />
                e com mais movimento
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                No Studio Horya, todos os nossos serviços são realizados ou supervisionados
                por uma profissional de Educação Física especializada em problemas de coluna .
                Oferecemos atendimento personalizado em Pilates Clássico e terapia manual.
              </p>
            </div>

            {/* Beneficios */}
            <div className="space-y-3">
              {[
                "Atendimento personalizado com profissional de Educação Física",
                "Estrutura completa com equipamentos modernos",
                "Foco em condicionamento físico e qualidade de vida"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-wellness">
                Agende Sua Avaliação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Conheça Nossos Serviços
              </Button>
            </div>

            {/* Quote */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border shadow-soft">
              <blockquote className="text-lg italic text-foreground/90 leading-relaxed">
                "Com 10 sessões você perceberá a diferença, com 20 sessões os outros irão
                perceber a diferença e com 30 sessões você vai ter um novo corpo."
              </blockquote>
              <cite className="text-sm text-muted-foreground font-medium mt-2 block">
                Joseph Pilates
              </cite>
            </div>
          </div>

          {/* Image placeholder - will be generated */}
          <div className="relative animate-float">
            <div className="">
              <div className="">
                <div className="">
                </div> <img src="src/assets/banner.png" width="700" height="300" />
                <p className=""></p>
                <p className=""></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;