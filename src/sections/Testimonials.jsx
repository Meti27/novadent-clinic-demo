import { Star } from "lucide-react";
import { siteData } from "../data/siteData";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Patient Reviews"
          title="Trust signals matter more for clinics than almost any other niche."
          description="Real patient reviews, ratings, and calm copy help patients feel safer before booking."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {siteData.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7">
                <div className="mb-6 flex gap-1 text-sky-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-lg leading-8 text-slate-700">
                  “{testimonial.text}”
                </p>

                <p className="mt-6 font-black text-slate-950">
                  {testimonial.name}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}