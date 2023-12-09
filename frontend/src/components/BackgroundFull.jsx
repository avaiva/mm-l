export default function BackgroundFull(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: "3%",
        left: "50%",
        transform: "translate(-50%, 0%)",
        height: "94vh",
        width: "90vw",
        backgroundColor: "#F4F5F7",
        borderRadius: "2.5rem",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {props.children}
    </div>
  );
}
