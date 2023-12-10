import PageMain from "../components/PageMain";
import CardToday from "../components/CardToday";
import BackNavToday from "../components/BackNavToday";
import TextArea from "../components/TextArea";
import { useState } from "react";

export default function TodayPage() {
  const [showGratitude, setShowGratitude] = useState(false);
  const [showDiary, setShowDiary] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  // const [showSummary, setSummary] = useState(false);
  const [gratitudeContent, setGratitudeContent] = useState("he");
  const [diaryContent, setdiaryContent] = useState(""); //Maybe they should be ooutside of the page

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

  const handleSave = () => {
    // setSummary(true);
    setShowDiary(false);
    setShowGratitude(false);
    setShowButtons(true);
  };

  const handleEditGratitude = () => {
    // setSummary(false);
    setShowDiary(false);
    setShowGratitude(true);
    setShowButtons(false);
  };

  const handleEditDiary = () => {
    // setSummary(false);
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
          <h4>05.12.2023</h4> {/* to be dynamic */}
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
            <CardToday
              label={"My Gratitude"}
              todayData={
                "Today, I found solace in the pages of a good book, escaping into a world of imagination that brought moments of tranquility to my day. Reflecting on shared laughter with friends over a cup of coffee, I cherished the warmth of genuine connections that make ordinary moments extraordinary"
              }
            >
              <button onClick={handleEditGratitude}>Edit</button>
            </CardToday>
          </div>
          <div>
            <CardToday
              label={"My Diary"}
              todayData={
                "Today, I found solace in the pages of a good book, escaping into a world of imagination that brought moments of tranquility to my day. Reflecting on shared laughter with friends over a cup of coffee, I cherished the warmth of genuine connections that make ordinary moments extraordinary"
              }
            >
              <button onClick={handleEditDiary}>Edit</button>
            </CardToday>
          </div>
        </div>
      )}
      {diaryContent && !gratitudeContent && showButtons && (
        <div>
          <button onClick={handleGratitudeClick}>My Gratitude</button>
          <CardToday
            label={"My Diary"}
            todayData={
              "Today, I found solace in the pages of a good book, escaping into a world of imagination that brought moments of tranquility to my day. Reflecting on shared laughter with friends over a cup of coffee, I cherished the warmth of genuine connections that make ordinary moments extraordinary"
            }
          >
            <button onClick={handleEditDiary}>Edit</button>
          </CardToday>
        </div>
      )}
      {gratitudeContent && !diaryContent && showButtons && (
        <div>
          <CardToday
            label={"My Gratitude"}
            todayData={
              "Today, I found solace in the pages of a good book, escaping into a world of imagination that brought moments of tranquility to my day. Reflecting on shared laughter with friends over a cup of coffee, I cherished the warmth of genuine connections that make ordinary moments extraordinary"
            }
          >
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
            <BackNavToday onClick={handleSave} />
            <button onClick={handleSave}>Save</button>
          </div>
          <TextArea
            date={"05.12.2023"}
            label={"My Gratitude"}
            name={"My Gratitude"}
            placeholder={
              "| This is your personal Gratitude. Take a few breaths and reflect on everything that happened today. Think of any moments or events that felt meaningful to you, no matter how big or small, and write them down. You can edit your moments at any time."
            }
            value={"gratitude"}
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
            <BackNavToday onClick={handleSave} />
            <button onClick={handleSave}>Save</button>
          </div>
          <TextArea
            date={"05.12.2023"}
            label={"My Diary"}
            name={"My Diary"}
            placeholder={
              "| This is your personal diary. Take a few breaths and reflect on everything that happened today. Think of any moments or events that felt meaningful to you, no matter how big or small, and write them down. You can edit your moments at any time."
            }
            value={"diary"}
          />
        </div>
      )}
      {/* This logic also shoul */}
      {/* {showSummary && (
        <div>
          <div>
            <CardToday
              label={"My Gratitude"}
              todayData={
                "Today, I found solace in the pages of a good book, escaping into a world of imagination that brought moments of tranquility to my day. Reflecting on shared laughter with friends over a cup of coffee, I cherished the warmth of genuine connections that make ordinary moments extraordinary"
              }
            >
              <button onClick={handleEditGratitude}>Edit</button>
            </CardToday>
          </div>
          <div>
            <CardToday
              label={"My Diary"}
              todayData={
                "Today, I found solace in the pages of a good book, escaping into a world of imagination that brought moments of tranquility to my day. Reflecting on shared laughter with friends over a cup of coffee, I cherished the warmth of genuine connections that make ordinary moments extraordinary"
              }
            >
              <button onClick={handleEditDiary}>Edit</button>
            </CardToday>
          </div>
        </div>
      )} */}
    </>
  );
}
