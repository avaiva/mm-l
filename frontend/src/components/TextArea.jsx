import { Form } from "react-bootstrap";
import "./TextArea.css";

export default function TextArea({ name, placeholder, value, label, date }) {
  return (
    <section className="textarea-wrapper">
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <h4 className="date-textarea">{date}</h4>
          <Form.Label> {label}</Form.Label>
          <Form.Control
            className="textarea"
            name={name}
            as="textarea"
            placeholder={placeholder}
            rows={20} //should be responsive
            cols={35} //
            value={value}
          />
        </Form.Group>
      </Form>
    </section>
  );
}
