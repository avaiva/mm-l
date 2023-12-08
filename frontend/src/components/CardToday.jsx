import "./CardToday.css";
import Card from "react-bootstrap/Card";
export default function CardToday({ label, todayData }) {
  return (
    <section className="card-wrapper">
      <Card className="custom-card">
        <Card.Body>
          <Card.Title>My gratitude {label}</Card.Title>
          <Card.Text>
            {todayData}
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content. Some quick
            example text to build on the card title and make up the bulk of the
            card's content. Some quick example text to build on the card title
            and make up the bulk of the card's content. Some quick example text
            to build on the card title and make up the bulk of the card's
            content. Some quick example text to build on the card title and make
            up the bulk of the card's content. Some quick example text to build
            on the card title and make up the bulk of the card's content. Some
            quick example text to build on the card title and make up the bulk
            of the card's content. Some quick example text to build on the card
            title and make up the bulk of the card's content. Some quick example
            text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
}
