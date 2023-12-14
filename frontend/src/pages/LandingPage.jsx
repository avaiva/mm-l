import PageLanding from "../components/PageLanding";
import ButtonForm from "../components/ButtonForm";
import "./LandingPage.css";
import BlurColorHighlight from "../components/BlurColorHighlight";
import ButtonIcon from "../components/ButtonIcon";
import ButtonSave from "../components/ButtonSave";

export default function LandingPage() {
  return (
    <>
      <PageLanding />
      <BlurColorHighlight
        position={{ top: "50%", right: "0%" }}
        size="200px"
        filter="blur(40px)"
      />
      <div className="nature-logo">
        <img src="../../public/Landing-nature-blur.png" />
      </div>
      <div className="landing-page-h1">
        <h1>Your inner voices</h1>
      </div>
      <div className="landing-page-h4">
        <h4>
          Practice gratitude and cherish the sunny moments of life with our app
        </h4>
      </div>
      <div className="landing-page-btn">
        <ButtonForm navigate="/signup" label="Sign Up " size="lg" />
        <ButtonForm navigate="/login" label="Login " size="lg" />
      </div>
    </>
  );
}
