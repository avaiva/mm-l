import "./PageLanding.css";

export default function PageLanding() {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
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
            zIndex: "-1",
          }}
        >
        </div>
      </div>
    );
  }