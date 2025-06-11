'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const moods = [
  { label: "Happy", emoji: "😄" },
  { label: "Neutral", emoji: "😐" },
  { label: "Sad", emoji: "😞" },
];

export default function MoodPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!selectedMood) return;

    await fetch("/api/mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mood: selectedMood,
        comment,
      }),
    });

    setSubmitted(true);
    setSelectedMood(null);
    setComment("");
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Thanks for submitting!</h2>
        <Button onClick={() => setSubmitted(false)}>Submit Again</Button>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">How are you feeling today?</h1>

      <div className="flex gap-6 mb-6">
        {moods.map(({ label, emoji }) => (
          <button
            key={label}
            onClick={() => setSelectedMood(label)}
            className={`text-4xl p-4 rounded-full border-2 ${
              selectedMood === label ? "border-blue-500" : "border-transparent"
            } hover:scale-110 transition`}
            aria-label={label}
          >
            {emoji}
          </button>
        ))}
      </div>

      <Textarea
        placeholder="Optional comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full max-w-md mb-6"
      />

      <Button onClick={handleSubmit} disabled={!selectedMood}>
        Submit
      </Button>
    </main>
  );
}
