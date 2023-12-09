import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonIcon.css';
import { BsTrash } from 'react-icons/bs';

export default function ButtonIconDelete({ navigate, label, type }) {
  const handleDelete = () => {
    // functionality code
  };
  return (
    <Button className="btn-icon" href={navigate} type={type} onClick={handleDelete}>
      <div className="d-flex align-items-center">
        {/* BUTTON STYLING */}
        <BsTrash style={{ width: '16px', height: '16px', margin: '0' }} />
        {label}
      </div>
    </Button>
  );
}
