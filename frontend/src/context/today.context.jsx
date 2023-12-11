import React, { useState, useEffect } from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";

const API_URL = import.meta.env.VITE_SERVER_URL;

const TodayContext = React.createContext();

function TodayProviderWrapper(props) {
  //hooks
  const [token, setToken] = useState("");
  const [gratitudeContent, setGratitudeContent] = useState("");
  const [diaryContent, setDiaryContent] = useState("");
  const [dataGratitude, setDataGratatitude] = useState("");

  //hooks
  //dateformat
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  //date format
  //user
  //user

  useEffect(() => {
    axios
      .post(`${API_URL}/auth/login`, {
        email: "test11@test",
        password: "test11@test",
      })
      .then((response) => setToken(response.data.token))
      // .then((response) => console.log(response.data.token))
      .catch((err) => console.log(err));
  }, []);
  console.log(token);
  const user = decodeToken(token);
  // console.log(user._id);
  console.log(user);
  // const handleGratitudeSave = () => {
  if (token) {
    axios
      .post(
        `${API_URL}/api/gratitude/entries`,
        {
          userID: user._id,
          gratitudeText: gratitudeContent,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data.gratitudeText);
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  }
  // };

  console.log(token);
  // console.log(user);

  if (token) {
    axios
      .get(
        `${API_URL}/api/gratitude/entries/date/${formattedDate}`,
        {
          userID: user._id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  // handlefunctions
  const handleDiary = (e) => {
    setDiaryContent(e.target.value);
    console.log("Diary ", diaryContent);
  };
  const handleGratitude = (e) => {
    setGratitudeContent(e.target.value);
    console.log(gratitudeContent, "what");
  };
  return (
    <TodayContext.Provider
      value={{
        gratitudeContent,
        setGratitudeContent,
        setDiaryContent,
        diaryContent,
        handleGratitude,
        handleDiary,
      }}
    >
      {props.children}
    </TodayContext.Provider>
  );
}

export { TodayProviderWrapper, TodayContext };
