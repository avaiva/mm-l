import React, { useState, useEffect } from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";

const API_URL = import.meta.env.VITE_SERVER_URL;

const TodayContext = React.createContext();

function TodayProviderWrapper(props) {
  // Hooks

  // const [gratitudeContent, setGratitudeContent] = useState("");
  const [diaryContent, setDiaryContent] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [gratitudeDataBase, setGratitudeDataBase] = useState("");

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

          setGratitudeDataBase((prevState) => {
            return response.data.gratitudeText;
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
  console.log(gratitudeDataBase);

  const handleGratitudeCreate = async (e) => {
    e.preventDefault();
    if (user && token) {
      try {
        const getGratitude = await axios.get(
          `${API_URL}/api/gratitude/entries/date/${formattedDate}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        console.log(getGratitude, "gratitude");

        if (getGratitude.response.status === 404) {
          // Handle the case where no gratitude entry is found
          console.log("No gratitude entry found. Creating a new one...");

          const createGratitude = await axios.post(
            `${API_URL}/api/gratitude/entries`,
            {
              userID: user._id,
              gratitudeText: gratitudeDataBase,
            },
            {
              headers: {
                Authorization: token,
              },
            }
          );
          console.log(createGratitude);

          // Continue with your logic...
        } else {
          // Gratitude entry found, proceed with the update
          const updateGratitude = await axios.patch(
            `${API_URL}/api/gratitude/entries/${getGratitude.data._id}`,
            { gratitudeText: gratitudeDataBase },
            {
              headers: {
                Authorization: token,
              },
            }
          );
          console.log(updateGratitude);

          // Continue with your logic...
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleDiary = (e) => {
    setDiaryContent(e.target.value);
    console.log("Diary ", diaryContent);
  };

  return (
    <TodayContext.Provider
      value={{
        setDiaryContent,
        diaryContent,
        handleDiary,
        handleGratitudeCreate,
        gratitudeDataBase,
        setGratitudeDataBase,
      }}
    >
      {props.children}
    </TodayContext.Provider>
  );
}

export { TodayProviderWrapper, TodayContext };
