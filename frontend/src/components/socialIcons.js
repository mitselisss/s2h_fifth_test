import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import "../components/socialIcons.css";
import { useTranslation } from "react-i18next";

const SocialIcons = () => {
  const { t } = useTranslation();
  return (
    <div className="social-icons">
      <p className="custom-font">
        {t("Find_us_on")}: {""}
        <a
          href="https://twitter.com/SWITCHtoHEALTH1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2" }} />
        </a>
        <a
          href="https://www.linkedin.com/company/switch-to-healthy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5" }} />
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
        {/* <a href="https://switchtohealthy.eu/index.html">
              <img src={logo} className="s2h-logo" alt="logo" />
            </a> */}
      </p>
    </div>
  );
};

export default SocialIcons;
