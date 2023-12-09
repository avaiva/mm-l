import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonIcon.css';
import { BsPencil } from 'react-icons/bs';

export default function ButtonIconEdit({ navigate, label, type }) {
  const handleEdit = () => {
    // functionality code
  };

  return (
    <Button className="btn-icon" href={navigate} type={type} onClick={handleEdit}>
      <BsPencil />
      {label}
    </Button>
  );
}
