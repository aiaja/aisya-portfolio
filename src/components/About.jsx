import React from "react";
import ProfileCard from "./ProfileCard";

function About() {
  return (
    <div className="">
      <div className="hero bg-base-200 min-h-screen px-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-25">
          <ProfileCard
            name="Aisya N.S."
            title="Informatics Engineering Student"
            handle="aisya"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/profilecard.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
          {/* <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="/assets/tentang-1.jpg"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-sm btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-sm btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="/assets/tentang-2.jpg"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-sm btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-sm btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="/assets/tentang-3.jpg"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-sm btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-sm btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="/assets/tentang-4.jpg"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-sm btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-sm btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div> */}
          <div>
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">
              I am a 3rd year student at Informatics Engineering Study Program,
              Dian Nuswantoro University, I have a great interest in web
              development. I have actively participated in various
              organizations, taking an important role in the management of
              several event projects. I am known as a proactive individual, able
              to communicate effectively, and have good problem-solving skills.
            </p>
            <button className="btn btn-sm btn-primary">Check my CV!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
