import { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import { siteData } from "../data/siteData";
import Button from "./Button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Location", href: "#location" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/20">
            <Stethoscope size={20} />
          </span>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-slate-950">
              {siteData.clinic.name}
            </p>
            <p className="hidden text-xs text-slate-500 sm:block">
              Dental & oral care
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-sky-600"
            >
              {link.label}
            </a>
          ))}

          <Button href="#appointment">Book Appointment</Button>
        </div>

        <button
          onClick={() => setOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-800"
              >
                {link.label}
              </a>
            ))}

            <Button href="#appointment" className="w-full">
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}