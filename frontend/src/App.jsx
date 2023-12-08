import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import InputField from "./components/InputField";

function App() {
  return(
    <>
    <InputField
    label="name"
    type="text"
    placeholder="Some text"
    value="name"
    />
    </>
  )
}

export default App;
