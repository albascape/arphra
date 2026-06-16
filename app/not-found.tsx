import { Container, Button } from "@/components/ui";
import { PhotoBackground } from "@/components/PhotoBackground";
import { images } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="photo-host on-dark relative flex min-h-screen items-center overflow-hidden text-paper">
      <PhotoBackground
        src={images.process}
        overlay="linear-gradient(180deg, rgba(10,13,19,0.86) 0%, rgba(10,13,19,0.8) 100%)"
      />
      <Container>
        <span className="eyebrow text-accent-bright">Error 404</span>
        <h1 className="display mt-6 text-4xl text-paper sm:text-5xl lg:text-6xl">
          This page could not be found
        </h1>
        <p className="lede mt-6 max-w-md text-paper/70">
          The page you are looking for may have moved, or never existed. Let us point you
          back to clearer ground.
        </p>
        <div className="mt-10">
          <Button href="/" variant="primary">
            Return home
          </Button>
        </div>
      </Container>
    </section>
  );
}
