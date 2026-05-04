import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

const steps = [
  {
    title: "Book a visit",
    text: "Patients call, message, or use the appointment button to request a visit.",
  },
  {
    title: "Get checked",
    text: "The clinic examines the patient and explains the treatment options clearly.",
  },
  {
    title: "Treatment plan",
    text: "Patients understand price, timing, and the next steps before treatment begins.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#f7fbff] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Patient Journey"
          title="A simple process helps nervous patients feel prepared."
          description="This section makes the clinic feel more organized and lowers hesitation before booking."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-lg font-black text-white">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-black text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}