import React from "react";
import Navbar from "@/components/Navbar";

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
};

const projects: Project[] = [
  {
    id: 8,
    title: "ECOPOS",
    description:
      "As a Frontend Web Developer, I created a responsive POS interface with Next.js, Tailwind CSS, and Shadcn UI, implementing features like transaction logging, product management, and a streamlined dashboard to enhance operational efficiency.",
    techStack: "Next.js || Tailwind CSS || Shadcn UI",
    imageUrl: "/assets/project-8.jpg",
  },
  {
    id: 7,
    title: "POS - CodeIgniter 4",
    description:
      "As a Fullstack Web Developer, I built a POS app with CodeIgniter 4, integrating NiceAdmin for the admin interface and features like product management, transaction logging, and third-party libraries.",
    techStack:
      "CodeIgniter 4 (PHP 8.1+) || NiceAdmin Bootstrap || DomPDF || Guzzle || Composer || PHPUnit",
    imageUrl: "/assets/project-7.jpg",
  },
  {
    id: 6,
    title: "SUMMAREASE",
    description:
      "As a Developer, I created a desktop application using JavaFX to              summarize text with rule-based and API-based methods, offering              export options to .txt and .pdf formats. The app stores summary              history in memory and allows users to customize preferences like              default summary methods and export locations, all within a modern, interactive UI.",
    techStack: "Java 21 || Maven || JavaFX || Apache PDFBox || OkHttp || Gson",
    imageUrl: "/assets/project-6.jpg",
  },
  {
    id: 5,
    title: "DINACOM 2025",
    description:
      "As Project Manager and Frontend Web Developer, I led the              development of a competition registration website using React.js              and Tailwind CSS, ensuring on-time delivery. I optimized the              registration process for hundreds of participants with a          responsive design and reliable validation system.",
    techStack:
      "React.js || Tailwind CSS || Project Management || Inertia.js ||                Laravel || Scrum || Trello",
    imageUrl: "/assets/project-5.jpg",
  },
  {
    id: 4,
    title: "BTNG 2024",
    description:
      "As a UI/UX Researcher for the Registration Website, I design a              simple, user-friendly interface and ensure optimal accessibility across devices to enhance the registration experience.",
    techStack: "Figma",
    imageUrl: "/assets/project-4.jpg",
  },
  {
    id: 3,
    title: "Ice Movie App",
    description:
      "I have developed a website called Ice Movie App that offers various features to help users search for and discover information about the latest movies. The website includes several key features, such as Now Playing, Trending, Search Movie, Popular,             and Top Rated.",
    techStack: "HTML || CSS || JS-API TMDb",
    imageUrl: "/assets/project-3.png",
  },
  {
    id: 2,
    title: "Ice Residence",
    description:
      "I developed a residence service website that provides detailed              information about house types, contact details, and a blog with a search feature. This website aims to assist potential buyers or        renters in finding the information they need.",
    techStack: "HTML || CSS-Bootstrap || JS-AOS & GSAP || CDN",
    imageUrl: "/assets/project-2.png",
  },
  {
    id: 1,
    title: "My To Do List",
    description:
      "I developed a To Do List website that allows users to add, mark as              complete, delete, and save their tasks. This website was built using HTML, CSS, and JavaScript.",
    techStack: "HTML || CSS || JS",
    imageUrl: "/assets/project-1.png",
  },
];

const Website = () => {
  return (
    <div className="flex flex-wrap gap-6 w-full items-center">
      {projects.map((project) => (
        <div
          key={project.id}
          className="emeraldcard bg-base-100 w-[23%] shadow-sm rounded-lg"
        >
          <figure>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="rounded-t-lg"
            />
          </figure>
          <div className="emeraldcard-body p-4">
            <h2 className="emeraldcard-title font-bold text-lg">
              {project.title}
            </h2>
            <p className="pb-2 text-sm line-clamp-4 hover:line-clamp-none transition-transform duration-300 ease-in-out hover:transition-transform hover:ease-in-out hover:duration-300">
              {project.description}
            </p>
            <div className="emeraldcard-actions justify-end pt-2 border-t-2 border-base-300">
              <div className="emeraldbadge emeraldbadge-outline text-sm line-clamp-1 hover:line-clamp-none ">
                {project.techStack}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Website;
