import React from "react";

export default function Projects() {
  return (
    <div className="section bg-gradient-2" id="projects">
      <div
        className="w-10/12 md:w-2/3 h-2/3 p2 bg-red-300 shadow-xl relative"
        style={{ borderRadius: "4.5vh" }}
      >
        <div className="phone-container">
          <div className="phone">
            <img src="/assets/microimplant_mobile.png" alt="" />
          </div>
        </div>
        <ul className="absolute h-full -right-6 top-0 w-12 bg-transparent flex flex-col justify-around items-center">
          <li className="transition-all hover:scale-125">
            <img src="/assets/html.png" alt="" />
          </li>
          <li className="transition-all hover:scale-125">
            <img src="/assets/tailwind.png" alt="" />
          </li>
          <li className="transition-all hover:scale-125">
            <img src="/assets/js.png" alt="" />
          </li>
          <li className="transition-all hover:scale-125">
            <img src="/assets/json.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
