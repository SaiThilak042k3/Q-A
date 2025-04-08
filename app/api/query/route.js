// /app/api/query/route.ts
export async function POST(req: Request) {
  const { query } = await req.json();

  const res = await fetch("https://your-backend-url.onrender.com/query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });

  const result = await res.json();

  return Response.json(result);
}
