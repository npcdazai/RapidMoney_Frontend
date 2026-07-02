import { revalidatePath } from 'next/cache'

export async function POST(request) {
    const body = await request.json();
  
    const { secret, path, type } = body;

    console.log("Revalidate API called:", { secret, path, type });

    if (secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
      return new Response(JSON.stringify({ message: "Invalid token" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      const revalidate = require('next/cache').revalidatePath;
      // type 'layout' revalidates every route under the given layout
      // (used for global sections like header/footer); defaults to 'page'.
      if (type === "layout") {
        revalidate(path, "layout");
      } else {
        revalidate(path);
      }
      return new Response(JSON.stringify({ revalidated: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Revalidate error:", err);
      return new Response(JSON.stringify({ message: "Error revalidating" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  