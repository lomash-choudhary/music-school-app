"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function MovingCardsComponent() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.07] items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices Of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={cardsData}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    </div>
  );
}

const cardsData = [
    {
    quote: "Music theory opened up a whole new world of composition for me. Understanding scales, chords, and harmonies transformed my songwriting in ways I never imagined possible.",
    name: "Sarah Chen",
    title: "Advanced Music Theory Masterclass",
    },
    {
    quote: "From barely being able to hold a guitar to performing at local venues - this course didn't just teach me techniques, it gave me the confidence to pursue my musical dreams.",
    name: "James Rodriguez",
    title: "Guitar for Beginners: From Zero to Hero",
    },
    {
    quote: "Twenty years of classical piano training, distilled into a comprehensive course that takes you from basics to virtuoso. Every lesson builds upon the last, creating a solid foundation.",
    name: "Dr. Maria Kovacs",
    title: "Classical Piano Fundamentals",
    },
    {
    quote: "Learning jazz improvisation changed everything I knew about music. It's not just about the notes - it's about finding your voice and telling your story through melody.",
    name: "Marcus Thompson",
    title: "Jazz Improvisation: The Art of Expression",
    },
    {
    quote: "Production isn't just about pushing buttons - it's about understanding sound design, arrangement, and how to bring out the best in every track. This course teaches you the why, not just the how.",
    name: "Alex White",
    title: "Modern Music Production Essentials",
    }
];