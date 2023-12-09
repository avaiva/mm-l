import React from "react";
import Button from "react-bootstrap/Button";
import { BsChevronLeft } from "react-icons/bs";
//import { useNavigate } from "react-router-dom";

export default function BackNav() {
  //     const navigate = useNavigate();

  //   const handleGoBack = () => {
  //     navigate(-1);
  //   };

  return (
    <>
      <Button
        variant="secondary"
        //onClick={handleGoBack}
        className="border-0 bg-transparent text-dark d-flex align-items-center btn-sm"
      >
        <BsChevronLeft size={14} style={{ marginRight: "6px" }} /> Go back
      </Button>
    </>
  );
}
