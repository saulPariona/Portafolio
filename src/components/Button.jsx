import React from 'react';

export default function Button({ text, href, variant = 'primary' }) {
  const baseStyles = "px-6 py-3 font-semibold rounded-lg transition-all transform hover:-translate-y-0.5 inline-block text-center";
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20",
    secondary: "border border-slate-700 hover:border-slate-500 text-slate-300"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </a>
  );
}