import React from 'react';
import { ExternalLink, Globe, Landmark, MonitorCheck, ShieldAlert } from 'lucide-react';

export default function Projects() {
  // Datos reales basados en tus proyectos y tecnologías de desarrollo
  const trabajos = [
    {
      title: "Sistema de Supervisión Web para Evaluaciones",
      description: "Desarrollo de un sistema de supervisión virtual orientado al control y análisis de evaluaciones académicas en un entorno controlado.",
      category: "INVESTIGACIÓN / WEB",
      icon: <MonitorCheck className="w-5 h-5 text-slate-400" />,
      techs: ["Laravel", "PHP", "JavaScript", "MySQL"],
      className: "md:col-span-7", // Más ancha en pantallas grandes
      gradient: "from-purple-900/40 to-slate-950"
    },
    {
      title: "Auditoría de Aplicaciones Móviles & API",
      description: "Análisis estructural y transcripción de código Smali mediante ingeniería inversa para la detección de vulnerabilidades en entornos Android.",
      category: "CIBERSEGURIDAD",
      icon: <ShieldAlert className="w-5 h-5 text-slate-400" />,
      techs: ["Apktool", "Smali", "Kali Linux"],
      className: "md:col-span-5", // Más angosta
      gradient: "from-indigo-950/50 to-slate-950"
    },
    {
      title: "Módulo de Servicios CIP 360",
      description: "Plataforma web integrada para la automatización, gestión y control de servicios institucionales con persistencia de datos segura.",
      category: "SISTEMA WEB",
      icon: <Globe className="w-5 h-5 text-slate-400" />,
      techs: ["React", "Tailwind CSS", "Vite", "Git"],
      className: "md:col-span-5", // Más angosta
      gradient: "from-blue-950/40 to-slate-950"
    },
    {
      title: "Plataforma de Transformación Digital Municipal",
      description: "Diseño y modelado analítico orientado a optimizar la gestión de tránsito y transporte, enfocado en la percepción y atención al ciudadano.",
      category: "DISEÑO DE PROCESOS",
      icon: <Landmark className="w-5 h-5 text-slate-400" />,
      techs: ["BPMN", "Bizagi", "Figma", "OKRs"],
      className: "md:col-span-7", // Más ancha
      gradient: "from-fuchsia-950/30 to-slate-950"
    }
  ];

  return (
    <section id="proyectos" className="py-24 bg-[#08060d] text-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cabecera idéntica a la imagen image_42934a.jpg */}
        <div className="mb-12">
          <span className="text-purple-500 font-mono text-xs uppercase tracking-widest block mb-2">
            04 — Proyectos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Trabajos desarrollados
          </h2>
        </div>

        {/* BENTO GRID ASIMÉTRICA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {trabajos.map((item, index) => (
            <div 
              key={index}
              className={`${item.className} bg-[#0f0c15] border border-purple-950/20 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-purple-500/30 transition-all shadow-xl`}
            >
              {/* MITAD SUPERIOR: Espacio visual con degradado e iconos */}
              <div className={`h-40 bg-gradient-to-b ${item.gradient} p-5 flex justify-between items-start relative border-b border-purple-950/10`}>
                {/* Badge de Categoría */}
                <span className="bg-slate-950/80 text-slate-300 text-[10px] font-mono font-semibold tracking-wider px-2.5 py-1 rounded-md border border-slate-800/80">
                  {item.category}
                </span>
                
                {/* Icono Flotante Derecho */}
                <div className="p-2 bg-slate-950/60 rounded-xl border border-slate-800/50 backdrop-blur-sm">
                  {item.icon}
                </div>
              </div>

              {/* MITAD INFERIOR: Texto y Tecnologías */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors flex items-center gap-2">
                    {item.title}
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Contenedor de Píldoras / Tags de Tecnologías */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.techs.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-mono text-purple-300 bg-purple-950/20 border border-purple-500/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}