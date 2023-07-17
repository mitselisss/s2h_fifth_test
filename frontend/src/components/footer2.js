import React from "react";
import "./footer2.css";
import eu from "../images/footer/europe.png";
import { useTranslation } from "react-i18next";

const Footer2 = () => {
  const { t } = useTranslation();
  return (
    <div className="footer2">
      <div className="images-container2">
        <img src={eu} className="Footer-eu" alt="foot" />
        <div className="text-container2">
          {t("Co-funded_by_the_European_Union")}
        </div>
      </div>
    </div>
  );
};

export default Footer2;
