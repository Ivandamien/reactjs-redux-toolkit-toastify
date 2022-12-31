import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReduxLoginForm from "./components/ReduxLoginForm";
import PromiseLoginForm from "./components/PromiseLoginForm";
import ChakraLoginForm from "./components/ChakraLoginForm";
import { Button, HStack } from "@chakra-ui/react";
import "./App.css";

function App() {
  const [activeView, setActiveView] = useState("promise");

  return (
    <>
      <HStack justifyContent={"center"}>
        <Button colorScheme="blue" onClick={() => setActiveView("promise")}>
          With Promise
        </Button>
        <Button colorScheme="green" onClick={() => setActiveView("chakra")}>
          With Chakra Toast
        </Button>
        <Button colorScheme="purple" onClick={() => setActiveView("redux")}>
          With Redux + Toastify
        </Button>
      </HStack>

      {activeView === "promise" ? <PromiseLoginForm title={"Promise"} /> : null}

      {activeView === "chakra" ? <ChakraLoginForm title={"Redux Toolkit"} /> : null}

      {activeView === "redux" ? <ReduxLoginForm title={"Chakra UI"} /> : null}

      <ToastContainer />
    </>
  );
}

export default App;
