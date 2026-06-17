import React from 'react';

export default function Experience() {
  // Estructura de datos para mapear tu trayectoria fácilmente si agregas más en el futuro
  const experiencias = [
    {
      year: '2025',
      role: 'Desarrollador de Software Modular',
      company: 'Plataforma CIP 360',
      badge: 'TI',
      tasks: [
        'Diseño y desarrollo del módulo de Servicios implementando lógica estructurada para la plataforma.',
        'Modelado y optimización de flujos de datos internos alineados a metodologías ágiles.',
        'Integración de interfaces dinámicas y consumo de repositorios controlados.',
      ],
    },
    {
      year: '2025',
      role: 'Simulación y Auditoría de Redes',
      company: 'Entorno de Pruebas - Laboratorio de Ingeniería',
      badge: 'SEC',
      tasks: [
        'Simulación de entornos de red y ataques controlados entre sistemas Parrot OS y Windows 10.',
        'Análisis de conexiones TCP inversas, configuración de hosts y gestión de exclusiones de firewalls.',
        'Documentación técnica de vulnerabilidades y despliegue de configuraciones de red eficientes.',
      ],
    },
  ];

  return (
    <section id="trayectoria" className="py-24 bg-[#08060d] text-slate-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Cabecera de la sección estilo image_429aea.png */}
        <div className="mb-16">
          <span className="text-purple-500 font-mono text-xs uppercase tracking-widest block mb-2">
            03 — Trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Experiencia
          </h2>
        </div>

        {/* CONTENEDOR DE LA LÍNEA DE TIEMPO */}
        <div className="relative border-l border-purple-950/40 ml-4 md:ml-32 space-y-12">
          
          {experiencias.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              
              {/* NODO / PUNTO EN LA LÍNEA DE TIEMPO */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#aa3bff] shadow-[0_0_10px_rgba(170,59,255,0.8)] transition-transform group-hover:scale-125" />

              {/* AÑO (Alineado a la izquierda en pantallas grandes, arriba en móviles) */}
              <div className="md:absolute md:-left-32 md:top-0 md:w-24 md:text-right text-purple-400 font-mono text-sm font-semibold mb-2 md:mb-0">
                {exp.year}
              </div>

              {/* TARJETA DE CONTENIDO */}
              <div className="bg-[#0f0c15] border border-purple-950/20 rounded-2xl p-6 md:p-8 space-y-4 hover:border-purple-500/20 transition-all">
                
                {/* Encabezado de la Tarjeta */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Badge circular de la derecha (ej. TI, SEC) */}
                  <span className="w-8 h-8 rounded-full bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-[10px] font-mono font-bold text-purple-400 shrink-0">
                    {exp.badge}
                  </span>
                </div>

                {/* LISTA DE TAREAS CON VIÑETAS DE FLECHA */}
                <ul className="space-y-3 text-sm text-slate-300 font-light leading-relaxed">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {/* Viñeta en forma de flecha idéntica a la imagen */}
                      <span className="text-purple-500 font-mono text-xs select-none mt-1">
                        ▸
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}