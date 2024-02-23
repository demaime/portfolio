import { useEffect, useState } from "react";

const Presentation = () => {
  const [displayText, setDisplayText] = useState(" another");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText(" a better");
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="transition-opacity duration-500 group-hover:opacity-100 bg-red-600 rounded-xl p-4">
        Hi! Im Demian,
        <span
          className={`${
            displayText !== " another" ? "text-white font-bold" : ""
          } transition-opacity`}
        >
          {displayText}
        </span>{" "}
        <br /> web developer
      </h1>
    </div>
  );
};

export default Presentation;
