import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket, Code2, Smartphone, Cloud, Boxes, Brain } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  icon: any;
}

const projects: Project[] = [
  {
    title: "Landing Page Corporativa",
    category: "Web Development",
    description: "Página para captação de clientes.",
    tags: ["React", "Next.js", "node.js", "Shadcn.ui", "TypeScript", "Tailwind CSS"],
    link: "https://novaar-climatizacao.vercel.app/",
    github: "https://github.com/kauagg/Novaar-Landing",
    icon: Code2,
  },
  {
    title: "Painel de Gestão Financeira",
    category: "Backend",
    description: "completo para a Novaar, cobrindo a gestão de serviços e a otimização de processos operacionais.",
    tags: ["Node.js", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    link: "https://novaar-painel-gestao.vercel.app/",
    github: "https://github.com/kauagg/Novaar-climatizacao",
    icon: Boxes,
  },
  {
    title: "Micro SaaS de Análise de Conteudo",
    category: "Web Development",
    description: "Ferramenta para processamento e interpretação de grandes volumes de texto (reviews), utilizando modelos de IA para extrair informações valiosas de forma rápida e eficiente.",
    tags: ["Node.js", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "OpenAI API", "Stri  "],
    link: "https://review-ia.vercel.app/",
    github: "https://github.com/kauagg/brain-buffet-ai",
    icon: Smartphone,
  },
  {
    title: "Dashboard Analytics",
    category: "Web Development",
    description: "Painel analítico com visualização de dados em tempo real e relatórios customizados.",
    tags: ["React", "D3.js", "WebSocket"],
    link: "#",
    github: "#",
    icon: Code2,
  },
  {
    title: "Sistema DevOps",
    category: "DevOps",
    description: "Automação de deploy com CI/CD e monitoramento de infraestrutura.",
    tags: ["Jenkins", "Kubernetes", "AWS"],
    github: "#",
    icon: Cloud,
  },
  {
    title: "Plataforma de IA",
    category: "Machine Learning",
    description: "Sistema de análise preditiva usando algoritmos de machine learning.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    github: "#",
    icon: Brain,
  },
];

const categories = ["Todos", "Web Development", "Backend", "Mobile", "DevOps", "Machine Learning"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
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

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Rocket className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Meus Trabalhos</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore meus projetos organizados por categoria e tecnologia
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 shadow-lg" 
                  : "hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl border-2 ${
                  hoveredIndex === index 
                    ? "border-primary shadow-lg shadow-primary/20 -translate-y-2" 
                    : "border-border hover:border-primary/50"
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                <div className="relative p-6">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.link && (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    )}
                    {project.github && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 hover:bg-primary/10 hover:border-primary"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
