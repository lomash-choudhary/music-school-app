import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex items-center justify-center flex-col relative overflow-hidden mx-auto py-10 md:py-0">

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />

      <div className="p-4 relative z-10 w-full text-center ">

        <h1 className="mt-20 md:mt-10 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>

        <p className="mt-14 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our Comprehensive music courses and transform your musical
          journey today. Whether you're a begginer or looking to refine your
          skills, join us to unlock your true potential
        </p>

        <div className="mt-14">

          <Link href={"/courses"}>

            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-100 dark:border-black"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
