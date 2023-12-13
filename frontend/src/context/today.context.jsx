import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./auth.context";
// import { decodeToken } from "react-jwt";
const API_URL = import.meta.env.VITE_SERVER_URL;

const TodayContext = React.createContext();

function TodayProviderWrapper(props) {
  // Hooks
  const token = localStorage.getItem("token");

  const [gratitudeDataBase, setGratitudeDataBase] = useState({});
  const [diaryDataBase, setDiaryDataBase] = useState({});

  console.log(gratitudeDataBase.gratitudeText, gratitudeDataBase, "gratidude");
  console.log(diaryDataBase.diaryText, diaryDataBase, "diary");

  // Date format
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
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
      if (token) {
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
    <TodayContext.Provider
      value={{
        diaryDataBase,
        setDiaryDataBase,
        handleGratitudeCreate,
        gratitudeDataBase,
        setGratitudeDataBase,
        handleDiaryCreate,
      }}
    >
      {props.children}
    </TodayContext.Provider>
  );
}

export { TodayProviderWrapper, TodayContext };
