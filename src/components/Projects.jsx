import React from "react";
import { ArrowRight } from "lucide-react";

function Projects() {
  return (
    <div className="px-20 py-10 bg-base-200 min-h-screen">
      <div className="flex justify-between mb-12">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <a href="./projects" className="">
          <button className="btn btn-soft btn-accent rounded-2xl">
            Show More <ArrowRight />
          </button>
        </a>
      </div>
      <div className="flex flex-wrap gap-6 w-ful items-center">
        
        <div className="emeraldcard bg-base-100 w-[23%] shadow-sm rounded-lg">
          <figure>
            <img
              src="/assets/project-3.png"
              alt="Shoes"
              className="rounded-t-lg"
            />
          </figure>
          <div className="emeraldcard-body p-4">
            <h2 className="emeraldcard-title font-bold text-lg">
              Ice Movie App
            </h2>
            <p className="pb-2 text-sm line-clamp-4 hover:line-clamp-none">
              I have developed a website called Ice Movie App that offers
              various features to help users search for and discover information
              about the latest movies. The website includes several key
              features, such as Now Playing, Trending, Search Movie, Popular,
              and Top Rated.
            </p>
            <div className="emeraldcard-actions justify-end pt-2 border-t-2 border-base-300">
              <div className="emeraldbadge emeraldbadge-outline text-sm line-clamp-1 hover:line-clamp-none">
                HTML || CSS || JS-API TMDb
              </div>
            </div>
          </div>
        </div>
        <div className="emeraldcard bg-base-100 w-[23%] shadow-sm rounded-lg">
          <figure>
            <img
              src="./assets/project-5.jpg"
              alt="BTNG"
              className="rounded-t-lg"
            />
          </figure>
          <div className="emeraldcard-body p-4">
            <h2 className="emeraldcard-title font-bold text-lg">
              DINACOM 2025
            </h2>
            <p className="pb-2 text-sm line-clamp-4 hover:line-clamp-none">
              As Project Manager and Frontend Web Developer, I led the
              development of a competition registration website using React.js
              and Tailwind CSS, ensuring on-time delivery. I optimized the
              registration process for hundreds of participants with a
              responsive design and reliable validation system.
            </p>
            <div className="emeraldcard-actions justify-end pt-2 border-t-2 border-base-300">
              <div className="emeraldbadge emeraldbadge-outline text-sm line-clamp-1 hover:line-clamp-none">
                {" "}
                React.js || Tailwind CSS || Project Management || Inertia.js ||
                Laravel || Scrum || Trello
              </div>
            </div>
          </div>
        </div>
        <div className="emeraldcard bg-base-100 w-[23%] shadow-sm rounded-lg">
          <figure>
            <img
              src="./assets/project-6.jpg"
              alt="SUMMAREASE"
              className="rounded-t-lg"
            />
          </figure>
          <div className="emeraldcard-body p-4">
            <h2 className="emeraldcard-title font-bold text-lg">SUMMAREASE</h2>
            <p className="pb-2 text-sm line-clamp-4 hover:line-clamp-none">
              As a Developer, I created a desktop application using JavaFX to
              summarize text with rule-based and API-based methods, offering
              export options to .txt and .pdf formats. The app stores summary
              history in memory and allows users to customize preferences like
              default summary methods and export locations, all within a modern,
              interactive UI.
            </p>
            <div className="emeraldcard-actions justify-end pt-2 border-t-2 border-base-300">
              <div className="emeraldbadge emeraldbadge-outline text-sm line-clamp-1 hover:line-clamp-none">
                {" "}
                Java 21 || Maven || JavaFX || Apache PDFBox || OkHttp || Gson
              </div>
            </div>
          </div>
        </div>
        <div className="emeraldcard bg-base-100 w-[23%] shadow-sm rounded-lg">
          <figure>
            <img
              src="./assets/project-8.jpg"
              alt="ECOPOS"
              className="rounded-t-lg"
            />
          </figure>
          <div className="emeraldcard-body p-4">
            <h2 className="emeraldcard-title font-bold text-lg">ECOPOS</h2>
            <p className="pb-2 text-sm line-clamp-4 hover:line-clamp-none">
              As a Frontend Web Developer, I created a responsive POS interface
              with Next.js, Tailwind CSS, and Shadcn UI, implementing features
              like transaction logging, product management, and a streamlined
              dashboard to enhance operational efficiency.
            </p>
            <div className="emeraldcard-actions justify-end pt-2 border-t-2 border-base-300">
              <div className="emeraldbadge emeraldbadge-outline text-sm line-clamp-1 hover:line-clamp-none">
                Next.js || Tailwind CSS || Shadcn UI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
