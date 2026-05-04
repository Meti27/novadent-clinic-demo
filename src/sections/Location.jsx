import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteData } from "../data/siteData";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

export default function Location() {
  const { clinic, openingHours } = siteData;

  return (
    <section id="location" className="bg-white px-5 py-24 pb-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Location"
          title="Make it easy for patients to call, visit, or find the clinic."
          description="For clinics, clear contact information and opening hours are critical."
        />

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-1 text-sky-500" size={22} />
                  <div>
                    <h3 className="font-black text-slate-950">Address</h3>
                    <p className="mt-1 text-slate-600">{clinic.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-1 text-sky-500" size={22} />
                  <div>
                    <h3 className="font-black text-slate-950">Phone</h3>
                    <p className="mt-1 text-slate-600">{clinic.phone}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-1 text-sky-500" size={22} />
                  <div>
                    <h3 className="font-black text-slate-950">Email</h3>
                    <p className="mt-1 text-slate-600">{clinic.email}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 text-sky-500" size={22} />
                  <div className="w-full">
                    <h3 className="font-black text-slate-950">
                      Opening Hours
                    </h3>

                    <div className="mt-3 space-y-3">
                      {openingHours.map((item) => (
                        <div
                          key={item.day}
                          className="flex items-center justify-between border-b border-slate-200 pb-3 text-sm"
                        >
                          <span className="text-slate-600">{item.day}</span>
                          <span className="font-black text-slate-950">
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="min-h-[440px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
              <iframe
                title="Google Maps demo location"
                src="https://www.google.com/maps?q=Mitte%20Berlin&output=embed"
                className="h-[440px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}