import {Box,Button,Grid, GridItem, Heading,Text, useColorMode ,Link} from '@chakra-ui/react'
import React from 'react'
import styles from "../Css-modules/Project.module.css"
import {BsFillCameraVideoFill,BsFillEyeFill,BsGithub} from "react-icons/bs"

export const Projects = () => {
  
    const { colorMode} = useColorMode()
    const darkcolor={
       color:"#6d28d9"
    }
    const lightcolor={
        color:"#DF4401"
    }
    const mainbox={
      backgroundColor:"#dff4ff",
     
    }
    const truebox={
      
      backgroundColor:"#050402"
    }
    const proArray=[
      {proname:"Nike",
        prodesc:"Nike, Inc.[note 1] is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.",
        techStack:"React,Chakra UI, Node, JSON, Render, Vercel",
        gif:"https://cdn.dribbble.com/users/2839013/screenshots/12187646/41.gif",
        video:"",
        src:"https://github.com/Kuldeepsingh921/--hurt-transport-4569/tree/main/mynike",
        link:"https://mynike.vercel.app/"
      },
      {proname:"QuikrBazaar",
        prodesc:"Quikr-Bazaar is an Indian online marketplace and classified advertising company, based in Bangalore, India. It was founded by Pranay Chulet.",
        techStack:"React JS, Redux, Node, Render, ChakraUI",
        gif:"https://mir-s3-cdn-cf.behance.net/projects/404/a33bdc104727375.Y3JvcCw5MTMsNzE0LDcwLDEwMQ.gif",
        video:"",
        src:"https://github.com/Kuldeepsingh921/quikr-bazaar-clone",
        link:"https://lonely-milk-4878.vercel.app/"
      },
      {proname:"Youtube Clone",
        prodesc:"Here is a clone of Youtube which I built as an assignment. Youtube is a online video streaming platform where you can watch any video. It has basic functionalities like fetching data from server, sorting data.",
        techStack:"HTML, CSS, JavaScript,Advance JS",
        gif:"https://www.videoamigo.com/blog/wp-content/uploads/2019/11/youtube-redesign.gif",
        video:"",
        src:"https://github.com/masai-course/kuldeep_singh_fw21_0501/tree/master/unit-3/sprint-3/day-2/you/YOUTUBE%20APP",
        link:"https://calm-khapse-ebab04.netlify.app/"
      },
      {proname:"Expedia",
        prodesc:"Expedia.com is an online travel agency owned by Expedia Group, based in Seattle.The website and mobile app can be used to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages. ",
        techStack:"HTML, CSS, JavaScript, Advance JS",
        gif:"https://thumbs.gfycat.com/ClutteredWhirlwindGrouse-max-1mb.gif",
        video:"",
        src:"https://github.com/Kuldeepsingh921/judicious-rice-4024",
        link:"https://shimmering-stroopwafel-bf250f.netlify.app/index.html"
      },
      {proname:"Tggle Track",
        prodesc:"Toggl Track is a time tracking software operated by Toggl OÜ, headquartered in Tallinn, Estonia, that offers online time tracking and reporting services through their website along with mobile and desktop applications.",
        techStack:"HTML, CSS, JavaScript",
        gif:"https://wpforms.com/wp-content/uploads/2020/08/Toggl-track.png",
        video:"",
        src:"https://github.com/Kuldeepsingh921/devout-teeth-4903",
        link:"https://resplendent-squirrel-f3053d.netlify.app/"
      },
      
      
      
    ]
  return (


    <Box id="projects" style={colorMode === 'light'?mainbox:truebox} paddingBottom="60px">
       <Box mt="1rem" className={styles.intro} data-aos="fade-up-right" data-aos-duration="3000" paddingTop="1px">
        <Box >
        <Heading mt="1rem" mb="2rem"> <em style={colorMode==="dark"?darkcolor:lightcolor}>Project</em> <em>Section</em> </Heading>
        </Box>
       
       {/* mid-section */}
       
       <Grid className={styles.mid_sec} templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="20px"
       
       >
        {proArray.map((pro)=>
        <GridItem data key={pro.proname} className={styles.child}>
        <Link target="_blank" href={pro.link}><img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src={pro.gif} alt="expedia" /></Link>
         <h2 className={styles.proName} style={colorMode==="dark"?darkcolor:lightcolor} >{pro.proname}</h2>

         <Text className={styles.proPara}>{pro.prodesc}</Text>
         
         <Text style={{fontSize:"14px",color: "black",fontWeight:"bold"}}><span className={styles.techStack} style={colorMode==="dark"?darkcolor:lightcolor}>Tech Stack:-</span>{pro.techStack}</Text>
         
        
        <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"15px"}}>
          <Button  className={styles.icons} _hover={{ fontSize: '20px',bg:"#e53e3e"}} bg={colorMode=="dark"?"rgba(0, 153, 255, 0.139)":"rgba(0, 153, 255, 0.139)"}
   > <a target="_blank" href={pro.video}><BsFillCameraVideoFill /></a> </Button>
          <Button className={styles.icons} _hover={{ fontSize: '20px',bg:"#e53e3e"}} bg={colorMode=="dark"?"rgba(0, 153, 255, 0.139)":"rgba(0, 153, 255, 0.139)"}><a target="_blank" href={pro.link}><BsFillEyeFill /></a></Button>
          <Button  className={styles.icons} _hover={{ fontSize: '20px',bg:"#e53e3e"}} bg={colorMode=="dark"?"rgba(0, 153, 255, 0.139)":"rgba(0, 153, 255, 0.139)"}><a target="_blank" href={pro.src}><BsGithub /></a></Button>
        </Box>

      </GridItem> 
        )}
       
       </Grid>
         
       
    </Box>
    </Box>
  )
}

