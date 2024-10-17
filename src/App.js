import { useState } from "react";
import NavBar from "./Components/NavBar";
import NewsBoard from "./Components/NewsBoard";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div className="App">
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
}

export default App;
