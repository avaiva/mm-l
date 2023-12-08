import React from "react";
import Button from "react-bootstrap/Button";
import { BsChevronLeft } from "react-icons/bs";

export default function BackNav({ onClick }) {
  return (
    <>
      <Button
        variant="secondary"
        onClick={onClick}
        className="border-0 bg-transparent text-dark d-flex align-items-center"
      >
        <BsChevronLeft style={{ marginRight: "8px" }} /> Go back
      </Button>
    </>
  );
}
