import "./PageMain.css";
import NavBar from "./NavBar";

export default function PageMain() {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "fixed",
            top: "3%",
            left: "50%",
            transform: "translateX(-50%)",
            height: "89vh",
            width: "90vw",
            backgroundColor: "#F4F5F7",
            borderRadius: "2.5rem",
            padding: "20px",
            boxSizing: "border-box",
          }}
        ></div>
        <div style={{ position: "fixed", bottom: "15px", left: "50%", transform: "translateX(-50%)" }}>
          <NavBar/>
        </div>
      </div>
    );
  }
