import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function InputField({ id, label, type, placeholder, value, onChange }) {
  return (
    <>
      <FloatingLabel controlId={id} label={label} className="mb-3">
        <Form.Control type={type} value={value} placeholder={placeholder} onChange={onChange} />
      </FloatingLabel>
    </>
  );
}

export default InputField;
