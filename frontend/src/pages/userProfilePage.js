import "./userProfilePage.css";
import SideBar from "../components/sideBar.js";
import Footer from "../components/footer.js";
import image from "../images/graphics/STH - LOGO.png";
import backgroundImage from "../images/graphics/about.jpg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LogoutAfterInactivity from "../components/logoutAfterInactivity";

function UserProfilePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [BMI, setBMI] = useState("");
  const [BMR, setBMR] = useState("");
  const [PAL, setPAL] = useState("");
  const [energyintake, setEnergyintake] = useState("");
  const [halal, setHalal] = useState(false);
  const [diary, setDiary] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [fish, setFish] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState();
  const { t } = useTranslation();

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

  const today = new Date();
  const currentDayOfWeek = today.getDay(); // Get the current day of the week (0-6, where 0 is Sunday)

  // Calculate the date of the Monday and Sunday
  const monday = new Date(today);
  const sunday = new Date(today);
  const nextMonday = new Date(today);
  monday.setDate(today.getDate() - currentDayOfWeek + 1);
  sunday.setDate(today.getDate() - currentDayOfWeek + 7);
  nextMonday.setDate(today.getDate() - currentDayOfWeek + 8);

  // Format the Monday and Sunday date
  const m_year = monday.getFullYear();
  const m_month = String(monday.getMonth() + 1).padStart(2, "0");
  const m_day = String(monday.getDate()).padStart(2, "0");

  const s_year = monday.getFullYear();
  const s_month = String(sunday.getMonth() + 1).padStart(2, "0");
  const s_day = String(sunday.getDate()).padStart(2, "0");

  const nm_year = nextMonday.getFullYear();
  const nm_month = String(nextMonday.getMonth() + 1).padStart(2, "0");
  const nm_day = String(nextMonday.getDate()).padStart(2, "0");

  const formattedMonday = `${m_year}-${m_month}-${m_day}`;
  const formattedSunday = `${s_year}-${s_month}-${s_day}`;
  const formattedNextMonday = `${nm_year}-${nm_month}-${nm_day}`;

  useEffect(() => {
    if (user == null) {
      navigate("/");
    } else {
      (async () => {
        setLoading(true);
        const response = await axios.get("IdUserProfile/" + user.user_id + "/");
        //setUser(response.data.user);
        setUsername(response.data.user.username);
        setEmail(response.data.user.email);
        setHeight(response.data.height);
        setWeight(response.data.weight);
        setGender(response.data.gender);
        setYearOfBirth(response.data.yob);
        setBMI(response.data.bmi);
        setBMR(response.data.bmr);
        setPAL(response.data.pal);
        setEnergyintake(response.data.energy_intake);
        setHalal(response.data.halal);
        setDiary(response.data.diary);
        setEggs(response.data.eggs);
        setFish(response.data.fish);
        setNuts(response.data.nuts);
        setCountry(response.data.country);
        setLoading(false);
      })();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (window.confirm(t("profile_update_message"))) {
      try {
        setLoading(true);
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Use "smooth" for smooth scrolling behavior
        });
        const response1 = await axios.put(
          "IdUserProfile/" + user.user_id + "/",
          {
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
          }
        );

        const response2 = await axios.put(
          `${user.user_id}/${formattedMonday}/updateCurrentWeekNPs`
        );

        const response3 = await axios.put(
          `${user.user_id}/${formattedNextMonday}/updateCurrentWeekNPs`
        );

        setLoading(false);
        navigate("/home");
      } catch (error) {
        console.error("Error saving username and password.", error);
      }
    } else {
      // Handle if the user cancels the update
    }
  };

  LogoutAfterInactivity();

  return (
    <div className="rightpart" style={{ height: "150%" }}>
      {loading && (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">{t("Loading")}...</span>
          </div>
        </div>
      )}
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
            <SideBar />
            <div className="user-page">
              <img src={image} style={{ maxWidth: "100%", height: "auto" }} />
              <form onSubmit={handleSubmit}>
                <br></br>
                <br></br>
                <div className="user-profile-grid1">
                  <div>
                    <div className="user-profile-font">
                      {t("Personal_Info")}
                    </div>
                    <br></br>
                    <div className="user-font">
                      <u>{t("Username")}:</u>
                      <p>{username}</p>
                    </div>
                    <br></br>
                    <div className="user-font">
                      <u>{t("Email")}:</u>
                      <p>{email}</p>
                    </div>
                  </div>
                  <div>
                    <div className="user-profile-font">
                      {t("Physical_Characteristics")}
                    </div>
                    <br></br>
                    <div>
                      <label className="user-font">{t("Gender")}:</label>
                      <div>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={gender === "male"}
                          onChange={(event) => setGender(event.target.value)}
                          className="user-font"
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
                          className="user-font"
                          required
                        />
                        {t("Female")}
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <label className="user-font">{t("Year of Birth")}</label>
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
                      <label className="user-font">{t("Height_(m)")}</label>
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
                      <label className="user-font">{t("Weight_(kg)")}</label>
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
                      <div className="user-font">
                        <p>
                          BMI: {BMI} <i>kg/m2</i>
                        </p>
                        <p>
                          BMR: {BMR} <i>kcal</i>
                        </p>
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <label className="user-profile-font">
                        {t("Physical_Activity_Level_(PAL)")}:
                      </label>
                      <div>
                        <input
                          type="radio"
                          name="PAL"
                          value="Sedentary"
                          checked={PAL === "Sedentary"}
                          onChange={(event) => setPAL(event.target.value)}
                          className="user-font"
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
                          className="user-font"
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
                          className="user-font"
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
                          className="user-font"
                          required
                        />
                        {t("Very_Active_(Athlete)")}
                      </div>
                    </div>
                    <br></br>
                    <div className="user-font">
                      <p>
                        {t("Daily_Energy_Recuirements")}: {energyintake}{" "}
                        <i>{t("kcal")}</i>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <label className="user-profile-font">
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
                                onChange={(event) => setNuts(!nuts)}
                              />
                              {t("Nuts")}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <label className="user-profile-font">
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
                      />
                      {t("Morocco")}
                    </div>
                    <br></br>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div>
                  <Link
                    to="/home"
                    value="Cancel"
                    className="button"
                    style={{ float: "left" }}
                  >
                    {t("Cancel")}
                  </Link>
                  <input
                    type="submit"
                    value={t("Update")}
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

export default UserProfilePage;
