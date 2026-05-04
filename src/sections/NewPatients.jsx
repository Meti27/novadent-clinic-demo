import { ClipboardCheck, Clock, HeartHandshake } from "lucide-react";
import { siteData } from "../data/siteData";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

const icons = [ClipboardCheck, Clock, HeartHandshake];

export default function NewPatients() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="New Patients"
          title="Everything patients need to know before the first visit."
          description="A clear first-visit section helps reduce hesitation and makes the clinic feel more organized."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-3 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80"
                alt="Dental consultation"
                className="h-[440px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </Reveal>

          <div className="grid gap-4">
            {siteData.newPatients.map((item, index) => {
              const Icon = icons[index];

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:border-sky-200 hover:bg-sky-50/50">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                      <Icon size={23} />
                    </div>

                    <h3 className="text-2xl font-black tracking-tight text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}