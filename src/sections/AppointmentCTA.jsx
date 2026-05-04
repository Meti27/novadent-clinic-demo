import {
  CalendarCheck,
  Phone,
  MessageCircle,
  CheckCircle2,
  Send,
} from "lucide-react";
import { siteData } from "../data/siteData";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

export default function AppointmentCTA() {
  const { phone, whatsapp, emergencyText } = siteData.clinic;

  return (
    <section id="appointment" className="bg-white px-5 py-24 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-sky-900/10 md:p-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-sky-300">
                Book Appointment
              </p>

              <h2 className="text-balance text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
                Make the first step feel simple.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Patients can call, message, or request an appointment online.
                For a real clinic, this can connect to a booking form,
                scheduling tool, or clinic management system.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-sky-500/10 px-4 py-2 text-sm font-bold text-sky-200">
                <CalendarCheck size={18} />
                {emergencyText}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={`tel:${phone}`} className="gap-2">
                  <Phone size={18} />
                  Call Clinic
                </Button>

                <Button
                  href={`https://wa.me/${whatsapp}`}
                  variant="secondary"
                  className="gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
              <div className="rounded-[1.4rem] bg-white p-6 text-slate-950">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-500">
                      Appointment request
                    </p>
                    <h3 className="mt-1 text-2xl font-black">
                      New patient visit
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                    <Send size={22} />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Patient
                    </p>
                    <p className="mt-1 font-black">Mira S.</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Treatment
                    </p>
                    <p className="mt-1 font-black">Checkup + Cleaning</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Preferred time
                    </p>
                    <p className="mt-1 font-black">Tomorrow, 10:30</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-green-50 px-4 py-4 text-green-700">
                  <CheckCircle2 size={22} />
                  <p className="text-sm font-black">
                    Request received by clinic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}