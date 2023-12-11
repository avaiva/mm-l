import './TimelinePage.css'
import PageMain from "../components/PageMain";
import { useState, useEffect } from "react";
import axios from "axios";
import CardTimeline from "../components/CardTimeline";
import {Link } from 'react-router-dom'

export default function TimelinePage() {
  const [timelineList, setTimelineList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5005/api/timeline", {
        headers: { Authorization: `${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setTimelineList(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    // return <ErrorPage/>
    return <> Error...</>;
  }

  if (loading) {
    // return <LoadingSpinner/>
    return <> Loading...</>;
  }

  return (
    <>
      <PageMain />

      <div
        style={{
          position: "fixed",
          top: "6em",
          left: "3.5em",
          // transform: "translate(-50%,-50%)",
        }}
      >
        <h4>My life</h4>
      </div>
      <div style={{ position: "fixed", top: "9em", left: "3.5em", width: "80vw", textAlign: "left" }}>
        {timelineList.length === 0 && (
          <div className="timeline-noData">
            <h4>No entries yet</h4>
            <h4>
              Start feeling gratitude and collect precious moments of{' '} <Link to="/today">Today</Link> 
            </h4> 
          </div>
        )}
        <div className="timeline-withData-wrapper" style={{maxHeight: "74vh", overflowY: "auto"}}>
         {timelineList.length > 0 &&
        timelineList.map((eachEntry) => (
          <div key={eachEntry.date} className="timeline-withData">
          {(eachEntry.gratitude.length > 0 || eachEntry.diary.length > 0) && (
            <CardTimeline
              date={eachEntry.date}
              todayGratitude={(eachEntry.gratitude.length > 0) ? eachEntry.gratitude[0].text : ''}
              todayDiary={eachEntry.diary.length > 0 ? eachEntry.diary[0].text : ''}
            />
          )}
        </div>
        ))}
        </div>
      </div>
    </>
  );
}
