export type MoodEntry = {
    mood: "Happy" | "Neutral" | "Sad";
    comment?: string;
    timestamp: string;
  };
  
 export const moods: MoodEntry[] = [];
  