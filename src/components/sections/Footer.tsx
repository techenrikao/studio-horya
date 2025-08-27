import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Studio Horya</h3>
            <p className="text-background/80 leading-relaxed">
              Transformando vidas através do movimento, com cuidado especializado 
              de fisioterapeutas qualificados.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Cuidando da sua saúde</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold"></h4>
            <ul className="space-y-2">
              {[
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">(81) 99894-0737</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">studiohorya@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80">Rua São Roque, 91 - Caruaru PE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2021 Studio Horya. criado pelo techenrikao
            </p> CREF 9376 G/PE | Responsável Técnico:  Daniele Pessoa
            <p className="text-background/60 text-sm">
              Desenvolvido com {" "}
              <Heart className="h-3 w-3 inline text-primary" /> {" "}
              para sua saúde
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;