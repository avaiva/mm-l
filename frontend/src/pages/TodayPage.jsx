import PageMainToday from "../components/PageMainToday";
import CardToday from "../components/CardToday";
import BackNavToday from "../components/BackNavToday";
import TextArea from "../components/TextArea";
import { useState, useContext, useEffect } from "react";
import { TodayContext } from "../context/today.context";
import { AuthContext } from "../context/auth.context";

import PageSub from "../components/PageSub";
import "./TodayPage.css";
// const API_URL = import.meta.env.ZEN_URL;

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
  const handleGratitudeClick = () => {
    setShowGratitude(true);
    setShowDiary(false);
    setShowButtons(false);
  };

  const handleDiaryClick = () => {
    setShowDiary(true);
    setShowGratitude(false);
    setShowButtons(false);
  };

  const handleSaveGratitude = (e) => {
    handleGratitudeCreate(e);
    setShowDiary(false);
    setShowGratitude(false);
    setShowButtons(true);
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
      <PageMain />
      {/* Work with divs and position it absolutely on the page. 
    Make sure to use em to stay consistent over breakpoints. */}

      {!gratitudeDataBase.gratitudeText &&
        !diaryDataBase.diaryText &&
        showButtons && (
          <div>
            <h4 className="date h8">{formatDate}</h4>
            <h2>The more grateful I am the more beauty I see. </h2>
            <div style={{ margin: "1em" }}>
              <button onClick={handleGratitudeClick}>My gratitude</button>
            </div>
            <div style={{ margin: "1em" }}>
              <button onClick={handleDiaryClick}>My Diary</button>
            </div>
          </div>
        )}
      {gratitudeDataBase.gratitudeText &&
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

            <CardToday
              label={"My Gratitude"}
              todayData={gratitudeDataBase.gratitudeText}
            >
              <button onClick={handleEditGratitude}>Edit</button>
            </CardToday>

            <CardToday label={"My moments"} todayData={diaryDataBase.diaryText}>
              <button onClick={handleEditDiary}>Edit</button>
            </CardToday>
          </div>
        )}
      {diaryDataBase.diaryText &&
        !gratitudeDataBase.gratitudeText &&
        showButtons && (
          <div>
            <div>
              <h4 className="date h8">{formatDate}</h4>
              <button onClick={handleGratitudeClick}>My gratitude</button>
              <CardToday
                label={"My moments"}
                todayData={diaryDataBase.diaryText}
              >
                <button onClick={handleEditDiary}>Edit</button>
              </CardToday>
            </div>
            <div>
              <CardToday
                label={"My gratitude"}
                todayData={gratitudeDataBase.gratitudeText}
              >
                <button onClick={handleEditGratitude}>Edit</button>
              </CardToday>
            </div>
          </div>
        )}
      {diaryDataBase.diaryText &&
        !gratitudeDataBase.gratitudeText &&
        showButtons && (
          <div>
            <button onClick={handleGratitudeClick}>My gratitude</button>
            <CardToday label={"My moments"} todayData={diaryDataBase.diaryText}>
              <button onClick={handleEditDiary}>Edit</button>
            </CardToday>
          </div>
        )}
      {gratitudeDataBase.gratitudeText &&
        !diaryDataBase.diaryText &&
        showButtons && (
          <div>
            <h4 className="date h8">{formatDate}</h4>
            <CardToday
              label={"My gratitude"}
              todayData={gratitudeDataBase.gratitudeText}
            >
              <button onClick={handleEditGratitude}>Edit</button>
            </CardToday>
            <button onClick={handleDiaryClick}>My Diary</button>
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
            label={"My gratitude"}
            name={"My gratitude"}
            placeholder={
              "| This is your personal Gratitude. Take a few breaths and reflect on everything that happened today. Think of any moments or events that felt meaningful to you, no matter how big or small, and write them down. You can edit your moments at any time."
            }
            onChange={(e) => {
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
            label={"My Diary"}
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
