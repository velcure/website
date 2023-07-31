import { Container } from "#/ui/Container";

export default function NotFound() {
  return (
    <section>
      <Container className="flex min-h-screen items-center">
        <div>
          <p className="text-default text-sm font-medium">404 error</p>
          <h1 className="text-default mt-3 text-2xl font-semibold md:text-3xl">
            We can&apos;t find that page
          </h1>
          <p className="text-default mt-4">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6 flex items-center gap-x-3"></div>
        </div>
      </Container>
    </section>
  );
}
