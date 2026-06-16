import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-32">
      <Container>
        <span className="eyebrow">Error 404</span>
        <h1 className="display mt-6 text-4xl text-ink sm:text-5xl">
          This page could not be found
        </h1>
        <p className="lede mt-6 max-w-md">
          The page you are looking for may have moved, or never existed. Let us point you
          back to clearer ground.
        </p>
        <div className="mt-10">
          <Button href="/">Return home</Button>
        </div>
      </Container>
    </section>
  );
}
