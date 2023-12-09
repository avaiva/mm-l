export default function BackgroundNav(props) {
    return (
      <div
        style={{
          position: "fixed",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          height: "80vh",
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