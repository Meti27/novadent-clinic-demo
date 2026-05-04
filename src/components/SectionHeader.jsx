import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-sky-500">
        {eyebrow}
      </p>

      <h2 className="text-balance text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </Reveal>
  );
}