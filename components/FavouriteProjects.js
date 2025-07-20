import React from "react";
import Link from "next/link";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center">
            Favourite Projects
          </h1>
          <Link
            href="/projects"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View all</p>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40">
           {/* Single card */}
          <a
            href="https://team.odessa.amsterdam/"
            className="block col-span-3 md:col-span-3 shadow-2xl"
            style={{ gridColumn: "1 / -1" }} // <-- This forces the card to span all columns
          >
            <div className="relative overflow-hidden w-full h-full">
              <img
                src="/team-odessa.gif"
                alt="cue to text converter rekordbox app"
                className="w-full h-full object-cover transform hover:scale-125 transition duration-3000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-cyan-700 rounded-md px-2">
                Odessa Team Manaagement App
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://ropacs.vercel.app/"
            className="w-full block col-span-1 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/ropacs.gif"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-3000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-cyan-700 rounded-lg px-2">
                ROPACS - Rope Access
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                03
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://docs.defirobot.org/"
            className="w-full block col-span-1 sm:col-span-1 object-cover"
          >
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src="/drbt-documentation.jpeg"
                alt="drbt documentation"
                className="transform hover:scale-125 transition duration-3000 ease-out object-cover shadow-2xl"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-cyan-700 rounded-md px-2">
                DeFi-Robot Documentation
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                04
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://web.archive.org/web/20210715154451/https://roetz-bikes.com/"
            className="w-full block col-span-1 sm:col-span-1 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/roetz.gif"
                alt="roetz-bike landing page"
                className="transform hover:scale-125 transition duration-3000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-cyan-700 rounded-md px-2">
                Roetz-Bikes Landing Page
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                05
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
