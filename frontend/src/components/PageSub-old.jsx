import "./PageSub.css";
import BackNav from "./BackNav";
import BackgroundFull from "./BackgroundFull";

export default function PageSub() {
  return (
    <>
      <div>
        <BackgroundFull style={{zIndex: "-1"}}>
          <BackNav style={{zIndex: "1"}} />
        </BackgroundFull>
      </div>
    </>
  );
}
