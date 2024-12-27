"use client";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
    {
    title: "Berklee Online",
    description: "A renowned music education platform offering accredited music courses in performance, production, business, and composition from Berklee College of Music.",
    link: "https://online.berklee.edu/"
    },
    {
    title: "MasterClass Music",
    description: "A premium learning platform featuring in-depth music courses taught by legendary artists, producers, and composers from around the world.",
    link: "https://masterclass.com/music/"
    },
    {
    title: "Soundfly",
    description: "An innovative online music school offering courses in music production, theory, songwriting, and audio engineering with personalized mentorship.",
    link: "https://soundfly.com/"
    },
    {
    title: "Udemy Music",
    description: "A comprehensive online learning marketplace offering thousands of music courses ranging from beginner to advanced levels in various instruments and music skills.",
    link: "https://udemy.com/topic/music/"
    },
    {
    title: "Guitar Tricks",
    description: "An online guitar learning platform with step-by-step lessons for beginners to advanced players, featuring a vast library of song tutorials and technique training.",
    link: "https://guitartricks.com/"
    },
    {
    title: "Coursera Music",
    description: "A platform partnering with top universities and music institutions to offer high-quality music education, from music theory to digital production.",
    link: "https://coursera.org/browse/arts-and-humanities/music/"
    }
]

 
export function CardComponent() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}