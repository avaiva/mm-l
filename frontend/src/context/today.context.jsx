import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_URL;

const TodayContext = React.createContext();

function TodayProviderWrapper(props) {
  const [token, setToken] = useState("");
  const [gratitudeContent, setGratitudeContent] = useState("");
  const [diaryContent, setDiaryContent] = useState("");
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginResponse = await axios.post(`${API_URL}/auth/login`, {
          email: "test11@test",
          password: "test11@test",
        });

        const newToken = loginResponse.data.token;
        setToken(newToken);
        console.log({ token: newToken });

        const getGratitude = await axios.get(
          `${API_URL}/api/gratitude/entries/date/${formattedDate}`,
          {
            headers: {
              Authorization: newToken,
            },
          }
        );

        console.log(getGratitude.data);
        setGratitudeContent(getGratitude.data.gratitudeText);

        const getDiary = await axios.get(
          `${API_URL}/api/diary/entries/date/${formattedDate}`,
          {
            headers: {
              Authorization: newToken,
            },
          }
        );

        console.log(getDiary.data);
        console.log(getDiary.data._id);
        setDiaryContent(getDiary.data.diaryText);

        const updateDiary = await axios.patch(
          `${API_URL}/api/diary/entries/${getDiary.data._id}`,
          { diaryText: "Canim23242" },
          {
            headers: {
              Authorization: newToken,
            },
          }
        );
        console.log(updateDiary);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [token]);
  return (
    <TodayContext.Provider
      value={{
        gratitudeContent,
        setGratitudeContent,
        setDiaryContent,
        diaryContent,
      }}
    >
      {props.children}
    </TodayContext.Provider>
  );
}

export { TodayProviderWrapper, TodayContext };
