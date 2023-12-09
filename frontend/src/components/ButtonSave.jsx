import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ButtonSave() {
  const handleSave = () => {
    // functionality code
  };
  return (
    <>
      <Button variant="secondary" onClick={handleSave} className="border-0 bg-transparent text-dark d-flex align-items-center btn-sm">
        Save
      </Button>
    </>
  );
}
