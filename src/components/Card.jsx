import React from 'react';

export default function Card({ tags, title, description, status }) {
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between">
      <div>
        <div className="text-cyan-400 text-xs font-mono mb-2">{tags}</div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
      </div>
      <span className="text-xs text-slate-500 font-mono">{status}</span>
    </div>
  );
}