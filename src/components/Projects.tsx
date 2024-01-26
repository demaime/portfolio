import React from "react";

export default function Projects() {
  return (
    <div className="section bg-gradient-blue2" id="projects">
      <div
        className="w-8/12 md:w-2/3 h-2/3 p2 bg-red-300 shadow-xl relative"
        style={{ borderRadius: "4.5vh" }}
      >
        <div className="phone-container">
          <div className="phone">
            <img src="/assets/microimplant_mobile.png" alt="" />
          </div>
        </div>
        <ul className="absolute h-full -right-6 top-0 w-12 bg-transparent flex flex-col justify-around items-center">
          <li className="drop-shadow-xl">
            <img src="/assets/html.png" alt="" />
          </li>
          <li className="drop-shadow-xl">
            <img src="/assets/tailwind.png" alt="" />
          </li>
          <li className="drop-shadow-xl">
            <img src="/assets/js.png" alt="" />
          </li>
          <li className="drop-shadow-xl">
            <img src="/assets/json.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
