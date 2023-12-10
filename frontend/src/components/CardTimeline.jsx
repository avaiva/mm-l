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
        <h4 className="date">05.12.2023{date}</h4>
      </div>

      <Card className="custom-card">
        <Card.Body>
          <Card.Title>My gratitude</Card.Title>
          <Card.Text>
            {todayGratitude.text}
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="custom-card">
        <Card.Body>
          <Card.Title>My Moment</Card.Title>
          <Card.Text>
            {todayDiary.text}
            Moments Some quick example text to build on the card title and make
            up the bulk of the card's content. Some quick example text to build
            on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
}
