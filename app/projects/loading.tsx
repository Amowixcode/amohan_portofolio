import Container from "@/components/container";

export default function Loading() {
  return (
    <main>
      <Container>
        <section className="section-spacing pt-16 sm:pt-24">
          <div className="mb-10 max-w-3xl space-y-4">
            <div className="h-4 w-24 rounded-full bg-white/10" />
            <div className="h-14 w-full max-w-3xl rounded-2xl bg-white/10" />
            <div className="h-6 w-full max-w-2xl rounded-full bg-white/10" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
                <div className="h-56 w-full animate-pulse bg-white/10" />
                <div className="space-y-4 p-6">
                  <div className="h-6 w-2/3 animate-pulse rounded-full bg-white/10" />
                  <div className="h-4 w-full animate-pulse rounded-full bg-white/10" />
                  <div className="h-4 w-4/5 animate-pulse rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
