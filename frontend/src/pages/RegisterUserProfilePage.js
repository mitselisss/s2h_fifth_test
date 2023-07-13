import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./RegisterUserProfilePage.css";
import jwt_decode from "jwt-decode";
import Footer from "../components/footer";
import image from "../images/graphics/STH - LOGO.png";
import backgroundImage from "../images/graphics/about.jpg";
import { useTranslation } from "react-i18next";
import LogoutAfterInactivity from "../components/logoutAfterInactivity";

function RegisterUserProfilePage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [PAL, setPAL] = useState("");
  const [halal, setHalal] = useState(false);
  const [diary, setDiary] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [fish, setFish] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [country, setCountry] = useState("");
  const location = useLocation();
  const [infoMessage, setInfoMessage] = useState("");

  const navigate = useNavigate();

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
  const { t } = useTranslation();

  useEffect(() => {
    if (user == null) {
      navigate("/");
    } else {
      if (location.state && location.state.infoMessage) {
        setInfoMessage(location.state.infoMessage);
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios
        .put("IdUserProfile/" + user.user_id + "/", {
          height: height,
          weight: weight,
          gender: gender,
          yob: yearOfBirth,
          pal: PAL,
          halal: halal,
          diary: diary,
          eggs: eggs,
          fish: fish,
          nuts: nuts,
          country: country,
        })
        .then((res) => {
          // console.log(res.data.success);
          // && res.data.success
          if (res.status === 200) {
            navigate("/home", {
              state: {
                successMessage: t("sign_up_message"),
              },
            });
          }
        });
    } catch (error) {
      console.error("Error saving username and password.", error);
    }
  };

  LogoutAfterInactivity();

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // This will resize the image to cover the entire element
          backgroundRepeat: "no-repeat", // This will prevent the image from repeating
          backgroundPosition: "center", // This will position the image at the center of the element
        }}
      >
        <div>
          <div className="page-container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {infoMessage && <Alert variant="warning">{infoMessage}</Alert>}
            </div>
            <div className="user-page">
              <img src={image} style={{ maxWidth: "100%", height: "auto" }} />
              <form onSubmit={handleSubmit}>
                <br></br>

                <div className="new-user-profile-grid">
                  <div>
                    <div className="ruser-profile-font">
                      {t("Physical_Characteristics")}{" "}
                    </div>
                    <br></br>
                    <div>
                      <label className="ruser-font">{t("Gender")}:</label>
                      <div>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={gender === "male"}
                          onChange={(event) => setGender(event.target.value)}
                          className="ruser-font"
                          required
                        />
                        {t("Male")}
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={gender === "female"}
                          onChange={(event) => setGender(event.target.value)}
                          className="ruser-font"
                          required
                        />
                        {t("Female")}
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <label className="ruser-font">{t("Year_of_Birth")}</label>
                      <input
                        type="number"
                        name="yearOfBirth"
                        value={yearOfBirth}
                        onChange={(event) => setYearOfBirth(event.target.value)}
                        className="upline-field"
                        min="1900"
                        max="2030"
                        required
                      />
                    </div>
                    <div>
                      <label className="ruser-font">{t("Height_(m)")}</label>
                      <input
                        type="number"
                        name="height"
                        value={height}
                        onChange={(event) => setHeight(event.target.value)}
                        className="upline-field"
                        min="0.00"
                        max="3.00"
                        step="0.01"
                        required
                      />
                    </div>
                    <div>
                      <label className="ruser-font">{t("Weight_(kg)")}</label>
                      <input
                        type="number"
                        name="weight"
                        value={weight}
                        onChange={(event) => setWeight(event.target.value)}
                        className="upline-field"
                        min="0"
                        max="999"
                        step="0.1"
                        required
                      />
                    </div>

                    <br></br>
                    <div>
                      <label className="ruser-profile-font">
                        {t("Physical_Activity_Level_(PAL)")}:
                      </label>
                      <div>
                        <input
                          type="radio"
                          name="PAL"
                          value="Sedentary"
                          checked={PAL === "Sedentary"}
                          onChange={(event) => setPAL(event.target.value)}
                          className="ruser-font"
                          required
                        />
                        {t("Sedentary")}
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="PAL"
                          value="Low active"
                          checked={PAL === "Low active"}
                          onChange={(event) => setPAL(event.target.value)}
                          className="ruser-font"
                          required
                        />
                        {t("Low_Active")}
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="PAL"
                          value="Active"
                          checked={PAL === "Active"}
                          onChange={(event) => setPAL(event.target.value)}
                          className="ruser-font"
                          required
                        />
                        {t("Active")}
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="PAL"
                          value="Very active"
                          checked={PAL === "Very active"}
                          onChange={(event) => setPAL(event.target.value)}
                          className="ruser-font"
                          required
                        />
                        {t("Very_Active_(Athlete)")}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <label className="ruser-profile-font">
                          {t("Allergies")}
                        </label>
                      </div>
                      <br></br>
                      <div className="allergies-section">
                        <div className="checkbox-options">
                          <div>
                            <label>
                              <input
                                type="checkbox"
                                checked={diary}
                                onChange={(event) => setDiary(!diary)}
                              />
                              {t("Diary")}
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="checkbox"
                                checked={eggs}
                                onChange={(event) => setEggs(!eggs)}
                              />
                              {t("Eggs")}
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="checkbox"
                                checked={fish}
                                onChange={(event) => setFish(!fish)}
                              />
                              {t("Fish/Seafood")}
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="checkbox"
                                checked={nuts}
                                onChange={(event) => setFish(!nuts)}
                              />
                              {t("Nuts")}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <label className="ruser-profile-font">
                        {t("Dietary_Choices")}
                      </label>
                    </div>
                    <br></br>
                    <div className="allergies-section">
                      <div className="checkbox-options">
                        <label>
                          <input
                            type="checkbox"
                            checked={halal}
                            onChange={(event) => setHalal(!halal)}
                          />
                          {t("Halal")}
                        </label>
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <label className="user-profile-font">
                        {t("Choose_national_cuisine")}:
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="country"
                        value="Spain"
                        checked={country === "Spain"}
                        onChange={(event) => setCountry(event.target.value)}
                        className="user-font"
                        required
                      />
                      {t("Spain")}
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="country"
                        value="Turkey"
                        checked={country === "Turkey"}
                        onChange={(event) => setCountry(event.target.value)}
                        className="user-font"
                        required
                      />
                      {t("Turkey")}
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="country"
                        value="Morocco"
                        checked={country === "Morocco"}
                        onChange={(event) => setCountry(event.target.value)}
                        className="user-font"
                        required
                      />
                      {t("Morocco")}
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div>
                  <input
                    type="submit"
                    value={t("Register")}
                    className="button"
                    style={{ float: "right" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterUserProfilePage;
