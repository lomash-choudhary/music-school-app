"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import trackProgess from "@/images/isaac-smith-6EnTPvPPL6I-unsplash.jpg"
import collborativeSession from "@/images/premium_photo-1703618159386-0be5e568f655.jpeg"
import feedbackImage from "@/images/premium_photo-1682310144714-cb77b1e6d64a.jpeg"
import neverMissABeatImage from "@/images/emiliano-vittoriosi-hxWzj5mRulU-unsplash.jpg"


const content = [
    {
        title: "Collaborative Music Sessions",
        description:
          "Jam together in real-time with fellow musicians, instructors, and peers. Collaborate on compositions, share creative ideas, and fine-tune your musical pieces effortlessly. Our platform enhances your learning experience and fosters creativity through seamless collaboration.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src={collborativeSession}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
        title: "Real-Time Feedback",
        description:
          "Receive instant feedback on your practice sessions or performances. Our platform ensures that every note and rhythm is reviewed in real-time by your instructors, helping you improve and refine your skills faster than ever.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
            src={feedbackImage}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>  
      ),
    },
    {
        title: "Track Your Progress",
        description:
          "Stay on top of your musical journey with built-in progress tracking. Monitor your practice sessions, assignments, and achievements. With our platform, you'll never lose sight of your goals, making your music education both structured and inspiring.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Image
            src={trackProgess}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
        title: "Never Miss a Beat",
        description:
          "Keep all your lessons, practice sessions, and learning resources in one place. Our platform ensures you always have access to the latest course material, assignments, and class recordings. Stay organized and focus on what you love—playing music.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src={neverMissABeatImage}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
];

export default function WhyChooseUs() {
    return (
      <div>
        <StickyScroll content={content} />
      </div>
    );
}