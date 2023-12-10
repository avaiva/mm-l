import { Form, Button } from "react-bootstrap";
import "./TextArea.css";
import { useState } from "react";

export default function TextArea({
  name,
  placeholder,
  // defaultValue,
  label,
  date,
  onChange,
  defaultValue,
}) {
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
            // defaultValue={defaultValue}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        </Form.Group>
      </Form>
    </section>
  );
}
