"use client"

import { useEffect, useState } from "react";
import { MoodEntry } from "@/utils/moods";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminPage() {
  const [moods, setMoods] = useState<MoodEntry[]>([]);

  useEffect(() => {
    const fetchMoods = async () => {
      const res = await fetch("/api/mood");
      const data = await res.json();
      setMoods(data);
    };

    fetchMoods();
  }, []);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Mood Entries Dashboard</h1>

      <div className="overflow-auto border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mood</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {moods.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  No mood entries found.
                </TableCell>
              </TableRow>
            ) : (
              moods.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.mood}</TableCell>
                  <TableCell>{entry.comment || "—"}</TableCell>
                  <TableCell>{new Date(entry.timestamp).toLocaleString()}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
