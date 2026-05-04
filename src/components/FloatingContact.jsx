import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "../data/siteData";

export default function FloatingContact() {
  const { phone, whatsapp } = siteData.clinic;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-3 md:hidden">
      <a
        href={`tel:${phone}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-sky-500 px-4 py-3 text-sm font-black text-white shadow-2xl shadow-sky-500/25"
      >
        <Phone size={17} />
        Call
      </a>

      <a
        href={`https://wa.me/${whatsapp}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/95 px-4 py-3 text-sm font-black text-slate-900 backdrop-blur-xl"
      >
        <MessageCircle size={17} />
        WhatsApp
      </a>
    </div>
  );
}