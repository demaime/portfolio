import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function DotsNavigation() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Extraer el fragmento de la URL para determinar la sección activa
    const currentSection = router.asPath.split("#")[1] || "";

    setActiveSection(currentSection);
  }, [router]);

  const getCircleClassName = (section: string) => {
    return `rounded-full transition-all bg-white ${
      activeSection === section ? "h-4 w-4" : "h-2 w-2"
    }`;
  };

  return (
    <ul className="fixed right-4 top-1/2 w-2 h-16 flex flex-col justify-around items-center">
      <li className={getCircleClassName("me")}>
        <a className="flex w-full h-full" href="#me"></a>
      </li>
      <li className={getCircleClassName("projects")}>
        <a className="flex w-full h-full" href="#projects"></a>
      </li>
      <li className={getCircleClassName("about")}>
        <a className="flex w-full h-full" href="#about"></a>
      </li>
    </ul>
  );
}
