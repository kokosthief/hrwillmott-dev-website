import React from "react";
import Image from "next/image";
import userData from "@constants/data";

export default function Projects() {
  // Structured data for CreativeWork schema
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Portfolio Projects",
    "description": "A collection of web development projects by Henry Willmott",
    "itemListElement": userData.projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "url": project.link,
        "image": "https://hrwillmott.com" + project.imgUrl,
        "author": {
          "@type": "Person",
          "name": userData.name
        },
        "creator": {
          "@type": "Person",
          "name": userData.name
        }
      }
    }))
  };

  return (
    <section className="bg-white dark:bg-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsStructuredData) }}
      />
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <Image
            src={imgUrl}
            alt={title + ' project screenshot'}
            width={600}
            height={288}
            className="transform hover:scale-110 transition duration-3000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-md bg-[#334155] rounded-lg px-3">
          {title}
        </h1>
        <h1 className="absolute bottom-10 right-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
