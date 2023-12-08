import "./App.css";
import CardToday from "./components/CardToday";
import InputField from "./components/InputField";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      {/* <InputField
        label="name"
        type="text"
        placeholder="Some text"
        value="name"
      /> */}
      {/* <TextArea /> */}
      <CardToday />
      <CardToday />
    </>
  );
}

export default App;
