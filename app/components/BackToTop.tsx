"use client"; // This enables client-side interactivity for this component

import React, { useState, useEffect } from "react";

type BackToTopProps = {
  title?: string;
  btn?: () => JSX.Element;
};

const BackToTop: React.FC<BackToTopProps> = ({
  title = "Back to Top",
  btn,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleBackToTop = () => {
    // Corrected syntax for the condition
    if (window.scrollY > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleBackToTop);

    return () => window.removeEventListener("scroll", toggleBackToTop);
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && // Render button only if isVisible is true
        (btn ? (
          btn()
        ) : (
          <button
            onClick={handleScrollToTop}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {title}
          </button>
        ))}
    </div>
  );
};

export default BackToTop;
