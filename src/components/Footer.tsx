import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-lg font-medium">
            Desenvolvido com
          </p>
          <Heart className="h-5 w-5 text-red-500 fill-red-500 animate-pulse" />
          <p className="text-lg font-medium">
            por um desenvolvedor apaixonado
          </p>
        </div>
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Desenvolvedor Kaua Gomes | Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
