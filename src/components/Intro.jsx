import React from "react";
import Mfahiz from "../Mfahiz_photo.jpg";
import { Img, Container, Heading, Box, Button, Text } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import SocialButtons from "./SocialButtons";

const Intro = () => {
  return (
    <Container
      id='Intro'
      margin="auto"
      display={["block", "block", "flex", "flex", "flex"]}
      marginTop='100px'
      maxW="90%"
      justifyContent="space-evenly"
      h='auto'
    >
      <Img
        src={Mfahiz}
        borderRadius="40%"
        height="250px"
        width="250px"
        alt="logo"
        margin="auto"
      />
      <Box margin="auto" maxW='100%' >
        <Heading
          margin="auto"
          size="lg"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Hi, I'm Muhammed Fahiz
        </Heading>
        <Text size="md" margin="auto">
          Full Stack Web Developer
        </Text>
        <br />
        <Button
        margin='auto'
          as="a"
          target='_blank'
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          color="white"
          href="https://drive.google.com/file/d/1mp9pHHSYGICZnQi8MncxAKVCE90DR6ZR/view?usp=sharing"
          _hover={{bgGradient:"linear(to-l , #FF0080, #7928CA)"}}
        >
          <DownloadIcon marginRight='5px' /> Download My Resume here
        </Button>
        <SocialButtons />
      </Box>
    </Container>
  );
};

export default Intro;
