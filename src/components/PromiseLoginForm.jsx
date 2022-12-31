import { useState } from "react";

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
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { axiosInstance } from "../api/axios.config";

export default function PromiseLoginForm() {
  const toast = useToast();

  /**--------- STATE ---------**/
  const [isLoading, setIsLoading] = useState(false);
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
    console.log(e);
    setIsLoading(true);
    axiosInstance
      .post(
        "/auth/login",
        {
          username: user.username, // 'kminchelle'
          password: user.password, // '0lelplR'
          // expiresInMins: 60     // optional
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (res) {
        toast({
          title: "Logged in successfully",
          status: "success",
          isClosable: true,
        });
      })
      .catch(function (error) {
        toast({
          title: error.response.data.message,
          description: "Username or Password is invalid!",
          status: "error",
          isClosable: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Flex align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"}>Sign in with Promise</Heading>
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
              type={"submit"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
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
