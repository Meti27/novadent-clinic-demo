import { siteData } from "../data/siteData";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

export default function Doctors() {
  return (
    <section id="doctors" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Doctors"
          title="Patients trust people before they trust a clinic."
          description="Doctor profiles make the website feel more real, personal, and professional."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {siteData.doctors.map((doctor, index) => (
            <Reveal key={doctor.name} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-[360px] w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-black text-slate-950">
                    {doctor.name}
                  </h3>

                  <p className="mt-2 font-semibold text-sky-600">
                    {doctor.role}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Focused on calm communication, patient comfort, and modern dental care.
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}