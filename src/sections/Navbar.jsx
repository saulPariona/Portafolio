import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#08060d]/80 backdrop-blur-md border-b border-purple-950/30">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Iniciales a la izquierda */}
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-wider text-purple-500 font-sans">SP.</span>
        </div>

        {/* Enlaces a la derecha (Se ocultan en móvil y se adaptan al estilo de la imagen) */}
        <div className="hidden md:flex space-x-6 text-xs tracking-wide text-slate-400 font-light">
          <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
          <a href="#sobre-mi" className="hover:text-white transition-colors">Perfil</a>
          <a href="#trayectoria" className="hover:text-white transition-colors">Trayectoria</a>
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#cuaderno" className="hover:text-white transition-colors">Cuaderno</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>

      </div>
    </nav>
  );
}