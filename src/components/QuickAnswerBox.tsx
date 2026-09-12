import React from 'react';
import { Zap } from 'lucide-react';

interface QuickAnswerHighlight {
  label: string;
  value: string;
}

interface QuickAnswerBoxProps {
  title?: string;
  answer: string | React.ReactNode;
  highlights?: QuickAnswerHighlight[];
  className?: string;
}

export default function QuickAnswerBox({
  title = "Quick Answer: Key Takeaways",
  answer,
  highlights = [],
  className = ""
}: QuickAnswerBoxProps) {
  return (
    <div 
      id="quick-answer" 
      className={`aeo-quick-answer not-prose my-8 p-6 bg-slate-50 border-l-4 border-[#2563EB] rounded-r-2xl border-y border-r border-slate-200/80 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-3">
        <Zap className="w-4 h-4 text-[#2563EB] shrink-0" />
        <span>{title}</span>
      </div>
      <div className="text-slate-900 font-medium text-base sm:text-lg leading-relaxed">
        {answer}
      </div>
      {highlights.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-200/80">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white/80 rounded-lg p-2.5 border border-slate-200/60">
              <span className="block text-xs text-slate-500 font-semibold">{item.label}</span>
              <span className="block text-sm font-bold text-slate-900">{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
