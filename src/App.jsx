import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import VegitableList from "./Component/VegitableList";
import ErrorMessage from "./Component/ErrorMessage";
import Container from "./Component/Container";
import Inputtxt from "./Component/Inputtxt";
import { useState } from "react";

function App() {
  let [vegItable, setVegitable] = useState([]);

  const onkeydown = (e) => {
    if (e.key === "Enter") {
      let newItem = e.target.value;
      let newVeg = [...vegItable, newItem];
      setVegitable(newVeg);
    }
  };

  return (
    <>
      <Container>
        <h1 className="Heading">Healthy food List</h1>
        <ErrorMessage Listitem={vegItable} />
        <Inputtxt handeldonkey={onkeydown} />
        <VegitableList Listitem={vegItable} />
      </Container>
    </>
  );
}

export default App;
