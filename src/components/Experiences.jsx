import React from "react";
import { ShieldCheck, Handshake } from "lucide-react";

function Experiences() {
  return (
    <div className="px-20 py-10 bg-base-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-10 text-center">MY EXPERIENCES</h2>
      <div className="flex flex-wrap gap-6 w-full items-center justify-center">
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
          <div className="card-body">
            <h2 className="card-title pb-2 border-b-2 border-base-300">
              <ShieldCheck />
              Achievements
            </h2>

            <div className="flex flex-wrap justify-between gap-4">
              <div className="text-sm">3rd Place at HITECH 2025</div>
              <div className="text-sm badge badge-accent ">May 2025</div>
              <div className="text-sm">Top 10 Hackvidia Arkavidia ITB</div>
              <div className="text-sm badge badge-accent">May 2025</div>
              <div className="text-sm">Top 10 Hackathon Find-IT UGM</div>
              <div className="text-sm badge badge-accent">May 2025</div>
            </div>
            <div className="justify-end card-actions mt-3">
              <button className="btn btn-primary">Show Details </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
          <div className="card-body">
            <h2 className="card-title pb-2 border-b-2 border-base-300">
              <Handshake />
              Organizations
            </h2>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="text-sm">Vice of President DNCC</div>
              <div className="text-sm badge badge-accent ">August 2025</div>
              <div className="text-sm">Head of Web Division DNCC</div>
              <div className="text-sm badge badge-accent">August 2024</div>
              <div className="text-sm">Secretary 1 DNCC</div>
              <div className="text-sm badge badge-accent">August 2024</div>
            </div>
            <div className="justify-end card-actions mt-3">
              <button className="btn btn-primary">Show Details </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
