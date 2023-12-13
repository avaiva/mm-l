import "./EditDiaryPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageSub from "../components/PageSub";
import TextArea from "../components/TextAreaTimelineEdit";
import ButtonSave from "../components/ButtonSave";
const BACKEND = import.meta.env.VITE_SERVER_URL;

export default function EditDiaryPage() {

  const { entryID } = useParams();

  const [diaryText, setDiaryText] = useState({});
  const [dateDiaryText, setDateDiaryText] = useState("")
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
    .get(`${BACKEND}/api/diary/entries/${entryID}`, {
      headers: { authorization: `${token}` },
    })
      .then((response) => {
        console.log(response.data)
        console.log(response.data.createdAt)
        setDateDiaryText(response.data.createdAt)
        setDiaryText(response.data.diaryText)})
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
      }, [entryID]);
      
      if (error) {
        // return <ErrorPage/>
        return <> Error...</>;
      }
      
      if (loading) {
        // return <LoadingSpinner/>
        return <> Loading...</>;
      }

      async function handleSubmit(e) {
        // e.preventDefault();
        try{
          const token = localStorage.getItem("token");
          const updateDiary = await axios.patch(
            `${BACKEND}/api/diary/entries/${entryID}`,
            { diaryText: diaryText },
            {
              headers: { authorization: `${token}` },
            }
            );
            console.log(updateDiary.data);
          } catch (error) {
            console.error(error.message);
          } finally {
            setIsSaving(false)
          }
        }
        
        // Helper functions
        const formatDate = (date)  => {
          const dateObject = new Date(date);
          const formattedDate = dateObject.toLocaleDateString("de-DE");
          return formattedDate;
        }

  return(
    <>
    <PageSub />
    <div className="editGratitudePage-wrapper">
      <div
        style={{
          position: "fixed",
          top: "6em",
          left: "3.3em",
          // transform: "translate(-50%,-50%)",
        }}
      >
        {/* <p>{formatDate()}</p> */}
        {/* <h5>I feel lucky, loved or joyful because...</h5> */}
        <TextArea
          name="editGratitude"
          label={"I feel lucky, loved or joyful because..."}
          date={formatDate(dateGratitudeText)}
          defaultValue={gratitudeText}
          placeholder={"some placeholder text"}
          onChange={(e) => {
            setGratitudeText(e.target.value);
          }}
          // onSubmit={handleSubmit}
        >
          <div>
            <ButtonSave
              onClick={handleSubmit}
              className="btn-editGratitudePage-save"
              style={{ display: "none" }}
            />
          </div>
        </TextArea>
      </div>
    </div>
  </>
  ); 
}
