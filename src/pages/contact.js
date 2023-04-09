import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  VStack,
  Select
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsInstagram, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { useFormik } from "formik";
import { useState } from "react";

import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import validationSchema from "./validations";

function Contact() {
  const { hasCopied, onCopy } = useClipboard("edizkeskin@gmail.com");

  const droneList = ["model1","modle2","model3"];
  const colorList = ["Black","White","Blue","Red","Green"];

  const [selectedmodel,setSelectedModel] = useState();
  const [selectedcolor,setSelectedColor] = useState("Black");



  const handleModelChange=(e)=>{
    setSelectedModel(e.target.value);
  }
  const handleColorChange=(e)=>{
    setSelectedColor(e.target.value);
    console.log(selectedcolor);
  }

  

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        emailjs.send(
          "gmail",
          "content",
          values,
          process.env.REACT_APP_EMAIL_ID
        );
        console.log("SUCCESS!");
        resetForm();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message sent.",
          showConfirmButton: false,

          timer: 2000,
        });
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Message could not be delivered.",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  });

  return (
    <Flex align="center" justify="center" id="contact">
      <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            ></Heading>
            <Stack
              spacing={{ base: 4, md: 8, lg: 6 }}
              direction={{ base: "column", md: "row" }}
            >
              
              <Box
                bg={selectedcolor}
                borderRadius="lg"
                p={8}
                width={{ base: "", md: "400px" }}
                color={selectedcolor=="White"? "black":"whiteAlpha.900"}
                shadow="base"
              >
                <form onSubmit={formik.handleSubmit}>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Model</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Select placeholder='Select Model' onChange={handleModelChange} value={selectedmodel}>
                          {droneList.map((item) => (
                              <option value={item} key={item}>
                              {item}
                              </option>
                          ))}
                        </Select>
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Color</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Select placeholder='Select Color' onChange={handleColorChange} value={selectedcolor}>
                          {colorList.map((item) => (
                              <option value={item} key={item}>
                              {item}
                              </option>
                          ))}
                        </Select>
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          isInvalid={
                            formik.touched.email && formik.errors.email
                          }
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        autoComplete="none"
                        isInvalid={
                          formik.touched.message && formik.errors.message
                        }
                        maxHeight="100px"
                        resize={"none"}
                      />
                    </FormControl>
                    <Button
                      colorScheme="blue"
                      type="submit"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                      isFullWidth
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
export default Contact;
