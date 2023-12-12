import "./PageMain.css";
import NavBar from "./NavBar";
import Avatar from "./Avatar";

export default function PageMainToday(props) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        margin: "0",
        padding: "0",
      }}
      className="page-main-container"
    >
      <div
        className="background-grey"
        style={{
          position: "fixed",
          top: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#F1F2E9",
          zIndex: -1,
        }}
      ></div>
      {props.avatar && (
        <div
          className="Avatar-wrapper"
          style={{
            zIndex: "1",
            position: "fixed",
            top: "2.5em",
            right: "1.5em",
            height: "0",
            margin: "0",
          }}
        >
          <Avatar name="Eva" scale="0.23" />
        </div>
      )}

      <div style={{ position: "relative" }}>{/* {props.children} */}</div>

      {props.navbar && (
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
      )}
    </div>
  );
}
