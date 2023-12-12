import "./CardToday.css";
import Card from "react-bootstrap/Card";
export default function CardToday({ label, todayData, children }) {
  return (
    <section className="card-wrapper">
      <div>
        <Card className="card custom-card">
          <Card.Body>
            <Card.Title>{label}</Card.Title>
            <Card.Text>{todayData}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>{children}</div>
    </section>
  );
}
