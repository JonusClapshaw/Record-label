import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Bio />
      <Artist />
    </>
  );
  console.log(data);
}

export default App;
