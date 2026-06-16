/**
 * Full-bleed photographic background layered over a solid dark base, so the
 * section still reads as an intentional dark panel if the image fails to load.
 */
export function PhotoBackground({
  src,
  overlay = "linear-gradient(180deg, rgba(10,13,19,0.74) 0%, rgba(10,13,19,0.82) 60%, rgba(10,13,19,0.9) 100%)",
  position = "center",
}: {
  src: string;
  overlay?: string;
  position?: string;
}) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 bg-night">
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url("${src}")`, backgroundPosition: position }}
      />
      <div className="absolute inset-0" style={{ background: overlay }} />
    </div>
  );
}
