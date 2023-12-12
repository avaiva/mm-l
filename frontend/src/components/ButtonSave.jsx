import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ButtonSave({onClick}) {
  const handleSubmit = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };
  return (
    <>
      <Button variant="secondary" onClick={handleSubmit()} className="border-0 bg-transparent text-dark d-flex align-items-center btn-sm">
        SAVE
      </Button>
    </>
  );
}
