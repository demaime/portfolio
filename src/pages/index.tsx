import { useEffect, useRef } from "react";
import Link from "next/link";
import Me from "@/components/Me";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const main = mainRef.current;
      if (main) {
        const scrollY = main.scrollTop;

        if (scrollY < 703.2000122070312) {
          history.pushState(null, "", "/#me");
        } else if (
          scrollY >= 703.2000122070312 &&
          scrollY < 1406.4000244140625
        ) {
          history.pushState(null, "", "/#projects");
        } else {
          history.pushState(null, "", "/#about");
        }
      }
    };

    const main = mainRef.current;
    if (main) {
      main.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (main) {
        main.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <main className="full-container" ref={mainRef}>
      <ul className="fixed top-0 right-0 font-bolder w-1/2 flex justify-around z-50">
        <li>
          <Link className="text-shadow" href="#me">
            me
          </Link>
        </li>
        <li>
          <Link className="text-shadow" href="#projects">
            projects
          </Link>
        </li>
        <li>
          <Link className="text-shadow" href="#about">
            about
          </Link>
        </li>
      </ul>

      <Me />
      <Projects />
      <About />
    </main>
  );
}
