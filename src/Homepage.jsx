import React from 'react'
import {Box,Text,Image, Flex,Button,Link,Center,useColorMode} from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect';
import {MdDownload} from "react-icons/md"
import { BsGithub } from 'react-icons/bs';
import Aboutme from './Aboutme';
import Myskills from './MySkills';
import Githubcalender from "./Githubcalender"

const Homepage = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const { colorMode} = useColorMode()
  console.log(colorMode)
 
  const mainbox={
    backgroundColor:"#dff4ff",
    padding:"20px",
    paddingBottom:"80px"
  }
  const truebox={
    padding:"20px",
    paddingBottom:"80px",
    backgroundColor:"#050402"
  }
  return (
    <div id="about" data-aos="fade-up-right" data-aos-duration="3000" style={{marginTop:"60px"}}>
      {isLargerThan800?<div style={colorMode === 'light'?mainbox:truebox} data-aos="fade-up-right">
      <Flex textAlign={"start"} width="90%" margin="auto" marginTop="30px" >

      <Box width="50%" margin="auto" data-aos="fade-right">
        <Text style={{fontSize:"25px",fontWeight:'Bold'}}>Hello, I'm Kuldeep Singh</Text>
        <Box style={{fontSize:"25px",fontWeight:'Bold'}} textAlign="start">
        <Typewriter
  options={{
    strings: ["Growth-Oriented Full Stack Web Developer."],
    autoStart: true,
    loop: true,
  }}
/></Box>

<Flex textAlign={"start"} marginTop="20px" gap="20px" alignItems={"center"}>
<Link href="https://github.com/Kuldeepsingh921"><Box>
  {colorMode === 'dark'?<Box fontSize="45px"><BsGithub /></Box>:<Image src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png" width="40px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}/>}
  </Box></Link>
  <Link href="https://www.linkedin.com/in/kuldeep-singh-a50672196/">
  <Box>
  {colorMode === 'light'?<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png" width="40px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}/>:<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png" width="40px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}/>}
  </Box></Link>
  <Link href='https://drive.google.com/file/d/1Mx76MItsitp5sLdOLOWTNSJSFiVE6LDZ/view?usp=share_link'>
  <Box>
  {colorMode === 'light'?<Button backgroundColor={"#e53e3e"} color="white" padding="20px" fontSize={"20px"} display="flex" alignItems="center"  _hover={{transform:"scale(1.1)",transition:"0.5s"}}>Resume   <MdDownload  /></Button>:<Button backgroundColor={"#6d28d9"} color="white" padding="20px" fontSize={"20px"} display="flex" alignItems="center" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>Resume <MdDownload /></Button>}
  </Box></Link>
  
</Flex>
        </Box>
        <Box width="30%" margin="auto">
          <Image src="https://i.postimg.cc/cCWNQqpt/00100s-PORTRAIT-00100-BURST20180501174332547-COVER.jpg" borderRadius={"50%"} width="250px" height="250px"></Image>
        </Box>
     </Flex>
      </div>:<Box style={colorMode === 'light'?mainbox:truebox}>
      <Center><Box>
      <Image src="https://i.postimg.cc/cCWNQqpt/00100s-PORTRAIT-00100-BURST20180501174332547-COVER.jpg" borderRadius={"50%"} width="200px" height="200px"></Image>
     </Box>
     </Center>
     <Box marginTop="20px">
     <Text style={{fontSize:"20px",fontWeight:'Bold'}}>Hello, I'm Kuldeep Singh</Text>
     <Box style={{fontSize:"16px",fontWeight:'Bold'}} textAlign="start">
        <Typewriter
            options={{
              strings: ["Growth-Oriented Full Stack Web Developer."],
              autoStart: true,
              loop: true,
  }}
/></Box>
     </Box>
     <Center>
     <Flex textAlign={"start"} marginTop="20px" gap="20px" alignItems={"center"}>
  <Link href="https://github.com/Kuldeepsingh921"><Box>
  {colorMode === 'dark'?<Box fontSize="45px"><BsGithub /></Box>:<Image src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png" width="40px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}/>}
  </Box></Link>
<Link href="https://www.linkedin.com/in/kuldeep-singh-a50672196/">
<Box>
  {colorMode === 'dark'?<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png" width="40px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}/>:<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png" width="40px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}/>}
  </Box>
</Link>
<Link href="https://drive.google.com/file/d/1vqWuq5cA26_WRNHWpiq4sFmVZNfMgVBA/view?usp=share_link">
<Box>
  {colorMode === 'dark'?<Button backgroundColor={"#6d28d9"} color="white" padding="20px" fontSize={"20px"} display="flex" alignItems="center" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>Resume <MdDownload /></Button>:<Button backgroundColor={"#e53e3e"} color="white" padding="20px" fontSize={"20px"} display="flex" alignItems="center"  _hover={{transform:"scale(1.1)",transition:"0.5s"}}>Resume   <MdDownload  /></Button>}
  </Box>
</Link>
  
  </Flex>
     </Center>
      </Box>}
      <Aboutme />
      <Myskills />
      <Githubcalender />
    </div>
  )
}

export default Homepage
