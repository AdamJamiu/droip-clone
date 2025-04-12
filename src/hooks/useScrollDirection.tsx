"use client";

import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollingToTop, setScrollingToTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setScrollingToTop(true); // scrolling up
      } else if (currentScrollY > lastScrollY) {
        setScrollingToTop(false); // scrolling down
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return scrollingToTop;
};

export default useScrollDirection;
