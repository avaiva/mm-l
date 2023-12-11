import "./CardTimeline.css";
import Card from "react-bootstrap/Card";

export default function CardTimeline({
  date,
  todayGratitude,
  todayDiary,
}) {
  return (
    <section className="timeline-wrapper">
      <div className="date">
        <h4 className="date">{date}</h4>
      </div>

      {todayGratitude && (
        <Card className="custom-card">
          <Card.Body>
            <Card.Title>My gratitude</Card.Title>
            <Card.Text>
              {todayGratitude}
            </Card.Text>
          </Card.Body>
        </Card>
      )}

       {todayDiary && (
        <Card className="custom-card">
          <Card.Body>
            <Card.Title>My Moments</Card.Title>
            <Card.Text>
              {todayDiary}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </section>
  );
}
