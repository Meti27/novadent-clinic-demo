export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-300";

  const variants = {
    primary:
      "bg-sky-500 text-white shadow-lg shadow-sky-500/20 hover:bg-sky-600 hover:-translate-y-0.5",
    secondary:
      "border border-slate-200 bg-white text-slate-900 hover:border-sky-200 hover:bg-sky-50 hover:-translate-y-0.5",
    ghost: "text-slate-700 hover:text-sky-600",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}