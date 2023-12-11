import "./CardTimeline.css";
import Card from "react-bootstrap/Card";
import ButtonIconEdit from "../components/ButtonIconEdit";
import ButtonIconDelete from "./ButtonIconDelete";
import axios from "axios";

export default function CardTimeline({
  date,
  todayGratitude,
  todayGratitudeId,
  todayDiary,
  todayDiaryId,
}) {
  const handleDelete = async (entryType, id) => {
    if (entryType === "gratitude") {
      try {
        const response = await axios.delete(`/api/gratitude/${id}`);

        if (response.status === 200) {
          console.log("Content deleted successfully");
        } else {
          console.error("Failed to delete content");
        }
      } catch (error) {
        console.error("Error deleting content", error);
      }
    }

    if (entryType === "diary") {
      try {
        const response = await axios.delete(`/api/diary/${id}`);

        if (response.status === 200) {
          console.log("Content deleted successfully");
        } else {
          console.error("Failed to delete content");
        }
      } catch (error) {
        console.error("Error deleting content", error);
      }
    }
  };

  return (
    <section className="timelineCard-wrapper">
      <div className="date">
        <h4 className="date">{date}</h4>
      </div>

      {todayGratitude && (
        <Card className="custom-card">
          <Card.Body>
            <Card.Title>My gratitude</Card.Title>
            <div className="custom-card-btns">
              <ButtonIconDelete
                // navigate={`/timeline`}
                onClick={() => handleDelete("gratitude", todayGratitudeId)}
              />
              <ButtonIconEdit
                navigate={`edit-gratitude/${todayGratitudeId}`}
              />
            </div>
            <Card.Text>{todayGratitude}</Card.Text>
          </Card.Body>
        </Card>
      )}

      {todayDiary && (
        <Card className="custom-card">
          <Card.Body>
            <Card.Title>My Moments</Card.Title>
            <div className="custom-card-btns">
              <ButtonIconDelete
                // navigate={`/timeline`}
                onClick={() => handleDelete("diary", todayDiaryId)}
              />
              <ButtonIconEdit
                navigate={`edit-diary/${todayDiaryId}`}
              />
            </div>
            <Card.Text>{todayDiary}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </section>
  );
}
