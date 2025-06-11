import { NextRequest, NextResponse } from "next/server";
import { moods, MoodEntry } from "@/utils/moods";

export async function GET() {
  return NextResponse.json(moods);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { mood, comment } = body;

    if (!["Happy", "Neutral", "Sad"].includes(mood)) {
      return NextResponse.json({ error: "Invalid mood" }, { status: 400 });
    }

    const newEntry: MoodEntry = {
      mood,
      comment,
      timestamp: new Date().toISOString(),
    };

    moods.push(newEntry);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
