import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code, Database, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 animate-float"
            style={{
              width: Math.random() * 100 + 50 + "px",
              height: Math.random() * 100 + 50 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.random() * 10 + 10 + "s",
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code 
          className="absolute top-20 left-20 text-cyan-400 opacity-20 animate-float" 
          size={60}
          style={{ animationDelay: "0s" }}
        />
        <Database 
          className="absolute bottom-40 right-32 text-purple-400 opacity-20 animate-float" 
          size={50}
          style={{ animationDelay: "2s" }}
        />
        <Cpu 
          className="absolute top-1/3 right-20 text-blue-400 opacity-20 animate-float" 
          size={55}
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div 
        className="container mx-auto px-4 text-center z-10"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="animate-fade-in-up space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-white/90 font-medium">Desenvolvedor Full Stack</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            Transformando
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Ideias em Código
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light">
            Criando experiências digitais inovadoras com tecnologias de ponta.
            Especialista em desenvolvimento web, mobile e cloud computing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
            >
              Explorar Projetos
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-xl"
              onClick={() => window.open("#contact", "_self")}
            >
              Entre em Contato
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-16 border-t border-white/10">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/60 text-sm md:text-base">Projetos</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">6+</div>
              <div className="text-white/60 text-sm md:text-base">Certificados</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-white/60 text-sm md:text-base">Anos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
