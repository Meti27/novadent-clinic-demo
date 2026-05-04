import { HeartPulse, ShieldCheck, Clock, Smile } from "lucide-react";
import Reveal from "../components/Reveal";

const items = [
  {
    icon: HeartPulse,
    title: "Gentle treatment",
    text: "Comfort-focused care for nervous patients.",
  },
  {
    icon: ShieldCheck,
    title: "Modern equipment",
    text: "Clean, safe, and professional environment.",
  },
  {
    icon: Clock,
    title: "Same-day help",
    text: "Emergency appointments when available.",
  },
  {
    icon: Smile,
    title: "Clear communication",
    text: "Simple explanations before every treatment.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-black text-slate-950">
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
    </section>
  );
}