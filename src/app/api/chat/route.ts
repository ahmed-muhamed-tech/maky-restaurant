import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { chatInput } = await request.json();
    const n8n_url = process.env.N8N_WEBHOOK_URL;

    if (!n8n_url)
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 },
      );

    const res = await fetch(n8n_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({
        chatInput,
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 },
    );
  }
}
