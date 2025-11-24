import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  category: string;
}

const certificates: Certificate[] = [
  {
    title: "AWS Cloud Computing",
    issuer: "Amazon Web Services",
    date: "2024",
    category: "Cloud",
  },
  {
    title: "UX/UI Designer",
    issuer: "Udemy.com",
    date: "2024",
    category: "Design",
  },
  {
    title: "JavaScript Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "2024",
    category: "Desenvolvimento Frontend",
  },
  {
    title: "JavaScript Fundamentals 2",
    issuer: "Cisco Networking Academy",
    date: "2024",
    category: "Desenvolvimento Frontend",
  },
  
  {
    title: "Python Essentials",
    issuer: "Cisco Network Academy",
    date: "2024",
    category: "Desenvolvimento Backend",
  },
  {
    title: "Banco de Dados",
    issuer: "ADA TECH",
    date: "2024",
    category: "Banco de Dados",
  },
  {
    title: "Figma For Devs",
    issuer: "ADA TECH",
    date: "2024",
    category: "Design",
  },
  {
    title: "FrontEnd com REACT",
    issuer: "ADA TECH",
    date: "2024",
    category: "Desenvolvimento Frontend",
  },
  {
    title: "Logica de programação basica em JavaScript",
    issuer: "ADA TECH",
    date: "2024",
    category: "Desenvolvimento Frontend",
  },
  {
    title: "Introducção a HTML",
    issuer: "ADA TECH",
    date: "2024",
    category: "Desenvolvimento Frontend",
  },
  {
    title: "Introdução a CSS",
    issuer: "ADA TECH",
    date: "2024",
    category: "Desenvolvimento Frontend",
  },
  {
    title: "FrontEnd Development - HTML",
    issuer: "Great Learning",
    date: "2024",
    category: "Desenvolvimento Frontend",
  },
  {
    title: "JavaScript Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "2024",
    category: "Desenvolvimento Frontend",
  },
  {
    title: "Programming Basics",
    issuer: "Great Learning",
    date: "2024",
    category: "Desenvolvimento Backend",
  },

  {
    title: "Git e GitHub",
    issuer: "Grupo Voitto",
    date: "2024",
    category: "Tecnologias de Versionamento",
  },
  
  {
    title: "FrontEnd Development - CSS",
    issuer: "Great Learning",
    date: "2024",
    category: "Desenvolvimento Frontend",
  },
  
  {
    title: "Introduction to JavaScript",
    issuer: "Great Learning",
    date: "2024",
    category: "Desenvolvimento Frontend",
  },
  
  {
    title: "Lingua Estrangeira - Inglês",
    issuer: "Centro interescolar de linguas 01",
    date: "2021 - 2023",
    category: "Desenvolvimento Pessoal",
  },
  
  {
    title: "Lingua Estrangeira - Espanhol",
    issuer: "Centro interescolar de linguas 01",
    date: "2023 - 2024",
    category: "Desenvolvimento Pessoal",
  },
  {
    title: "Introdução ao Desenvolvimento Full Stack com a Deal",
    issuer: "DIO ACADEMY",
    date: "2025",
    category: "Desenvolvimento Full Stack",
  },
  {
    title: "Versionamento de Código com Git e GitHub",
    issuer: "DIO ACADEMY",
    date: "2025",
    category: "Desenvolvimento Full Stack",
  },
  
  

  
];

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="certificates" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Conquistas</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Certificados & Qualificações
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Certificações profissionais que validam minhas habilidades técnicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl border-2 ${
                hoveredIndex === index 
                  ? "border-primary shadow-lg shadow-primary/20 scale-105" 
                  : "border-border hover:border-primary/50"
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Stars */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 animate-pulse" />
              </div>

              <div className="relative p-6">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 font-medium">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 font-semibold"
                      >
                        {cert.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-semibold bg-muted px-3 py-1 rounded-full">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <div className="text-center p-6 glass-effect rounded-2xl">
            <div className="text-4xl font-black text-primary mb-2">6+</div>
            <div className="text-sm text-muted-foreground font-medium">Certificados</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-2xl">
            <div className="text-4xl font-black text-primary mb-2">4</div>
            <div className="text-sm text-muted-foreground font-medium">Categorias</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-2xl">
            <div className="text-4xl font-black text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground font-medium">Validados</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-2xl">
            <div className="text-4xl font-black text-primary mb-2">2024</div>
            <div className="text-sm text-muted-foreground font-medium">Mais Recente</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
