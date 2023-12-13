import CardToday from "../components/CardToday";
import BackNavToday from "../components/BackNavToday";
import TextArea from "../components/TextArea";
import { useState, useContext, useEffect } from "react";
import { TodayContext } from "../context/today.context";
import { AuthContext } from "../context/auth.context";
import "./TodayPage.css";
import PageMainToday from "../components/PageMainToday";
import BlurColorHighlight from "../components/BlurColorHighlight";
import ButtonForm from "../components/ButtonForm";
import ButtonIconEdit from "../components/ButtonIconEdit";
import { Button } from "react-bootstrap";
import axios from "axios";

const zenApi = import.meta.env.VITE_ZEN_URL;

export default function TodayPage() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  const {
    diaryDataBase,
    setDiaryDataBase,
    handleGratitudeCreate,
    gratitudeDataBase,
    setGratitudeDataBase,
    handleDiaryCreate,
  } = useContext(TodayContext);
  //hooks
  const [showGratitude, setShowGratitude] = useState(false);
  const [showDiary, setShowDiary] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [avatar, setAvatar] = useState(true);
  const [navbar, setNavbar] = useState(true);
  const [quote, setQuote] = useState({});

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
  const formatDate = getCurrentDate();
  console.log(zenApi);
  useEffect(() => {
    const getQuote = async () => {
      try {
        const getData = await axios.get(zenApi);
        console.log(getData.response);
      } catch (err) {
        console.log(err);
      }
    };
    getQuote();
  }, []);

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

  return (
    <div className="todaypage">
      {/* {isLoggedIn && (
        <div>
          <Button onClick={logOutUser}>Logout</Button>
        </div>
      )} */}
      <PageMainToday avatar={avatar} navbar={navbar} />
      {/* <BlurColorHighlight
        position={{ top: "30%", right: "10%" }}
        size="300px"
        filter="blur(50px)"
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
          <div>
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
            <div style={{ left: "2rem" }}>
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
        )}
      {/* full widgets */}
      {gratitudeDataBase.gratitudeText &&
        diaryDataBase.diaryText &&
        showButtons && (
          <div>
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
              <ButtonIconEdit onClick={handleEditGratitude} />
            </CardToday>
            <hr />
            <CardToday label={"My moments"} todayData={diaryDataBase.diaryText}>
              <ButtonIconEdit onClick={handleEditDiary} />
            </CardToday>
          </div>
        )}
      {/* moment true gratitude false */}
      {!gratitudeDataBase.gratitudeText &&
        diaryDataBase.diaryText &&
        showButtons && (
          <div>
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
            <hr />
            <CardToday label={"My moments"} todayData={diaryDataBase.diaryText}>
              <ButtonIconEdit onClick={handleDiaryClick} />
            </CardToday>
          </div>
        )}

      {/* gratitude is there but no moments */}
      {gratitudeDataBase.gratitudeText &&
        !diaryDataBase.diaryText &&
        showButtons && (
          <div>
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
            <CardToday
              label={"My gratitude"}
              todayData={gratitudeDataBase.gratitudeText}
            >
              <ButtonIconEdit onClick={handleEditGratitude} />
            </CardToday>
            <hr />
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
