import React from "react";

function Experiences() {
  return (
    <div className="px-20 py-10 bg-base-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-10 text-center">MY EXPERIENCES</h2>
      <div className="flex flex-wrap gap-6 w-full items-center justify-center">
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Xlarge Card</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Xlarge Card</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
