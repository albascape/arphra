/**
 * Full-bleed photographic background layered over a solid dark base, so the
 * section still reads as an intentional dark panel if the image fails to load.
 * A left-anchored scrim keeps left-aligned text legible even over bright imagery.
 */
export function PhotoBackground({
  src,
  overlay = "linear-gradient(180deg, rgba(10,13,19,0.74) 0%, rgba(10,13,19,0.82) 60%, rgba(10,13,19,0.9) 100%)",
  position = "center",
  scrim = true,
}: {
  src: string;
  overlay?: string;
  position?: string;
  scrim?: boolean;
}) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 bg-night">
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url("${src}")`, backgroundPosition: position }}
      />
      <div className="absolute inset-0" style={{ background: overlay }} />
      {scrim && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,11,16,0.78) 0%, rgba(8,11,16,0.5) 38%, rgba(8,11,16,0.12) 70%, rgba(8,11,16,0) 100%)",
          }}
        />
      )}
    </div>
  );
}
