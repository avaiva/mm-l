import { Form } from "react-bootstrap";
import "./TextArea.css";

export default function TextArea({
  name,
  placeholder,
  onChange,
  value,
  label,
}) {
  return (
    <section className="textarea-wrapper">
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label> My Gratitudes {label}</Form.Label>
          <Form.Control
            className="textarea"
            name={name}
            as="textarea"
            //placeholder={placeholder}
            //onChange={onChange}
            //value= {value}
            placeholder="| This is your personal diary. Take a few breaths and reflect on everything that happened today. Think of any moments or events that felt meaningful to you, no matter how big or small, and write them down. You can edit your moments at any time."
            rows={25}
            cols={35}
          />
        </Form.Group>
      </Form>
    </section>
  );
}
