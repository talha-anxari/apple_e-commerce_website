// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollTop = () => {
//     const { pathname } = useLocation();

//     useEffect(() => {
//         setTimeout(() => {
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//             window.screenTop(0, 0)
//         }, 0)
//     }, [pathname]);
//     return null;
// }

// export default ScrollTop

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollTop;
