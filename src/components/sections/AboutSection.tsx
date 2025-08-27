import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Cuidado",
      description: "Atendimento humanizado e acolhedor para cada paciente"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Profissional especializado e equipamentos modernos"
    },
    {
      icon: Target,
      title: "Personalização",
      description: "Aulas individualizadas para suas necessidades específicas"
    },
    {
      icon: Users,
      title: "Confiança",
      description: "Ambiente seguro e profissional para sua evolução."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="secondary" className="mb-4">Sobre o Studio Horya</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossa História e 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Missão</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dedicados a transformar vidas através do movimento, oferecemos cuidado especializado 
            para melhorar sua qualidade de vida, reduzir a dor e promover o bem-estar físico e mental.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Profissional de Educação Física Especializada ao Seu Serviço
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O que nos diferencia é que todos os nossos serviços são realizados ou supervisionados 
                por profissional de Educação Física qualificados. Isso garante que você receba não apenas exercícios, 
                mas um cuidado  especializado.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa estrutura completa, com aparelhos novos e higienizados, proporciona um ambiente 
                seguro e confortável para seu tratamento e evolução.
              </p>
            </div>

            <div className="bg-wellness-light/20 rounded-lg p-6 border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">Nossa Missão</h4>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar corpos e mentes mais saudáveis através de tratamentos personalizados, 
                combinando técnicas modernas de fisioterapia com o método Pilates, sempre com 
                foco na individualidade de cada paciente.
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-wellness rounded-2xl shadow-wellness flex items-center justify-center">
              <div className="text-center text-foreground">
                <Users className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">Equipe Especializada</p>
                <p className="text-sm text-muted-foreground"></p>
              </div> 
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-wellness transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;