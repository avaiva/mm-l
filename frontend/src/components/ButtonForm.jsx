import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonForm.css';

export default function ButtonForm({ navigate, label, classCss }) {
  function changeColorButton() {
    //Add logic
  }

  return (
    <div className="flex-center">
      <Button className={`btn-form ${classCss}`} size="lg" href={navigate}>
        {label}
      </Button>
    </div>
  );
}
