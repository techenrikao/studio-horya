import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Heart, Zap, Stethoscope, Hand, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "Pilates Clássico",
      icon: Activity,
      title: "Pilates Clássico",
      subtitle: "Condicionamento físico ",
      description: "Pilates personalizado com foco em condicionamento físico e melhora das dores, supervisionado por profissional de Educação fisica . ",
      features: [
        "Pilates para condicionamento físico",
        "Pilates para dores em geral",
        "Aulas individualizadas",
        "Pilates para problemas de coluna"
      ],
      color: "primary"
    },
    {
      id: "fisioterapia",
      icon: Stethoscope,
      title: "Fisioterapia",
      subtitle: "Tratamento Especializado",
      description: "Tratamento completo para lesões musculoesqueléticas, com foco em terapias manuais e equipamentos modernos.",
      features: [
        "Tratamento de artrite e artrose",
        "Hérnias de disco e tendinites",
        "Terapias manuais",
        "Equipamentos modernos"
      ],
      color: "trust"
    },
    {
      id: "massagem",
      icon: Hand,
      title: "Massagem",
      subtitle: "Relaxamento e Recuperação",
      description: "Massagem desportiva para atletas e quick massage para relaxamento e alívio de tensões do dia a dia.",
      features: [
        "Massagem Desportiva",
        "Quick Massage",
        "Alívio de tensões",
        "Recuperação muscular"
      ],
      color: "wellness"
    }
  ];

  return (
    <section className="py-20 bg-gradient-wellness">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="secondary" className="mb-4">Nossos Serviços</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tratamentos
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Especializados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.id} className="hover:shadow-wellness transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <p className="text-sm text-primary font-medium">{service.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Services */}
        <div className="space-y-16">
          {/* Pilates Section */}
          <div id="pilates" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <div className="flex items-center space-x-3 mb-4">
                <Activity className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold text-foreground">Pilates Classico</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-card/80 rounded-lg p-6 border border-primary/20">
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    Pilates Clássico
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Focado no condicionamento físico e na melhora de dores em geral, voltado principalmente para problemas de coluna . Com aula individualizadas  a cada necessidade .
                  </p>
                </div>
              </div>
            </div> 

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-primary rounded-2xl shadow-wellness flex items-center justify-center">
                <div className="text-center text-white">
                  <Activity className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Pilates Personalizado</p>
                  <p className="text-sm opacity-90">Reabilitação e Condicionamento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fisioterapia Section */}
          <div id="fisioterapia" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-1">
              <div className="aspect-[4/3] bg-gradient-hero rounded-2xl shadow-wellness flex items-center justify-center">
                <div className="text-center text-white">
                  <Stethoscope className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Fisioterapia Avançada</p>
                  <p className="text-sm opacity-90">Tratamento Especializado</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-up lg:order-2">
              <div className="flex items-center space-x-3 mb-4">
                <Stethoscope className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold text-foreground">Fisioterapia</h3>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tratamento completo para diversas patologias musculoesqueléticas, 
                utilizando técnicas modernas e equipamentos de última geração.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Artrite e Artrose",
                  "Hérnias de Disco",
                  "Tendinites",
                  "Lesões Esportivas",
                  "Dores Cervicais",
                  "Problemas Posturais"
                ].map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card/50 rounded-lg p-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Massagem Section */}
          <div id="massagem" className="">
            <div className="space-y-6 animate-fade-up">
              <div className="flex items-center space-x-3 mb-4">
              
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                
              </p>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;