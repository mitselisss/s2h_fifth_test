import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo/logowhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faBars } from "@fortawesome/free-solid-svg-icons";
import jwt_decode from "jwt-decode";
import "./sideBar.css";
import { useTranslation } from "react-i18next";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

function SideBar() {
  const { t } = useTranslation();

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  const Logout = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="page-container">
      <div className="main-content">
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="logo-container">
            <Link to="/home">
              <img src={logo} style={{ maxWidth: "100%", height: "auto" }} />
            </Link>
          </div>
          <div className="menu-options-container">
            <hr></hr>
            <Link to="/home" className="menu-option">
              <label className="custom-font3">{t("Home")}</label>
            </Link>
            <hr></hr>
            <Link to="/userProfile" className="menu-option">
              <label className="custom-font3">{t("User_Profile")}</label>
            </Link>
            <hr></hr>
            {/* <div>
                  <button onClick={toggleVisibility}>User Profile</button>
                </div> */}
            <Link to="/stats" className="menu-option">
              <label className="custom-font3">{t("Charts")}</label>
            </Link>
            <hr></hr>
            <Link to="/about" className="menu-option">
              <label className="custom-font3">{t("About")}</label>
            </Link>
            <hr></hr>
            {/* <Link to="/" className="menu-option">
                  <label className="custom-font3">Other</label>
                </Link>
                <hr></hr> */}
            <Link to="/" className="menu-option">
              <div className="sign-out-button">
                <FontAwesomeIcon
                  icon={faDoorOpen}
                  size="2x"
                  onClick={Logout}
                  // onClick={() => alert("Signing out...")}
                />
              </div>
            </Link>

            <hr></hr>
          </div>
          <div className="social-icons">
            <p className="custom-font">
              <a
                href="https://twitter.com/SWITCHtoHEALTH1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#1DA1F2" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/switch-to-healthy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#0077B5" }}
                />
              </a>
              <a
                href="https://www.tiktok.com/@switchtohealthy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="tiktok-icon"
                  style={{ color: "#28ffff" }}
                />
              </a>
            </p>
          </div>
        </div>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
      </div>
    </div>
  );
}
export default SideBar;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../images/logo/logowhite.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDoorOpen, faBars } from "@fortawesome/free-solid-svg-icons";
// import jwt_decode from "jwt-decode";
// import "./sideBar.css";

// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faTiktok } from "@fortawesome/free-brands-svg-icons";

// function SideBar() {
//   const [authTokens, setAuthTokens] = useState(() =>
//     localStorage.getItem("authTokens")
//       ? JSON.parse(localStorage.getItem("authTokens"))
//       : null
//   );
//   const [user, setUser] = useState(() =>
//     localStorage.getItem("authTokens")
//       ? jwt_decode(localStorage.getItem("authTokens"))
//       : null
//   );

//   const Logout = () => {
//     setAuthTokens(null);
//     setUser(null);
//     localStorage.removeItem("authTokens");
//   };

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsSidebarOpen(true);
//       } else {
//         setIsSidebarOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="page-container">
//       <div className="main-content">
//         <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//           <div className="logo-container">
//             <Link to="/home">
//               <img src={logo} style={{ maxWidth: "100%", height: "auto" }} />
//             </Link>
//           </div>
//           <div className="menu-options-container">
//             <hr></hr>
//             <Link to="/home" className="menu-option">
//               <label className="custom-font3">Home</label>
//             </Link>
//             <hr></hr>
//             <Link to="/userProfile" className="menu-option">
//               <label className="custom-font3">User Profile</label>
//             </Link>
//             <hr></hr>
//             {/* <div>
//                   <button onClick={toggleVisibility}>User Profile</button>
//                 </div> */}
//             <Link to="/stats" className="menu-option">
//               <label className="custom-font3">Charts</label>
//             </Link>
//             <hr></hr>
//             <Link to="/about" className="menu-option">
//               <label className="custom-font3">About</label>
//             </Link>
//             <hr></hr>
//             {/* <Link to="/" className="menu-option">
//                   <label className="custom-font3">Other</label>
//                 </Link>
//                 <hr></hr> */}
//             <Link to="/" className="menu-option">
//               <div className="sign-out-button">
//                 <FontAwesomeIcon
//                   icon={faDoorOpen}
//                   size="2x"
//                   onClick={Logout}
//                   // onClick={() => alert("Signing out...")}
//                 />
//               </div>
//             </Link>

//             <hr></hr>
//           </div>
//           <div className="social-icons">
//             <p className="custom-font">
//               <a
//                 href="https://twitter.com/SWITCHtoHEALTH1"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon
//                   icon={faTwitter}
//                   style={{ color: "#1DA1F2" }}
//                 />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/switch-to-healthy/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon
//                   icon={faLinkedin}
//                   style={{ color: "#0077B5" }}
//                 />
//               </a>
//               <a
//                 href="https://www.tiktok.com/@switchtohealthy"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon
//                   icon={faTiktok}
//                   className="tiktok-icon"
//                   style={{ color: "#28ffff" }}
//                 />
//               </a>
//             </p>
//           </div>
//         </div>
//         <div className="sidebar-toggle" onClick={toggleSidebar}>
//           <FontAwesomeIcon icon={faBars} size="2x" />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default SideBar;