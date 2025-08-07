export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 8;
  const category = searchParams.get("category");

  try {
    let url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/public/list?page=${page}&limit=${limit}`;
    if (category) {
      url += `&category=${category}`;
    }

    const res = await fetch(url, { cache: "no-store" });

    console.log("response from API:", res);

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), {
        status: res.status,
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}