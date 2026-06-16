import Link from "next/link";

/* Container ------------------------------------------------------------------ */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

/* Eyebrow -------------------------------------------------------------------- */
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`eyebrow inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-6 bg-accent/60" aria-hidden />
      {children}
    </span>
  );
}

/* Button --------------------------------------------------------------------- */
type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost" | "light";
  className?: string;
};

export function Button({ href, children, variant = "solid", className = "" }: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300";

  const variants: Record<string, string> = {
    solid: "bg-ink text-paper hover:bg-accent-deep",
    outline:
      "border border-ink/20 text-ink hover:border-ink/50 hover:bg-ink hover:text-paper",
    ghost: "text-ink hover:text-accent-deep",
    light:
      "border border-paper/25 text-paper hover:border-paper/70 hover:bg-paper hover:text-ink",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

/* Section heading ------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow className="mb-6">{eyebrow}</Eyebrow>}
      <h2 className="display text-3xl text-ink sm:text-4xl lg:text-[2.9rem]">{title}</h2>
    </div>
  );
}
