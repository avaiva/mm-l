import "./PageMain.css";
import NavBar from "./NavBar";
import Avatar from "./Avatar";

export default function PageMain(props) {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        className="background-grey"
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
          zIndex: "-1",
        }}
      >
        <div
          className="Avatar-wrapper"
          style={{
            zIndex: "1",
            position: "fixed",
            top: "1.5em",
            right: "1em",
            height: "0",
            margin: "0",
          }}
        >
          <Avatar name="Eva" scale="0.23" />
        </div>
      </div>

      <div style={{ position: "relative" }}>{/* {props.children} */}</div>

      <div
        style={{
          position: "fixed",
          bottom: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: "235px",
        }}
      >
        <NavBar />
      </div>
    </div>
  );
}
