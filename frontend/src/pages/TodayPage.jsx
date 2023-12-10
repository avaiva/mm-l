import PageMain from "../components/PageMain";
import CardToday from "../components/CardToday";
import BackNavToday from "../components/BackNavToday";
import TextArea from "../components/TextArea";
import { useState, useContext } from "react";
import { TodayContext } from "../context/today.context";

export default function TodayPage() {
  //hooks
  const [showGratitude, setShowGratitude] = useState(false);
  const [showDiary, setShowDiary] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  // const [saveContent, setSaveContent] = useState("");
  //Context Api
  const {
    gratitudeContent,
    setGratitudeContent,
    setDiaryContent,
    diaryContent,
    handleGratitude,
    handleDiary,
  } = useContext(TodayContext);
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
  //format the date

  const handleGratitudeClick = () => {
    setShowGratitude(true);
    setShowDiary(false);
    setShowButtons(false);
  };

  // const handleValue = (e) => {
  //   setSaveContent(e.target.value);
  //   console.log("yeterr!!", saveContent);
  // };
  const handleDiaryClick = () => {
    setShowDiary(true);
    setShowGratitude(false);
    setShowButtons(false);
  };

  const handleSave = (e) => {
    handleGratitude(e);
    handleDiary(e);
    setShowDiary(false);
    setShowGratitude(false);
    setShowButtons(true);
    setDiaryContent(diaryContent);
    setGratitudeContent(gratitudeContent);
    //setInputvalue or something
    //update today content vs
  };
  const handleGoBack = () => {
    setShowDiary(false);
    setShowGratitude(false);
    setShowButtons(true);
  };
  const handleEditGratitude = () => {
    setShowDiary(false);
    setShowGratitude(true);
    setShowButtons(false);
  };

  const handleEditDiary = () => {
    setShowDiary(true);
    setShowGratitude(false);
    setShowButtons(false);
  };

  return (
    <>
      <PageMain />
      {/* Work with divs and position it absolutely on the page. 
    Make sure to use em to stay consistent over breakpoints. */}
      {!gratitudeContent && !diaryContent && showButtons && (
        <div>
          <h4>{formatDate}</h4>
          <h1>Inspirational Quote</h1>
          <div style={{ margin: "1em" }}>
            <button onClick={handleGratitudeClick}>My Gratitude</button>
          </div>
          <div style={{ margin: "1em" }}>
            <button onClick={handleDiaryClick}>My Diary</button>
          </div>
        </div>
      )}
      {gratitudeContent && diaryContent && showButtons && (
        <div>
          <div>
            <CardToday label={"My Gratitude"} todayData={gratitudeContent}>
              <button onClick={handleEditGratitude}>Edit</button>
            </CardToday>
          </div>
          <div>
            <CardToday label={"My Diary"} todayData={diaryContent}>
              <button onClick={handleEditDiary}>Edit</button>
            </CardToday>
          </div>
        </div>
      )}
      {diaryContent && !gratitudeContent && showButtons && (
        <div>
          <button onClick={handleGratitudeClick}>My Gratitude</button>
          <CardToday label={"My Diary"} todayData={diaryContent}>
            <button onClick={handleEditDiary}>Edit</button>
          </CardToday>
        </div>
      )}
      {gratitudeContent && !diaryContent && showButtons && (
        <div>
          <CardToday label={"My Gratitude"} todayData={gratitudeContent}>
            <button onClick={handleEditGratitude}>Edit</button>
          </CardToday>
          <button onClick={handleDiaryClick}>My Diary</button>
        </div>
      )}
      {showGratitude && (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <BackNavToday onClick={handleGoBack} />
            <button onClick={handleSave}>Save</button>
          </div>
          <TextArea
            date={formatDate}
            label={"My Gratitude"}
            name={"My Gratitude"}
            placeholder={
              "| This is your personal Gratitude. Take a few breaths and reflect on everything that happened today. Think of any moments or events that felt meaningful to you, no matter how big or small, and write them down. You can edit your moments at any time."
            }
            onChange={handleGratitude}
            defaultValue={gratitudeContent}
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
            <BackNavToday onClick={handleGoBack} />
            <button onClick={handleSave}>Save</button>
          </div>
          <TextArea
            date={formatDate}
            label={"My Diary"}
            name={diaryContent}
            placeholder={
              "| This is your personal diary. Take a few breaths and reflect on everything that happened today. Think of any moments or events that felt meaningful to you, no matter how big or small, and write them down. You can edit your moments at any time."
            }
            onChange={handleDiary}
            defaultValue={diaryContent}
          />
        </div>
      )}
    </>
  );
}
