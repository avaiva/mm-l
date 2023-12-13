import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonSave.css';

export default function ButtonSave({ onClick }) {
  const handleSubmit = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };
  return (
    <div className="btn-save">
      <Button onClick={handleSubmit()}>
        <p className="h7">Save</p>
      </Button>
    </div>
  );
}
