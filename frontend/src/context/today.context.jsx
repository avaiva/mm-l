import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_URL;

const TodayContext = React.createContext();

function TodayProviderWrapper(props) {
  //hooks
  const [token, setToken] = useState("");
  const [gratitudeContent, setGratitudeContent] = useState("");
  const [diaryContent, setDiaryContent] = useState("");
  //   const [saveContentDiary, setSaveContentDiary] = useState("");
  //     const [saveContentGratitude, setSaveContentGratitude] = useState("");
  //   console.log(saveContent);
  //hooks
  //dateformat
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  //date format

  //handlefunctions
  const handleGratitude = (e) => {
    e.persist();
    setGratitudeContent(e.target.value);
    console.log("Gratitude!!", gratitudeContent);
  };

  const handleDiary = (e) => {
    e.persist();
    setDiaryContent(e.target.value);
    console.log("Diary ", diaryContent);
  };
  //handlefunctions

  //get token //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginResponse = await axios.post(`${API_URL}/auth/login`, {
          email: "test11@test",
          password: "test11@test",
        });

        setToken(loginResponse.data.token);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [token]);

  //get token //

  // get gratidute
  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const getGratitude = await axios.get(
            `${API_URL}/api/gratitude/entries/date/${formattedDate}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );

          setGratitudeContent(getGratitude.data.gratitudeText);

          await axios.patch(
            `${API_URL}/api/gratitude/entries/${getGratitude.data._id}`,
            { gratitudeText: gratitudeContent },
            {
              headers: {
                Authorization: token,
              },
            }
          );
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
    return;
  }, [token, formattedDate]);

  // fetch diary && update Diary
  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const getDiary = await axios.get(
            `${API_URL}/api/diary/entries/date/${formattedDate}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setDiaryContent(getDiary.data.diaryText);

          await axios.patch(
            `${API_URL}/api/diary/entries/${getDiary.data._id}`,
            { diaryText: diaryContent },
            {
              headers: {
                Authorization: token,
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
    return;
  }, [formattedDate, token]);
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
