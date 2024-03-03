import { useEffect } from "react";

// useScrollToTop.js
const useScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  };
  
  export default useScrollToTop;
  