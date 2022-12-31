import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReduxLoginForm from "./components/ReduxLoginForm";
import PromiseLoginForm from "./components/PromiseLoginForm";
import ChakraLoginForm from "./components/ChakraLoginForm";
import { Button } from "@chakra-ui/react";

function App() {
  const [activeView, setActiveView] = useState("promise");

  return (
    <div className="App">
      <h1>React + Redux Toolkit + Toast</h1>
      <div className="card">
        <Button colorScheme="blue" onClick={() => setActiveView("promise")}>
          With Promise
        </Button>
        <Button colorScheme="purple" onClick={() => setActiveView("redux")}>
          With Redux Toolkit
        </Button>
        <Button colorScheme="green" onClick={() => setActiveView("chakra")}>
          With Chakra UI
        </Button>
      </div>

      {activeView === "promise" ? (
        <div>
          <PromiseLoginForm title={"Promise"} />
        </div>
      ) : null}

      {activeView === "chakra" ? (
        <div>
          <ChakraLoginForm title={"Redux Toolkit"} />
        </div>
      ) : null}

      {activeView === "redux" ? (
        <div>
          <ReduxLoginForm title={"Chakra UI"} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
