

export default function Background(props) {

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '90vh',
        width: '90vw',
        backgroundColor: '#F4F5F7',
        borderRadius: '2.5rem',
        padding: '20px',
        boxSizing: 'border-box', // Include padding in total width and height
      }}>
        {props.children}
    </div>
  );
}