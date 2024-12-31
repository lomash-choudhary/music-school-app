import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/moving-border";
export default function ContactComponent() {
  return (
    <div className="w-screen relative h-screen">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />

      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-center justify-start">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 text-center mt-[120px]">
          Contact Us
        </h1>
        <p className="w-[400px] text-center lg:w-[600px]">
          We're are here to help with any questions about our courses, programs,
          or events. Reach out and let us know how we can assist you in your
          musical journey
        </p>
        <input
          className="mt-8 bg-slate-800 text-white px-4 py-2 w-[500px] rounded-lg items-center"
          placeholder="Your Email Address"
        />
        <textarea
          className="mt-8 bg-slate-800 text-white px-4 py-2 w-[500px] rounded-lg items-center h-[200px]"
          placeholder="Your Message"
        />
        <div className="w-[500px] mt-6 flex justify-start">
          <button className="bg-cyan-600 px-4 py-2 rounded-lg courser-pointer hover:bg-opacity-85 transition-all duration-300">
            Submit
          </button>
        </div>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
}
