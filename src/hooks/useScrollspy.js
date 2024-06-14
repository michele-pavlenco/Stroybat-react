import { useState, useEffect } from "react";

const useScrollspy = (ids, offset = 0) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentId = "";
      for (let i = ids.length - 1; i >= 0; i--) {
        const element = document.getElementById(ids[i]);
        if (element && window.scrollY >= element.offsetTop - offset) {
          currentId = ids[i];
          break;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set activeId based on current scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids, offset]);

  return activeId;
};

export default useScrollspy;
