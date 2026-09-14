import { NextResponse } from 'next/server';
import { moodEntries } from '@/db/schema';
import { getDb } from '@/db';

const ALLOWED_MOODS = new Set([
  'Drained', 'Stressed', 'Restless', 'Bored', 'Lonely', 'Low & heavy',
  'Overwhelmed', 'Disconnected', 'Homesick', 'Cabin fever', 'Anxious', 'Frustrated',
  'Uninspired', 'Reflective', 'Curious', 'Celebratory', 'Hopeful', 'Content', 'Energised',
  'Playful', 'Sociable', 'Adventurous', 'Inspired', 'Spontaneous', 'Romantic', 'Confident',
]);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { mood?: string };
    if (!body.mood || !ALLOWED_MOODS.has(body.mood)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    await getDb().insert(moodEntries).values({ mood: body.mood });
    return NextResponse.json({ ok: true });
  } catch {
    // Analytics should never interrupt the escape-planning flow.
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}
