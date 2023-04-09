import {  Box,
  Flex,
  Heading,
  useClipboard,
  List,
  ListItem, 
  ListIcon,
  VStack,
  HStack,
  Select,
  useBreakpointValue } from "@chakra-ui/react";
import { useMemo,useState,Suspense } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Card from "../components/card";
import Model from "../components/drone";
import Model2 from "../components/drone2";  

import { Canvas } from "@react-three/fiber";
import CustomSpinner from "../components/CustomSpinner";
import { Loader, OrbitControls, ContactShadows } from "@react-three/drei";
import axios from "axios";
import { useQuery } from "react-query";

function Projects() {
  const { hasCopied, onCopy } = useClipboard("edizkeskin@gmail.com");

  const droneList = ["model1","modle2","model3"];
  const colorList = ["Black","White","Blue","Red","Green"];

  const [selectedmodel,setSelectedModel] = useState();
  const [selectedcolor,setSelectedColor] = useState("Black");

  const fov = useBreakpointValue({ base: 6, sm: 6, md: 4 });



  const handleModelChange=(e)=>{
    setSelectedModel(e.target.value);
  }
  const handleColorChange=(e)=>{
    setSelectedColor(e.target.value);
    console.log(selectedcolor);
  }

  return (
    
    <Flex align="center" justify="center" id="project" data-aos="zoom-in-up">
    <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }}>
      <Box >
      <HStack>
        <VStack spacing={{ base: 4, md: 8, lg: 10 }} >
          <Heading
            fontSize={{
              base: "4xl",
              md: "5xl",
            }}
          ></Heading>
          <Canvas
              width={500}
              height={500}
              pixelRatio={[1, 2]}
              camera={{ position: [0, 0, -700], fov: fov }}
            >
              <ambientLight intensity={1.0} />
              <directionalLight position={[-2, 5, 5]} />
              <Suspense fallback={null}>
                <Model2 />
                <ContactShadows
                  rotation-x={Math.PI / 2}
                  position={[0, -0.8, 0]}
                  opacity={1}
                  width={10}
                  height={10}
                  blur={1.5}
                  far={0.8}
                />
              </Suspense>
              <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 1.75}
              />
            </Canvas>
            <Loader />
            <Box
        
              borderRadius="lg"
              p={8}
              width={{ base: "", md: "400px" }}
              color="whiteAlpha.900"
              shadow="base"
            >
            
            <Heading as={"h2"} color={"red.400"} align="center">
              Model1
            </Heading>
            <br></br>
            <br></br> 
            <List spacing={3} color="white">
              <ListItem>
                NAME: 
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Model1
              </ListItem>
              <ListItem>
                Price:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                190$
              </ListItem>
              <ListItem>
                Speed:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                275 m/s
              </ListItem>
              <ListItem>
                Usage:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                275 m/s
              </ListItem>
              <ListItem>
                Number of Profalers:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                8
              </ListItem>
              <ListItem>
                Special note:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                8
              </ListItem>
            </List>
      
            </Box>

            
        </VStack>
            <VStack spacing={{ base: 4, md: 8, lg: 10 }} >
          <Heading
            fontSize={{
              base: "4xl",
              md: "5xl",
            }}
          ></Heading>
          <Canvas
              width={500}
              height={500}
              pixelRatio={[1, 2]}
              camera={{ position: [0, 0, -700], fov: fov }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[-2, 5, 2]} />
              <Suspense fallback={null}>
                <Model2 />
                <ContactShadows
                  rotation-x={Math.PI / 2}
                  position={[0, -0.8, 0]}
                  opacity={1}
                  width={10}
                  height={10}
                  blur={1.5}
                  far={0.8}
                />
              </Suspense>
              <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 1.75}
              />
            </Canvas>
            <Loader />
            <Box
              borderRadius="lg"
              p={8}
              width={{ base: "", md: "400px" }}
              color="whiteAlpha.900"
              shadow="base"
            >
            
            <Heading as={"h2"} color={"red.400"} align="center">
              Model1
            </Heading>
            <br></br>
            <br></br> 
            <List spacing={3} color="white">
              <ListItem>
                NAME: 
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Model1
              </ListItem>
              <ListItem>
                Price:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                190$
              </ListItem>
              <ListItem>
                Speed:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                275 m/s
              </ListItem>
              <ListItem>
                Usage:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                275 m/s
              </ListItem>
              <ListItem>
                Number of Profalers:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                8
              </ListItem>
              <ListItem>
                Special note:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                8
              </ListItem>
            </List>
      
            </Box>

            
        </VStack>
        <VStack spacing={{ base: 4, md: 8, lg: 10 }} >
          <Heading
            fontSize={{
              base: "4xl",
              md: "5xl",
            }}
          ></Heading>
          <Canvas
              width={500}
              height={500}
              pixelRatio={[1, 2]}
              camera={{ position: [0, 0, -700], fov: fov }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[-2, 5, 2]} />
              <Suspense fallback={null}>
                <Model2 />
                <ContactShadows
                  rotation-x={Math.PI / 2}
                  position={[0, -0.8, 0]}
                  opacity={1}
                  width={10}
                  height={10}
                  blur={1.5}
                  far={0.8}
                />
              </Suspense>
              <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 1.75}
              />
            </Canvas>
            <Loader />
            <Box
              borderRadius="lg"
              p={8}
              width={{ base: "", md: "400px" }}
              color="whiteAlpha.900"
              shadow="base"
            >
            
            <Heading as={"h2"} color={"red.300"} align="center">
              Model3
            </Heading>
            <br></br>
            <br></br> 
            <List spacing={3} color="white">
              <ListItem>
                NAME: 
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Model1
              </ListItem>
              <ListItem>
                Price:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                190$
              </ListItem>
              <ListItem>
                Speed:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                275 m/s
              </ListItem>
              <ListItem>
                Usage:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                275 m/s
              </ListItem>
              <ListItem>
                Number of Profalers:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                8
              </ListItem>
              <ListItem>
                Special note:
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                THIS is Model3
              </ListItem>
            </List>
      
            </Box>

            
        </VStack>
            </HStack>
      </Box>
    </Box>

  </Flex>
  );
}

export default Projects;
