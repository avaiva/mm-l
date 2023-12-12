import './PageSub.css';
import BackNav from './BackNav';

export default function PageSub() {
  return (

    <div
      style={{
        position: "relative",
        overflow: "hidden",
        margin: "0",
        padding: "0",
      }}
      className="background-wrap"
    >
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#F1F2E9",
        }}
      ></div>
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
