import {Box,Button,Grid, GridItem, Heading,Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import styles from "./Project.module.css"
import {BsFillCameraVideoFill,BsFillEyeFill,BsGithub} from "react-icons/bs"

export const Projects = () => {
  
    const { colorMode} = useColorMode()
    const darkcolor={
       color:"#6d28d9"
    }
    const lightcolor={
        color:"#e53e3e"
    }
    const mainbox={
      backgroundColor:"#dff4ff",
     
    }
    const truebox={
      backgroundColor:"#050402"
    }
  return (
<Box id="projects" style={colorMode === 'light'?mainbox:truebox} paddingBottom="60px">
       <Box  data-aos="fade-up-right" data-aos-duration="3000" paddingTop="1px" >
        <Box>
        <Heading mt="5rem" mb="2rem" > <em  style={colorMode==="dark"?darkcolor:lightcolor}>Project</em> <em >Section</em> </Heading>
        </Box>
       
       {/* mid-section */}
       
       <Grid className={styles.mid_sec} templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="20px"
       
       >
        <GridItem className={styles.child} style={colorMode=="dark"?{backgroundColor:"#1a202c"}:{backgroundColor:"#ffff"}}>
          <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src="https://cdn.dribbble.com/users/4400366/screenshots/15917760/media/21dd5982b34f1e95353b3a8089862f83.png?compress=1&resize=400x300" alt="expedia" />
           <h2 className={styles.proName} style={colorMode==="dark"?darkcolor:lightcolor} >Expedia</h2>

           <Text className={styles.proPara} noOfLines={3}>Expedia is one of the biggest online travel websites out there. It can be used to search for and book all sorts of travel, including hotels, airfare, rental cars, cruises, activities, attractions and vacation packages.</Text>

           <Text style={{fontSize:"14px"}} fontWeight="500" marginTop="10px"><span className={styles.techStack} style={colorMode==="dark"?darkcolor:lightcolor}>Tech Stack:-</span>HTML,CSS and JavaScript</Text>
          
          <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"15px"}}>
            <Button  _hover={{ fontSize: '20px',bg:"#e53e3e"}}
     > <a href="https://www.linkedin.com/in/kuldeep-singh-a50672196/"><BsFillCameraVideoFill /></a> </Button>
            <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href='https://shimmering-stroopwafel-bf250f.netlify.app/index.html'><BsFillEyeFill /></a></Button>
            <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href='https://github.com/Kuldeepsingh921/judicious-rice-4024'><BsGithub /></a></Button>
          </Box>

        </GridItem>
        <GridItem className={styles.child} style={colorMode=="dark"?{backgroundColor:"#1a202c"}:{backgroundColor:"#ffff"}}>
        <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src="https://cdn.dribbble.com/users/2839013/screenshots/12187646/41.gif" alt="" />

        <h2 className={styles.proName} style={colorMode==="dark"?darkcolor:lightcolor} >Nike</h2>

           <Text className={styles.proPara} noOfLines={3}>Nike, Inc. is an American multinational corporation that is engaged in the design, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.</Text>

           <Text style={{fontSize:"14px"}} fontWeight="500"><span className={styles.techStack} style={colorMode==="dark"?darkcolor:lightcolor}>Tech Stack:-</span>React Js Chakra UI </Text>
          
          <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"15px"}}>
          <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}> <a href="https://www.linkedin.com/in/kuldeep-singh-a50672196/"><BsFillCameraVideoFill /></a> </Button>
            <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href='https://spectacular-bombolone-133d78.netlify.app/'><BsFillEyeFill /></a></Button>
            <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href='https://github.com/Kuldeepsingh921/--hurt-transport-4569/tree/main/mynike'><BsGithub /></a></Button>
          </Box>
        </GridItem>
        <GridItem className={styles.child} style={colorMode=="dark"?{backgroundColor:"#1a202c"}:{backgroundColor:"#ffff"}}>
        <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src="https://www.videoamigo.com/blog/wp-content/uploads/2019/11/youtube-redesign.gif" alt="" />

<h2 className={styles.proName} style={colorMode==="dark"?darkcolor:lightcolor} >YouTube</h2>

   <Text className={styles.proPara} noOfLines={3}>YouTube is a global online video sharing and social media platform. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim.</Text>

   <Text style={{fontSize:"14px"}} fontWeight="500"><span className={styles.techStack} style={colorMode==="dark"?darkcolor:lightcolor}>Tech Stack:-</span>HTML, CSS, and JavaScript</Text>
  
  <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"15px"}}>
  <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}> <a href="https://www.linkedin.com/in/kuldeep-singh-a50672196/"><BsFillCameraVideoFill /></a> </Button>
    <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href='https://calm-khapse-ebab04.netlify.app/'><BsFillEyeFill /></a></Button>
    <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href='https://github.com/masai-course/kuldeep_singh_fw21_0501/tree/master/unit-3/sprint-3/day-3/you/YOUTUBE%20APP'><BsGithub /></a></Button>
  </Box>
        </GridItem>
        <GridItem className={styles.child} style={colorMode=="dark"?{backgroundColor:"#1a202c"}:{backgroundColor:"#ffff"}}>
        <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src="https://wpforms.com/wp-content/uploads/2020/08/Toggl-track.png" alt="" />

<h2 className={styles.proName} style={colorMode==="dark"?darkcolor:lightcolor}>Toggle Track</h2>

   <Text className={styles.proPara} noOfLines={3}>Toggl Track is a time tracking software operated by Toggl OÜ, headquartered in Tallinn, Estonia, that offers online time tracking and reporting services through their website along with mobile and desktop applications. </Text>

   <Text style={{fontSize:"14px"}} fontWeight="500"><span className={styles.techStack} style={colorMode==="dark"?darkcolor:lightcolor}>Tech Stack:-</span>HTML,CSS and JavaScript</Text>
  
  <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"15px"}}>
  <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}> <a href="https://www.linkedin.com/in/kuldeep-singh-a50672196/"><BsFillCameraVideoFill /></a> </Button>
    <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href='https://resplendent-squirrel-f3053d.netlify.app/'><BsFillEyeFill /></a></Button>
    <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href='https://github.com/Kuldeepsingh921/devout-teeth-4903'><BsGithub /></a></Button>
  </Box>
        </GridItem>
    
       </Grid>

    </Box>
    </Box>
  )
}
