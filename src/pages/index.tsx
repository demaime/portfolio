import { Inter } from "next/font/google";
import Link from "next/link";
import Me from "@/components/Me";
import Projects from "@/components/Projects";
import About from "@/components/About";
import DotsNavigation from "@/components/DotsNavigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="full-container">
      <ul className="fixed top-0 right-0 text-white font-bolder w-1/2 flex justify-around">
        <li>
          <Link href={"#me"}>me</Link>
        </li>
        <li>
          <Link href={"#projects"}>projects</Link>
        </li>
        <li>
          <Link href={"#about"}>about</Link>
        </li>
      </ul>
      <DotsNavigation />

      <Me />
      <Projects />
      <About />
    </main>
  );
}
