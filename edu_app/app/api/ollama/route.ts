export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        const res = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama3",
                prompt: prompt,
                stream: false,
            }),
        });

        const data = await res.json();
        return new Response(JSON.stringify(data), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 })
    }
}