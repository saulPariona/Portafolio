import React from 'react';
import { MapPin, Phone, Mail, GitBranch, Send } from 'lucide-react';

export default function Contact() {
  // Manejador simple para prevenir el recargo de página al probar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectarías luego tu servicio de correo (Formspree, EmailJS, etc.)
    console.log("Mensaje listo para enviar");
  };

  return (
    <section id="contacto" className="py-24 bg-[#08060d] text-slate-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Cabecera idéntica a la imagen image_428f6d.png */}
        <div className="mb-12">
          <span className="text-purple-500 font-mono text-xs uppercase tracking-widest block mb-2">
            05 — Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Trabajemos juntos
          </h2>
        </div>

        {/* DISTRIBUCIÓN EN DOS COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: Información de contacto (Ocupa 5 columnas de 12) */}
          <div className="md:col-span-5 space-y-8">
            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
              ¿Tienes un proyecto en mente? Me interesa participar en iniciativas de desarrollo web, automatización de procesos y análisis de sistemas de información.
            </p>

            {/* Lista de Datos */}
            <div className="space-y-5">
              
              {/* Ubicación */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider">Ubicación</h4>
                  <p className="text-sm text-slate-300 font-medium">Huancayo, Perú</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider">Teléfono</h4>
                  <p className="text-sm text-slate-300 font-medium">+51 956 929 287</p>
                </div>
              </div>

              {/* Correo */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider">Correo</h4>
                  <a href="mailto:saulpariona@example.com" className="text-sm text-purple-400 hover:underline break-all">
                    saulpariona@example.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <GitBranch className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider">GitHub</h4>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-slate-300 hover:text-purple-400 transition-colors break-all">
                    github.com/saulpariona
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMNA DERECHA: El Formulario (Ocupa 7 columnas de 12) */}
          <form 
            onSubmit={handleSubmit}
            className="md:col-span-7 bg-[#0f0c15] border border-purple-950/20 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl"
          >
            {/* Grid interna para Nombre y Correo en una fila */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre"
                  className="w-full bg-[#08060d] border border-slate-800 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase">Correo</label>
                <input 
                  type="email" 
                  placeholder="tu@correo.com"
                  className="w-full bg-[#08060d] border border-slate-800 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Campo: Asunto */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase">Asunto</label>
              <input 
                type="text" 
                placeholder="¿En qué puedo ayudarte?"
                className="w-full bg-[#08060d] border border-slate-800 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors"
                required
              />
            </div>

            {/* Campo: Mensaje */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase">Mensaje</label>
              <textarea 
                rows="5"
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full bg-[#08060d] border border-slate-800 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            {/* Botón de Enviar */}
            <div className="pt-2">
              <button 
                type="submit"
                className="px-6 py-3 bg-[#aa3bff] hover:bg-[#b854ff] text-white font-medium text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(170,59,255,0.3)] flex items-center gap-2 group cursor-pointer"
              >
                Enviar mensaje 
                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}