import React from "react";
import LightRays from "./BgHero";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays -z-50"
        />
      </div>
      <div className="hero  min-h-screen px-20">
        <div className="hero-content flex-col lg:flex-row gap-25">
          <img
            src="/assets/profile.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-1">Welcome to</h1>
            <h1 className="text-5xl font-bold text-accent">Portfolio Aisya!</h1>
            <p className="py-6">
              Informatics Engineering Student | Web Developer | Passionate About
              Creating Innovative Tech Solutions | Actively Engaged in Project
            </p>
            <button className="btn btn-primary">Contact Me!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
