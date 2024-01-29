import React from "react";

export default function Projects() {
  return (
    <div className="section bg-gradient-2" id="projects">
      <div
        className="w-10/12 md:w-2/3 h-2/3 p2 bg-red-300 shadow-xl relative"
        style={{ borderRadius: "4.5vh" }}
      >
        <div className="hidden lg:flex bg-transparent h-48 w-[400px] absolute z-50 bottom-4 left-[38%] text-center flex-col items-center justify-around">
          <div className="text-5xl font-bold">MICROIMPLANT</div>
          <p>
            Sitio tipo catalogo desarrollado para empresa de implantes
            ortopédicos
          </p>
          <div className="w-1/2 flex justify-evenly">
            <img className="w-12 h-12" src="/assets/github.png" alt="" />
            <img className="w-12 h-12" src="/assets/site.png" alt="" />
          </div>
        </div>
        <div className="phone-container">
          <div className="phone">
            <img src="/assets/microimplant_mobile.png" alt="" />
          </div>
        </div>
        <div className="absolute left-[38%] -bottom-2 h-full">
          <article className="hidden lg:block relative ">
            <div className="stand">
              <div className="monitor">
                <img src="/assets/microimplant_desktop.png" />
              </div>
            </div>
          </article>
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
