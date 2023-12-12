import { Link } from "react-router-dom";
import "./Avatar.css";
import { Container } from "react-bootstrap";

export default function Avatar({ name, scale, onClick }) {
  const getAvatarColorClass = (letter) => {
    const lowerCaseLetter = letter.toLowerCase();
    if ("adgjmpsvy".includes(lowerCaseLetter)) {
      return "avatar-color-1";
    } else if ("behknqtwz".includes(lowerCaseLetter)) {
      return "avatar-color-2";
    } else {
      return "avatar-color-3";
    }
  };

  const calculateSize = (baseSize, scaleFactor) => {
    return `${baseSize * scaleFactor}px`;
  };

  return (
    <>
      <Container>
        <Link to="/account">
          <div
            className={`avatar font-weight-bold ${getAvatarColorClass(
              name[0]
            )}`}
            style={{
              height: calculateSize(150, scale),
              width: calculateSize(150, scale),
              fontSize: calculateSize(78, scale),
              fontWeight: "bold",
            }}
            onClick={onClick}
          >
            {name && name.length > 0 ? name[0].toUpperCase() : ""}
          </div>
        </Link>
      </Container>
    </>
  );
}
