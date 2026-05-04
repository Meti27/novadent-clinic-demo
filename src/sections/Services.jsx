import { ArrowRight } from "lucide-react";
import { siteData } from "../data/siteData";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-[#f7fbff] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Dental services presented clearly before patients call."
          description="For clinics, clear service pages build trust and help patients understand what they can book."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteData.services.map((service, index) => (
            <Reveal key={service.name} delay={index * 0.06}>
              <article className="group min-h-[260px] rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/5">
                <div className="mb-10 flex items-start justify-between">
                  <span className="text-sm font-black text-sky-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-sky-500 group-hover:text-white">
                    <ArrowRight size={18} />
                  </span>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-slate-950">
                  {service.name}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <p className="mt-7 border-t border-slate-200 pt-5 text-sm font-black text-sky-600">
                  {service.price}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}