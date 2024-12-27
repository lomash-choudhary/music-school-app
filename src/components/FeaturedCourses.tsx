"use client";
import Link from "next/link";
import courses from "@/data/music-data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import CustomButton from "./CustomButton";
import Image from "next/image";

interface courseInterface {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string
}

export default function FeaturedCourses() {
  const courseData = courses.courses.filter(
    (course: courseInterface) => course.isFeatured
  );
  return (
    <section className="py-12 bg-gray-900 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseData.map((course: courseInterface) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col h-full rounded-[22px] w-full max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900">
                  <div className="flex flex-col flex-grow space-y-4">
                    <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <Image
                      src={course.image}
                      alt="jordans"
                      height="400"
                      width="400"
                    />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 flex-grow">
                      {course.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-gray-900 dark:text-white font-bold">
                        ${course.price}
                      </span>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-20">
          <CustomButton text="View All Courses"/>
        </div>
      </div>
    </section>
  );
}
