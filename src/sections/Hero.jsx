import React from 'react';
import Button from '../components/Button';
import { GitBranch } from 'lucide-react';
// 1. IMPORTAMOS TU ARCHIVO REAL (perfil.jpg)
import miFoto from '../assets/perfil.jpg'; 

export default function Hero() {
  return (
    <header id="inicio" className="relative min-h-screen bg-[#08060d] text-slate-100 flex items-center overflow-hidden w-full">
      
      {/* EFECTO DE FONDO: Resplandor radial morado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(170,59,255,0.12),transparent_50%)] pointer-events-none" />

      {/* Contenedor principal en Grid (12 columnas) */}
      <div className="max-w-6xl mx-auto px-6 py-20 w-full grid md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* COLUMNA IZQUIERDA: Tus textos y botones */}
        <div className="md:col-span-7 flex flex-col items-start text-left space-y-4">
          
          <span className="text-purple-500 font-semibold tracking-wide text-lg md:text-xl block">
            Ingeniero de Sistemas & Desarrollador
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Saúl Pariona
          </h1>
          
          <p className="max-w-xl text-slate-400 text-sm md:text-base leading-relaxed font-light">
            Me especializo en construir aplicaciones web modernas, optimizar procesos y resolver problemas complejos utilizando código limpio.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button text="Ver Proyectos" href="#proyectos" variant="primary" />
            <Button text="Contáctame" href="#contacto" variant="secondary" />
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="px-5 py-3 border border-slate-800 hover:border-slate-700 bg-slate-900/30 text-slate-300 hover:text-white font-medium text-sm rounded-xl transition-colors flex items-center gap-2"
            >
              <GitBranch className="w-4 h-4" /> Git Hub
            </a>
          </div>
        </div>

        {/* COLUMNA DERECHA: Tu foto cargada desde assets */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-purple-600/50 to-transparent shadow-[0_0_40px_rgba(170,59,255,0.15)] flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-500/30 bg-[#13111a] flex items-center justify-center">
              
              {/* 2. REEMPLAZAMOS EL SPAN ACTIVANDO LA IMAGEN REAL */}
              <img 
                src={miFoto} 
                alt="Saúl Pariona" 
                className="w-full h-full object-cover object-center" 
              />

            </div>
          </div>
        </div>

      </div>
    </header>
  );
}