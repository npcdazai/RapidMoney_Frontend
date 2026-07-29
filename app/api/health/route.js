// Liveness probe for the container health check.
//
// Deliberately does no work: no DB access, no upstream API calls, no auth.
// It only proves the Node process is up and accepting connections, so the
// Docker health check cannot time out on slow upstream data fetching the way
// probing `/` does.

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  return new Response("ok", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}

export async function HEAD() {
  return new Response(null, {
    status: 200,
    headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
  });
}
