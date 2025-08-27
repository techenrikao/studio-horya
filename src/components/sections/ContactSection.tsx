import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: "(81) 99894-0737",
      link: "tel:+5511999999999"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "(81) 99894-0737",
      link: "https://wa.me/5581998940737"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: "studiohorya@gmail.com",
      link: "mailto:studiohorya@gmailsrc\components\sections\ContactSection.tsx:157:14.com"
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: "Rua São Roque, 91 - Caruaru PE ",
      link: "https://www.google.com/maps/place/Studio+Horya/@-8.2829248,-35.9743391,17z/data=!3m1!4b1!4m6!3m5!1s0x7a98b3a837b1241:0x1245c42122349eb1!8m2!3d-8.2829248!4d-35.9743391!16s%2Fg%2F11pv_gc2q9?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d697.9489077677473!2d-35.97424934856341!3d-8.283358086634685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98b3a837b1241%3A0x1245c42122349eb1!2sStudio%20Horya!5e0!3m2!1spt-BR!2sbr!4v1755740010241!5m2!1spt-BR!2sbr"
    }
  ];

  const schedules = [
    { day: "Segunda a Quinta", hours: "06:00 às 19:00" },
    { day: "Sexta ", hours: "06:00 às 18:00" },
    { day: "Sabado e Domingo", hours: "Fechado" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="secondary" className="mb-4">Entre em Contato</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pronto para
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Começar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Agende sua avaliação e dê o primeiro passo para uma vida com mais movimento,
            menos dor e melhor qualidade de vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-wellness">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Agende Sua Avaliação</h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome Completo
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input placeholder=" Seu telefone " />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Serviço de Interesse
                  </label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                    <option>Selecione um serviço</option>
                    <option>Pilates Clássico</option>
                   
                   <option>Avaliação Completa</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem (Opcional)
                  </label>
                  <Textarea
                    placeholder="Conte-nos um pouco sobre seu caso ou dúvidas..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full shadow-wellness">
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card> 

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-primary hover:text-primary-glow transition-colors text-sm"
                    >
                      {info.details}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Schedule */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">Horário de Funcionamento</h4>
                </div>
                <div className="space-y-3">
                  {schedules.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-foreground font-medium">{schedule.day}</span>
                      <span className="text-primary font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div> 
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="shadow-soft">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d697.9489077677473!2d-35.97424934856341!3d-8.283358086634685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98b3a837b1241%3A0x1245c42122349eb1!2sStudio%20Horya!5e0!3m2!1spt-BR!2sbr!4v1755740010241!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy"></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;