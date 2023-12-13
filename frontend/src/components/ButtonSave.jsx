import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonSave.css';

export default function ButtonSave({ onClick }) {
  return (
    <div className="btn-save">
      <Button onClick={onClick}>
        <h5>Save</h5>
      </Button>
    </div>
  );
}
