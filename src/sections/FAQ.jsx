import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteData } from "../data/siteData";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#f7fbff] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions patients usually ask before booking."
          description="FAQ sections are especially useful for clinics because patients often need reassurance before making an appointment."
        />

        <div className="space-y-4">
          {siteData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} delay={index * 0.04}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full rounded-[1.5rem] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:border-sky-200"
                >
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="text-lg font-black text-slate-950">
                      {faq.question}
                    </h3>

                    <span
                      className={`flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sky-50 text-sky-600 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={20} />
                    </span>
                  </div>

                  {isOpen && (
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}