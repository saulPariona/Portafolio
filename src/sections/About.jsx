import React from 'react';
import { GraduationCap, Award, Code, Wrench, Brain } from 'lucide-react';

export default function About() {
  const lenguajes = [
    { name: 'JavaScript', percentage: '90%' },
    { name: 'PHP / Laravel', percentage: '85%' },
    { name: 'HTML5 / CSS3', percentage: '95%' },
    { name: 'SQL / MySQL', percentage: '80%' },
    { name: 'Python', percentage: '70%' },
  ];

  const herramientas = ['Git / GitHub', 'Vite', 'Bizagi', 'Figma', 'Metasploit', 'VS Code'];
  const cualidades = ['Trabajo en equipo', 'Resolución de problemas', 'Pensamiento analítico', 'Adaptabilidad', 'Proactividad'];

  return (
    <section id="sobre-mi" className="py-24 bg-[#08060d] text-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* BLOQUE 1: ACADÉMICO & PROFESIONAL */}
        <div>
          <span className="text-purple-500 font-mono text-xs uppercase tracking-widest block mb-2">02 — Perfil</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Académico & Profesional</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Tarjeta: Formación */}
            <div className="bg-[#0f0c15] border border-purple-950/20 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <GraduationCap className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Formación</h3>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-slate-200">Universidad Nacional del Centro del Perú</h4>
                <p className="text-xs text-purple-400 font-mono">Ingeniería de Sistemas • 2022 – Actualidad</p>
                <p className="text-xs text-slate-400 pt-2 leading-relaxed">
                  Enfoque en ingeniería de software, modelado de procesos de negocio, auditoría de redes y gestión de la seguridad de la información.
                </p>
              </div>
            </div>

            {/* Tarjeta: Certificados & Cursos */}
            <div className="bg-[#0f0c15] border border-purple-950/20 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Certificados & Cursos</h3>
              
              <div className="space-y-4">
                {/* Curso 1 */}
                <div className="flex gap-3 items-start">
                  <span className="bg-purple-500/10 text-purple-400 text-[10px] font-mono px-2 py-0.5 rounded border border-purple-500/20 mt-0.5">2025</span>
                  <div>
                    <h4 className="text-xs font-medium text-slate-200">Cisco Networking Academy</h4>
                    <p className="text-[11px] text-slate-400 font-sans">Network Technician Pathway</p>
                  </div>
                </div>
                {/* Curso 2 */}
                <div className="flex gap-3 items-start">
                  <span className="bg-purple-500/10 text-purple-400 text-[10px] font-mono px-2 py-0.5 rounded border border-purple-500/20 mt-0.5">2025</span>
                  <div>
                    <h4 className="text-xs font-medium text-slate-200">SCRUMstudy</h4>
                    <p className="text-[11px] text-slate-400 font-sans">Scrum Fundamentals Certified (SFC)</p>
                  </div>
                </div>
                {/* Curso 3 */}
                <div className="flex gap-3 items-start">
                  <span className="bg-purple-500/10 text-purple-400 text-[10px] font-mono px-2 py-0.5 rounded border border-purple-500/20 mt-0.5">2025</span>
                  <div>
                    <h4 className="text-xs font-medium text-slate-200">SUNAFIL</h4>
                    <p className="text-[11px] text-slate-400 font-sans">Gestión Interna de Seguridad y Salud en el Trabajo</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BLOQUE 2: STACK & HABILIDADES */}
        <div className="pt-6">
          <h3 className="text-xl font-bold text-slate-200 mb-8 tracking-tight flex items-center gap-2">
            Stack & Habilidades
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Columna: Lenguajes (Barras de progreso) */}
            <div className="bg-[#0f0c15] border border-purple-950/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Code className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Lenguajes</h4>
                  <p className="text-[10px] text-slate-500 font-mono">Conocimiento técnico aplicado</p>
                </div>
              </div>
              
              <div className="space-y-3 pt-2">
                {lenguajes.map((lang, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono text-slate-300">
                      <span>{lang.name}</span>
                      <span className="text-purple-400">{lang.percentage}</span>
                    </div>
                    {/* Barra contenedora */}
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      {/* Relleno morado animado/fijo */}
                      <div 
                        className="h-full bg-[#aa3bff] rounded-full" 
                        style={{ width: lang.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna: Herramientas (Tags encapsulados) */}
            <div className="bg-[#0f0c15] border border-purple-950/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Wrench className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Herramientas</h4>
                  <p className="text-[10px] text-slate-500 font-mono">Recursos para diseñar y construir</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {herramientas.map((item, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900 border border-purple-950/40 rounded-xl hover:border-purple-500/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Columna: Cualidades (Tags redondeados) */}
            <div className="bg-[#0f0c15] border border-purple-950/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Brain className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Cualidades</h4>
                  <p className="text-[10px] text-slate-500 font-mono">Fortalezas personales y enfoque</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {cualidades.map((cualidad, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 text-xs text-slate-400 bg-slate-900/40 border border-slate-800/60 rounded-full hover:text-white transition-colors"
                  >
                    {cualidad}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}