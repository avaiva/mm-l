import { Form, Button } from "react-bootstrap";
import ButtonSave from "./ButtonSave";
import "./TextArea.css";
import { useState } from "react";

export default function TextArea({
  name,
  placeholder,
  // defaultValue,
  label,
  date,
  onSubmit,
  defaultValue,
  onChange,
}) {
  return (
    <section className="textarea-wrapper">
      <Form onSubmit={onSubmit}>
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
            defaultValue={defaultValue}
            onChange={onChange}
          />
        </Form.Group>
        <div
          className="BackNav-wrapper"
          style={{
            position: "fixed",
            top: "2.5em",
            right: "2.5rem",
            minWidth: "90px",
          }}
        >
          <Button
            className="btn-editGratitudePage-save border-0 bg-transparent text-dark d-flex align-items-center btn-sm"
            // style={{ display: "none" }}
            type="submit"
          >
            SAVE
          </Button>
        </div>
      </Form>
    </section>
  );
}
