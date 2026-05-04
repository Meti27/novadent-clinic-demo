import { Stethoscope } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500 text-white">
            <Stethoscope size={17} />
          </span>

          <span className="font-black text-slate-950">
            {siteData.clinic.name}
          </span>
        </div>

        <p>
          Demo website for dental clinics and private medical practices.
        </p>
      </div>
    </footer>
  );
}