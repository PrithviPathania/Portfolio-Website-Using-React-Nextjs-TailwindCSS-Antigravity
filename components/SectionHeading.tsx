import React from "react";

export default function SectionHeading({
  icon,
  title,
  id,
}: {
  icon: React.ReactNode;
  title: string;
  id?: string;
}) {
  return (
    <div id={id} className="flex items-center gap-3 mb-8 scroll-mt-24">
      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        {icon}
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 section-heading">
        {title}
      </h2>
    </div>
  );
}
