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
          <p className="p3 date-textarea">{date}</p>
          <Form.Label className="h3"> {label}</Form.Label>
          <Form.Control
            className="textarea edit"
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
          <ButtonSave
            // style={{ display: "none" }}
            type="submit"
          >
            SAVE
          </ButtonSave>
        </div>
      </Form>
    </section>
  );
}
