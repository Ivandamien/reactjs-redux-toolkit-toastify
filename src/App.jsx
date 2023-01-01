import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReduxLoginForm from "./components/ReduxLoginForm";
import PromiseLoginForm from "./components/PromiseLoginForm";
import ChakraLoginForm from "./components/ChakraLoginForm";
import { Box, Button, Heading, HStack, Stack } from "@chakra-ui/react";

function App() {
  const [activeView, setActiveView] = useState("promise");

  return (
    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"center"} h={"100vh"}>
      <Box>
        <Heading mb={10} fontSize={"5xl"} textAlign="center">
          ReactJS + Toastify
        </Heading>
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
      </Box>

      <ToastContainer />
    </Stack>
  );
}

export default App;
