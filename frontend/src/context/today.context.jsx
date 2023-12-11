import React, { useState, useEffect } from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";

const API_URL = import.meta.env.VITE_SERVER_URL;

const TodayContext = React.createContext();

function TodayProviderWrapper(props) {
  // Hooks

  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [gratitudeDataBase, setGratitudeDataBase] = useState({});
  const [diaryDataBase, setDiaryDataBase] = useState({});
  console.log();

  // Date format
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post(`${API_URL}/auth/login`, {
          email: "test11@test",
          password: "test11@test",
        });
        setToken(response.data.token, "he");
        if (token) {
          return setUser(decodeToken(token));
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchToken();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      if (user && token) {
        try {
          const response = await axios.get(
            `${API_URL}/api/gratitude/entries/date/${formattedDate}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );

          setGratitudeDataBase(response.data);
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return;
          }
        }
      }
    };
    fetchData();
  }, [user, token, formattedDate]);

  const handleGratitudeCreate = async (e) => {
    e.preventDefault();
    if (user && token) {
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
              userID: user._id,
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
      if (user && token) {
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
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return;
          }
        }
      }
    };
    fetchData();
  }, [user, token, formattedDate]);

  const handleDiaryCreate = async (e) => {
    e.preventDefault();
    if (user && token) {
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
              userID: user._id,
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
