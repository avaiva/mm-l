import "./CardToday.css";
import Card from "react-bootstrap/Card";
export default function CardToday({ label, todayData, children }) {
  return (
    <section className="card-wrapper">
      <div>
        <Card className="card custom-card">
          <Card.Body>
            <Card.Title>
              <h3>{label}</h3>
            </Card.Title>
            <Card.Text>
              <p className="p1">{todayData}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>{children}</div>
    </section>
  );
}
