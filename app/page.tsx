import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
            <ThemeToggle />
      <h1 className="text-4xl font-bold mb-4">Welcome to the Mood Tracker</h1>
      <p className="text-lg text-gray-600 mb-6 dark:text-gray-400">
        Let us know how you are feeling today
      </p>
      <Link href="/mood">
        <Button className="text-lg px-6 py-4">Submit Your Mood</Button>
      </Link>
    </div>
  );
}
