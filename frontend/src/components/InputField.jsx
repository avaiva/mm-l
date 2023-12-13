import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function InputField({ id, label, type, placeholder, onChange, defaultValue }) {
  return (
    <>
      <FloatingLabel controlId={id} label={label} className="mb-3">
        <Form.Control
          as="textarea"
          style={{ height: '4rem' }}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </FloatingLabel>
    </>
  );
}

export default InputField;
