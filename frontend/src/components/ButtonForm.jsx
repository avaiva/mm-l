import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonForm.css';

export default function ButtonForm({ navigate, label, classCss, onClick }) {
  function changeColorButton() {
    //Add logic
  }

  return (
    <Button className={`btn-form ${classCss}`} size="lg" href={navigate} onClick={onClick}>
      {label}
    </Button>
  );
}
