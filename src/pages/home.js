import { Suspense } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Tooltip,
  VStack,
  ListItem,
  ListIcon,
  List,
  Grid,
  IconButton,
  Button,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaMarker,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { AiFillMail, AiFillRocket, AiOutlineDoubleRight, AiOutlineMail } from "react-icons/ai";
import ProgressBar from "react-animated-progress-bar";

import Model from "../components/drone";
import Model2 from "../components/drone";

import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, ContactShadows } from "@react-three/drei";

function Home() {
  const textColor = useColorModeValue("black", "white");
  const fov = useBreakpointValue({ base: 6, sm: 6, md: 4 });

  const barSize = useBreakpointValue({
    base: "300px",
    md: "400px",
  });

  const skills = [
    {
      num: "202133829",
      name: "Noh Hyunwoo",
      value: "25",
      icon: <FaGithub size="2em" />,
      github: "https://github.com/tomhyunwoo"
    },
    {
      num: "201935066",
      name: "Song yunsu",
      value: "25",
      icon: <FaGithub size="2em" />,
      github: "https://github.com/HBKVN",
    },
    {
      num: "201835498",
      name: "Lee JungHoon",
      value: "25",
      icon: <FaGithub size="2em" />,
      github: "https://github.com/LEEJUNGHOOON",
    },
    {
      num: "202135593",
      name: "Jaedeok \"Michael\" Han",
      value: "25",
      icon: <FaGithub size="2em" />,
      github: "https://github.com/thxto-me",
    },
  ];
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex data-aos="zoom-in-up">
          <Box
            align={"center"}
            backdropFilter={"blur(2px)"}
            w="500px"
            h="500px"
          >
            <Canvas
              width={700}
              height={700}
              pixelRatio={[1, 2]}
              camera={{ position: [-3, 2, 15], fov: fov }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[-2, 5, 2]} />
              <Suspense fallback={null}>
                <Model />
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
          </Box>
        </Flex>
        <Stack data-aos="zoom-in-up">
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              textAlign={"center"}
            >
              <Text mb={"2"} color="white">
                We're
                <Text
                  as={"span"}
                  position={"relative"}
                  color={"white"}
                  ml={2}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "red.400",
                    zIndex: -1,
                  }}
                >
                  High Web 2
                </Text>
              </Text>
              <Text fontSize={{base:"2xl", sm: "4xl", lg: "6xl" }} as={"span"} color={"red.400"}>
                <Typewriter
                  options={{
                    autoStart: true,
                    delay: 75,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(120)
                      .typeString("<span>We provide<span>")
                      .pauseFor(600)
                      .deleteAll()
                      .pauseFor(600)
                      .typeString("<span>Drone Service<span>")
                      .pauseFor(600)
                      .start();
                  }}
                />
              </Text>
            </Heading>
          </Box>
          <Stack
            pt={"20"}
            justifyContent="center"
            direction="row"
            display={{ base: "none", md: "flex" }}
          >
            <Link href="#about">
              <Button
                variant={"outline"}
                backdropFilter={"blur(2px)"}
                color="white"
                transition="all 0.3s"
                _hover={{ bgColor: "transparent", color: "red.400" }}
              >
                About
              </Button>
            </Link>
          </Stack>
        </Stack>
      </SimpleGrid>

      <Stack spacing={{ base: 6, md: 10 }} py={{ base: 16, md: 24 }}>
        <Text
          color={"gray.300"}
          fontSize="lg"
          textAlign={"center"}
          data-aos="zoom-in-up"
        >
          We are HighWeb2<br />Advanced Web Programming (14856_001), Spring 2023
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          justifyContent={"space-between"}
          direction={{ base: "column", md: "row" }}
        >
          <VStack
            spacing={{ base: 4, sm: 6 }}
            alignItems="rigth"
            backdropFilter={"blur(2px)"}
            data-aos="zoom-in-up"
          >
            <Heading as={"h2"} color={"yellow.400"}>
              What We Sell
            </Heading>
            <List spacing={3} color="white">
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="red.500" />
                Amazing SLAM Solution
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Quadcopters
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="white.500" />
                LiDAR Sensor
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="yellow.500" />
                Import <a href="https://www.dji.com/kr">DJI</a>, <a href="http://www.symatoys.net/">SYMA</a> Drones 
              </ListItem>
            </List>
          </VStack>
          <VStack
            spacing={{ base: 4, sm: 6 }}
            alignItems="rigth"
            backdropFilter={"blur(2px)"}
            data-aos="zoom-in-up"
          >
            <Heading as={"h2"} color={"red.400"}>
              Our Info
            </Heading>
            <List spacing={3} color="white">
              <ListItem>
                <Tooltip
                  hasArrow
                  label="Github"
                  bg="gray.300"
                  color="black"
                  borderRadius={"md"}
                >
                  <Text
                    as={"a"}
                    href={"https://github.com/GC-AWP23-HighWeb2"}
                    mr="0"
                    target="_blank"
                    rel="noopener noreferrer"
                    color={textColor}
                    _hover={{ color: "yellow.300" }}
                    transition="all 0.3s"
                  >
                    <FaGithub size={"30px"} color="white" />
                  </Text>
                </Tooltip>
              </ListItem>
              <ListItem>
                <ListIcon as={FaMarker} color="green.500" />
                Advanced Web Programming (14856_001), Spring 2023
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="yellow.500" />
                Instructor: Prof. 최성자( <a href="mailto:artchoi0g@gachon.ac.kr"><ListIcon as={AiOutlineMail}/></a>)
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillRocket} color="yellow.500" />
                School of Computing, Gachon University
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillMail} color="white.500" />
                <a href="mailto:hjd0907@gachon.ac.kr" type="email">Send email</a>
              </ListItem>
            </List>
          </VStack>
        </Stack>
        <Heading
          as={"h2"}
          color={"blue.400"}
          backdropFilter={"blur(2px)"}
          id="about"
          data-aos="zoom-in-up"
        >
          Our Team
        </Heading>
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          mt={"16"}
        >
          {skills.map((skill) => (
            <Box
              key={skill.name}
              display={"flex"}
              flexDirection="column"
              textAlign={"center"}
              backdropFilter={"blur(2px)"}
              alignItems={"center"}
              justifyContent="center"
              data-aos="zoom-in-up"
              color="white"
            >
              <Box display={"flex"} flexDirection="row" mr={"20px"}>
                <Text fontSize={"2xl"} fontWeight="bold" variant="ghost">
                  {skill.name}
                  {/* <a href={skill.github}>{skill.name}</a> */}
                </Text>
              </Box>
              <Box display={"flex"} flexDirection="row" mr={"20px"}>
                <Text fontSize={"xl"} fontWeight="bold" variant="ghost">
                  {skill.num}
                </Text>
              </Box>
              <Box display={"flex"} flexDirection="row" mr={"20px"}>
                {skill.icon && (
                  <a href={skill.github}>
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      _hover={{
                        bg: "transparent",
                        cursor: "default",
                      }}
                      icon={skill.icon}
                    />
                  </a>
                )}
              </Box>
              <ProgressBar
                width={barSize}
                height="10px"
                rect
                fontColor="gray"
                percentage={skill.value}
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="#333333"
                trackBorderColor="grey"
              />
            </Box>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
export default Home;
