import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Me from "@/components/Me";
import Projects from "@/components/Projects";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container">
      <ul className="fixed top-0 right-0 text-white font-bolder w-1/2 flex justify-around">
        <li>
          <Link href={"#huevo1"}> Huevo1</Link>
        </li>
        <li>
          <Link href={"#huevo2"}> Huevo2</Link>
        </li>
        <li>
          <Link href={"#huevo3"}> Huevo3</Link>
        </li>
      </ul>

      <Me></Me>
      <Projects></Projects>
      <About></About>
    </main>
  );
}
