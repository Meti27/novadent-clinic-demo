import { motion } from "framer-motion";
import { CalendarCheck, Star, ShieldCheck, MapPin } from "lucide-react";
import { siteData } from "../data/siteData";
import Button from "../components/Button";

export default function Hero() {
  const { hero, clinic } = siteData;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7fbff] pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-sky-600 shadow-sm"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="text-balance max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-slate-950 sm:text-6xl md:text-7xl"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#appointment">{hero.primaryCta}</Button>
            <Button href="#services" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-3"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-black text-slate-950">
                {clinic.rating}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                Patient rating
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-black text-slate-950">
                {clinic.reviews}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                Reviews
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-black text-slate-950">24h</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                Emergency help
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-sky-300/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-sky-900/10">
            <img
              src={hero.image}
              alt="Modern dental clinic"
              className="h-[520px] w-full rounded-[1.5rem] object-cover"
            />

            <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex gap-3">
                  <CalendarCheck className="text-sky-500" size={22} />
                  <div>
                    <p className="font-black text-slate-950">Easy booking</p>
                    <p className="text-sm text-slate-500">Fast appointments</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <ShieldCheck className="text-sky-500" size={22} />
                  <div>
                    <p className="font-black text-slate-950">Gentle care</p>
                    <p className="text-sm text-slate-500">Patient-first</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="text-sky-500" size={22} />
                  <div>
                    <p className="font-black text-slate-950">{clinic.city}</p>
                    <p className="text-sm text-slate-500">Central clinic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-8 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl md:block">
            <div className="flex items-center gap-2">
              <Star className="fill-sky-500 text-sky-500" size={18} />
              <span className="font-black text-slate-950">
                {clinic.rating}
              </span>
            </div>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              Trusted by patients
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}