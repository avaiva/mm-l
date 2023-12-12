import "./PageSub.css";
import BackNav from "./BackNav";

export default function PageSub() {
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
        }}
      >
      </div>
        <div
          className="BackNav-wrapper"
          style={{
            position: "fixed",
            top: "2.5em",
            left: "2.5em",
            minWidth: "90px",
          }}
        >
          <BackNav />
        </div>
    </div>
  );
}
