import CardToday from "../components/CardToday";
import BackNavToday from "../components/BackNavToday";
import TextArea from "../components/TextArea";
import { useState, useContext, useEffect } from "react";
import { TodayContext } from "../context/today.context";
import { AuthContext } from "../context/auth.context";
import "./TodayPage.css";
import PageMainToday from "../components/PageMainToday";
import "./TodayPage.css";
import BlurColorHighlight from "../components/BlurColorHighlight";
import ButtonForm from "../components/ButtonForm";
import { Button } from "react-bootstrap";
import ButtonToday from "../components/ButtonToday";
import ButtonIcon from "../components/ButtonIcon";
import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_URL;
export default function TodayPage() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  const token = localStorage.getItem("token");

  const [gratitudeDataBase, setGratitudeDataBase] = useState({});
  const [diaryDataBase, setDiaryDataBase] = useState({});

  console.log(gratitudeDataBase.gratitudeText, gratitudeDataBase, "gratidude");
  console.log(diaryDataBase.diaryText, diaryDataBase, "diary");

  //hooks
  const [showGratitude, setShowGratitude] = useState(false);
  const [showDiary, setShowDiary] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [avatar, setAvatar] = useState(true);
  const [navbar, setNavbar] = useState(true);

  //ContextAPI

  //format the current date
  function getCurrentDate() {
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;

    return formattedDate;
  }
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  const formatDate = getCurrentDate();
  const handleGratitudeClick = () => {
    setShowGratitude(true);
    setShowDiary(false);
    setShowButtons(false);
    setAvatar(false);
    setNavbar(false);
  };

  const handleDiaryClick = () => {
    setShowDiary(true);
    setShowGratitude(false);
    setShowButtons(false);
    setAvatar(false);
    setNavbar(false);
  };

  const handleSaveGratitude = (e) => {
    handleGratitudeCreate(e);
    setShowDiary(false);
    setShowGratitude(false);
    setShowButtons(true);
    setNavbar(true);
    setAvatar(true);
  };
  const handleSaveDiary = (e) => {
    handleDiaryCreate(e);
    setShowDiary(false);
    setShowGratitude(false);
    setShowButtons(true);
    setNavbar(true);
    setAvatar(true);
  };
  const handleGoBack = () => {
    setShowDiary(false);
    setShowGratitude(false);
    setShowButtons(true);
    setNavbar(true);
    setAvatar(true);
  };
  const handleEditGratitude = () => {
    setShowDiary(false);
    setShowGratitude(true);
    setShowButtons(false);
    setAvatar(false);
    setNavbar(false);
  };

  const handleEditDiary = () => {
    setShowDiary(true);
    setShowGratitude(false);
    setShowButtons(false);
    setAvatar(false);
    setNavbar(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          `${API_URL}/api/gratitude/entries/date/${formattedDate}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setGratitudeDataBase((prevState) => {
          return response.data;
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          return;
        }
      }
    };
    fetchData();
  }, [token, formattedDate]);

  const handleGratitudeCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (token) {
      try {
        if (gratitudeDataBase._id) {
          const updateGratitude = await axios.patch(
            `${API_URL}/api/gratitude/entries/${gratitudeDataBase._id}`,
            { gratitudeText: gratitudeDataBase.gratitudeText },
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setGratitudeDataBase(updateGratitude.data);
        } else {
          const createGratitude = await axios.post(
            `${API_URL}/api/gratitude/entries/`,
            {
              gratitudeText: gratitudeDataBase.gratitudeText,
            },
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setGratitudeDataBase(createGratitude.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `${API_URL}/api/diary/entries/date/${formattedDate}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setDiaryDataBase((prevState) => {
          return response.data;
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response);

          return;
        }
      }
    };
    fetchData();
  }, [token, formattedDate]);

  const handleDiaryCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (token) {
      try {
        if (diaryDataBase._id) {
          const updateDiary = await axios.patch(
            `${API_URL}/api/diary/entries/${diaryDataBase._id}`,
            { diaryText: diaryDataBase.diaryText },
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setDiaryDataBase(updateDiary.data);
        } else {
          const createDiary = await axios.post(
            `${API_URL}/api/diary/entries/`,
            {
              diaryText: diaryDataBase.diaryText,
            },
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setDiaryDataBase(createDiary.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="todaypage">
      {/* {isLoggedIn && (
        <div>
          <Button onClick={logOutUser}>Logout</Button>
        </div>
      )} */}
      <PageMainToday avatar={avatar} navbar={navbar} />
      <div>
        <BlurColorHighlight
          position={{ top: "2%", left: "1%" }}
          size="200px"
          filter="blur(50px)"
          zIndex="-1"
        />
      </div>
      <div>
        <BlurColorHighlight
          position={{ bottom: "8%", right: "1%" }}
          size="150px"
          filter="blur(100px)"
          zIndex="-1"
        />
      </div>
      {/* <BlurColorHighlight
        position={{ top: "30%", right: "10%" }}
        size="300px"
        filter="blur(50px)"
        zIndex="-1"
      /> */}
      {/* <BlurColorHighlight
        position={{ top: "0%", right: "10%" }}
        size="100px"
        filter="blur(50px)"
      /> */}
      {/* Work with divs and position it absolutely on the page. 
    Make sure to use em to stay consistent over breakpoints. */}
      {/* fulll buttons */}
      {!gratitudeDataBase.gratitudeText &&
        !diaryDataBase.diaryText &&
        showButtons && (
          <div style={{ marginTop: "5rem" }}>
            <div
              style={{
                position: "fixed",
                top: "6em",
                left: "3.5em",
                // transform: "translate(-50%,-50%)",
              }}
            >
              <h4 className="date h8">{formatDate}</h4>
            </div>
            <div
              style={{
                width: "13rem",
                textAlign: "left",
                height: "120px",
                position: "fixed",
                top: "119px",
                left: "3.5em",
                marginTop: "2em",
              }}
            >
              <h2>The more grateful I am the more beauty I see. </h2>
            </div>
            <div
              style={{
                position: "fixed",
                right: "3rem",
                top: "22rem",
              }}
            >
              <ButtonToday
                size="lg"
                onClick={handleGratitudeClick}
                label="My gratitude "
                id="gratitude-sun"
                imgSrc="../../public/sun-gratitude.svg"
              />
            </div>
            <div
              style={{ position: "fixed", right: "3rem", marginTop: "2rem" }}
            >
              <ButtonToday
                size="lg"
                onClick={handleDiaryClick}
                label="My moments "
                id="moments-star"
                imgSrc="../../public/star-moments.svg"
              />
            </div>
          </div>
        )}
      {/* full widgets */}
      {gratitudeDataBase.gratitudeText &&
        diaryDataBase.diaryText &&
        showButtons && (
          <div style={{ minHeight: "70vh" }}>
            <div
              style={{
                position: "fixed",
                top: "6em",
                left: "2.2em",
                // transform: "translate(-50%,-50%)",
              }}
            >
              <h4 className="date h8">{formatDate}</h4>
            </div>

            <CardToday
              label={"My gratitude"}
              todayData={gratitudeDataBase.gratitudeText}
            >
              <ButtonIcon
                onClick={handleEditGratitude}
                imgSrc="../../public/edit.svg"
              />
            </CardToday>
            <hr />
            <div style={{ marginTop: "2em" }}>
              {" "}
              <CardToday
                label={"My moments"}
                todayData={diaryDataBase.diaryText}
              >
                <ButtonIcon
                  onClick={handleEditDiary}
                  imgSrc="../../public/edit.svg"
                />
              </CardToday>
            </div>
          </div>
        )}
      {/* moment true gratitude false */}
      {!gratitudeDataBase.gratitudeText &&
        diaryDataBase.diaryText &&
        showButtons && (
          <div style={{ minHeight: "65vh" }}>
            <div
              style={{
                position: "fixed",
                top: "6em",
                left: "3.5em",
                // transform: "translate(-50%,-50%)",
              }}
            >
              <h4 className="date h8">{formatDate}</h4>
            </div>
            <div style={{ minHeight: "30vh" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30vh",
                }}
              >
                <img
                  style={{
                    height: "7rem",
                    width: "5rem",
                    position: "fixed",
                    left: "2.25rem",
                  }}
                  src="../../public/star.svg"
                ></img>
                <ButtonForm
                  size="lg"
                  onClick={handleGratitudeClick}
                  label="My gratitude"
                />
              </div>
            </div>

            <div>
              <hr />
            </div>
            <div style={{ marginTop: "2rem" }}>
              <CardToday
                label={"My moments"}
                todayData={diaryDataBase.diaryText}
              >
                <ButtonIcon
                  onClick={handleDiaryClick}
                  imgSrc="../../public/edit.svg"
                />
              </CardToday>
            </div>
          </div>
        )}

      {/* gratitude is there but no moments */}
      {gratitudeDataBase.gratitudeText &&
        !diaryDataBase.diaryText &&
        showButtons && (
          <div style={{ minHeight: "65vh" }}>
            <div
              style={{
                position: "fixed",
                top: "6em",
                left: "2em",
                // transform: "translate(-50%,-50%)",
              }}
            >
              <h4 className="date h8">{formatDate}</h4>
            </div>
            <div
            // className="deneme"
            // style={{
            //   position: "relative",
            //   // top: "20px",
            //   width: "100%",
            //   // marginTop: "0",
            // }}
            >
              <CardToday
                label={"My gratitude"}
                todayData={gratitudeDataBase.gratitudeText}
              >
                <ButtonIcon
                  onClick={handleEditGratitude}
                  imgSrc="../../public/edit.svg"
                />
              </CardToday>
            </div>
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "35vh",
              }}
            >
              <div>
                <img
                  style={{
                    height: "7rem",
                    width: "5rem",
                    position: "fixed",
                    left: "2.25rem",
                  }}
                  src="../../public/realstar.svg"
                ></img>
                <ButtonForm
                  size="lg"
                  onClick={handleDiaryClick}
                  label="My moments"
                />
              </div>
            </div>
          </div>
        )}
      {showGratitude && (
        <div>
          <div
            className="BackNav-wrapper"
            style={{
              position: "fixed",
              top: "2.5em",
              left: "2.5em",
              minWidth: "90px",
            }}
          >
            <BackNavToday onClick={handleGoBack} />
          </div>
          <TextArea
            date={formatDate}
            label={"I feel lucky, loved or joyful because..."}
            name={"My gratitude"}
            placeholder={
              "| This is your personal Gratitude. Take a few breaths and reflect on everything that happened today. Think of any moments or events that felt meaningful to you, no matter how big or small, and write them down. You can edit your moments at any time."
            }
            onChange={(e) => {
              console.log(e.target.value);
              return setGratitudeDataBase((prev) => ({
                ...prev,
                gratitudeText: e.target.value,
              }));
            }}
            onSubmit={handleSaveGratitude}
            defaultValue={gratitudeDataBase.gratitudeText}
          />
        </div>
      )}
      {showDiary && (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              className="BackNav-wrapper"
              style={{
                position: "fixed",
                top: "2.5em",
                left: "2.5em",
                minWidth: "90px",
              }}
            >
              <BackNavToday onClick={handleGoBack} />
            </div>
          </div>
          <TextArea
            name={"My Diary"}
            label={"My moments"}
            date={formatDate}
            defaultValue={diaryDataBase.diaryText}
            placeholder={
              "| This is your personal diary. Take a few breaths and reflect on everything that happened today. Think of any moments or events that felt meaningful to you, no matter how big or small, and write them down. You can edit your moments at any time."
            }
            onSubmit={handleSaveDiary}
            onChange={(e) => {
              console.log(e.target.value);
              return setDiaryDataBase((prev) => ({
                ...prev,
                diaryText: e.target.value,
              }));
            }}
          />
        </div>
      )}
    </div>
  );
}
