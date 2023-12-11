import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonIcon.css';
import { BsTrash } from 'react-icons/bs';

export default function ButtonIconDelete({ navigate, label, type, id }) {
  const handleDelete = async () => {
    try {
      // Send a DELETE request to your server API endpoint
      const response = await axios.delete(`/api/content/${id}`);

      if (response.status === 200) {
        console.log('Content deleted successfully');
        onDelete(id);
      } else {
        console.error('Failed to delete content');
      }
    } catch (error) {
      console.error('Error deleting content', error);
    }
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
