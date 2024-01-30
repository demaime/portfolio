import React, { useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

export default function Projects() {
  const projects = [
    {
      title: "Microimplant",
      description:
        "Sitio tipo catalogo desarrollado para empresa de implantes ortopédicos",
      mobile: "/assets/microimplant_mobile.png",
      desktop: "/assets/microimplant_desktop.png",
      techs: ["html", "tailwind", "javascript", "json"],
    },
    {
      title: "HeroApp",
      description: "Webapp basada en un challenge de Alkemy.org",
      mobile: "/assets/heroapp_mobile.png",
      desktop: "/assets/heroapp_desktop.png",
      techs: ["next", "tailwind", "typescript"],
    },
    {
      title: "BookShelf",
      description:
        "Aplicación web que permite a los usuarios ver los libros disponibles y crear una lista de lectura",
      mobile: "/assets/bookshelf_mobile.png",
      desktop: "/assets/bookshelf_desktop.png",
      techs: ["next", "tailwind", "typescript"],
    },
    {
      title: "Emoji Finder",
      description:
        "Aplicación simple para buscar emojis y copiarlos al clipboard",
      mobile: "/assets/emojifinder_mobile.png",
      desktop: "/assets/emojifinder_desktop.png",
      techs: ["react", "tailwind"],
    },
    {
      title: "Ahorcado",
      description:
        "Challenge para programa 'Oracle Next Education', basado en el clásico juego de adivinar palabras",
      mobile: "/assets/ahorcado_mobile.png",
      desktop: "/assets/ahorcado_desktop.png",
      techs: ["html", "css", "javascript"],
    },
    {
      title: "Encryptor",
      description:
        "Challenge para programa 'Oracle Next Education', encriptador de texto",
      mobile: "/assets/encryptor_mobile.png",
      desktop: "/assets/encryptor_desktop.png",
      techs: ["html", "css", "javascript"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="section bg-gradient-2 relative" id="projects">
      <SlArrowRight
        size={40}
        onClick={prevSlide}
        className="hidden lg:block absolute top-1/2 right-2 cursor-pointer text-gray-400 hover:text-gray-800"
      ></SlArrowRight>
      <SlArrowLeft
        size={40}
        onClick={nextSlide}
        className="hidden lg:block absolute top-1/2 left-2 cursor-pointer text-gray-400 hover:text-gray-800"
      ></SlArrowLeft>
      <div
        className="w-10/12 md:w-2/3 h-2/3 p2 bg-red-300 shadow-xl relative"
        style={{ borderRadius: "4.5vh" }}
      >
        <div className="lg:hidden hidden sm:flex flex-col items-center justify-evenly text-2xl h-full w-1/2 absolute right-4 text-center">
          <div className="text-3xl font-bold">
            {projects[currentIndex].title}
          </div>
          <p className="text-sm">{projects[currentIndex].description}</p>
          <div className="w-1/2 flex justify-evenly">
            <img className="w-12 h-12" src="/assets/github.png" alt="" />
            <img className="w-12 h-12" src="/assets/site.png" alt="" />
          </div>
        </div>
        <div className="hidden lg:flex bg-transparent h-48 w-[400px] absolute z-50 bottom-4 left-[38%] text-center flex-col items-center justify-around">
          <div className="text-5xl font-bold">
            {projects[currentIndex].title}
          </div>
          <p>{projects[currentIndex].description}</p>
          <div className="w-1/2 flex justify-evenly">
            <img className="w-12 h-12" src="/assets/github.png" alt="" />
            <img className="w-12 h-12" src="/assets/site.png" alt="" />
          </div>
        </div>
        <div className="phone-container">
          <div
            className="phone bg-center bg-cover duration-500"
            style={{
              backgroundImage: `url(${projects[currentIndex].mobile})`,
            }}
          >
            {/* <picture
              className="w-full h-full bg-center bg-cover duration-500"
              
            ></picture> */}
            {/* <img src={projects[currentIndex].mobile} alt="" /> */}
          </div>
        </div>
        <div className="absolute left-[38%] -bottom-2 h-full">
          <article className="hidden lg:block relative ">
            <div className="stand">
              <div
                className="monitor bg-center bg-cover duration-500"
                style={{
                  backgroundImage: `url(${projects[currentIndex].desktop})`,
                }}
              >
                {/* <img src={projects[currentIndex].desktop} /> */}
              </div>
            </div>
          </article>
        </div>

        <ul className="absolute h-full -right-6 top-0 w-12 bg-transparent flex flex-col justify-around items-center">
          <li key={currentIndex} className="transition-all hover:scale-125">
            <img src={`/assets/html.png`} alt="" />
          </li>
          <li key={currentIndex} className="transition-all hover:scale-125">
            <img src={`/assets/tailwind.png`} alt="" />
          </li>
          <li key={currentIndex} className="transition-all hover:scale-125">
            <img src={`/assets/javascript.png`} alt="" />
          </li>
          <li key={currentIndex} className="transition-all hover:scale-125">
            <img src={`/assets/json.png`} alt="" />
          </li>
          {/* {projects[currentIndex].techs.map((tech) => (
            <li key={currentIndex} className="transition-all hover:scale-125">
              <img src={`/assets/${tech}.png`} alt="" />
            </li>
          ))} */}
        </ul>
      </div>
      <footer className="w-full bg-transparent sm:hidden flex items-center absolute bottom-4 h-20 justify-evenly">
        <SlArrowLeft size={30} onClick={nextSlide}></SlArrowLeft>
        <img className="w-8 h-8" src="/assets/github.png" alt="" />
        <img className="w-8 h-8" src="/assets/site.png" alt="" />
        <SlArrowRight size={30} onClick={prevSlide}></SlArrowRight>
      </footer>
    </div>
  );
}
