import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { chakraUserLogin, selectChakraAuth } from "../app/chakraAuth/loginSlice";

export default function ChakraLoginForm() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectChakraAuth);
  /**--------- STATE ---------**/
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  /**--------- HANDLER ---------**/
  const handleChange = e => {
    const {
      target: { name, value },
    } = e;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(chakraUserLogin(user));
    // username, // 'kminchelle'
    //   password; // '0lelplR'
  };

  return (
    <Flex align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"}>Sign in with Chakra UI</Heading>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          as={"form"}
          onSubmit={submitHandler}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" name="username" value={user.username} onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input name="password" value={user.password} onChange={handleChange} />
            </FormControl>
            <Button
              isLoading={isLoading}
              type="submit"
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}
            >
              Sign in
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
