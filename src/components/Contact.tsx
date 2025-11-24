import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Responderei em breve.", {
      description: "Obrigado pelo contato!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Fale Comigo</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Entre em contato e vamos transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <Card className="p-8 glass-effect border-2 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Email</p>
                    <p className="font-bold text-lg">devkauagb@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Telefone</p>
                    <p className="font-bold text-lg">+55 (61) 99999-3518</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Localização</p>
                    <p className="font-bold text-lg">Brasilia, Distrito Federal</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border/50">
                <h4 className="font-bold text-lg mb-6">Conecte-se Comigo</h4>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1 group hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1 group hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>

            {/* Availability Badge */}
            <Card className="p-6 glass-effect border-2 border-green-500/30 bg-green-500/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="font-semibold">Disponível para novos projetos</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className={`p-8 glass-effect border-2 hover:border-primary/50 transition-all duration-300 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-3">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  required
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-3">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  required
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-3">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me sobre seu projeto..."
                  rows={6}
                  required
                  className="border-2 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
