import { Box,Flex,Text,Image ,useColorMode,IconButton,Heading,FormControl,Input,FormLabel, Link,Textarea,Button} from "@chakra-ui/react"
import React from 'react'
import styles from '../Css-modules/contact.module.css';
import sty from '../Css-modules/footer.module.css';
import { BsGithub, BsLinkedin, BsPerson, BsWhatsapp,BsInstagram  } from 'react-icons/bs';
import { MdEmail} from 'react-icons/md';

const Contact = () => {

  const { colorMode} = useColorMode()

  return (
    <Flex data-aos="fade-up-right" data-aos-duration="3000" id="contact" boxShadow= "0px 1px 5px 1px gray" flexDirection="column"mt={"10px"} gap={{base:"10",lg:""}}>
      <Heading mt="10">Let's get in touch...</Heading>
      <Flex justifyContent={"center"} align="center" flexDirection={{base:"column",lg:"row"}} gap="10" height="" >
            {/* Left box */}
            <Flex gap="5" flexDirection={"column"} justifyContent="center">

                    {/* Whatsapp */}
                    <Flex align="center">
                    <Link target="_blank" href="https://wa.me/+917838254390?text=I%27m%20interested%20in%20your%20profile">
                    <IconButton aria-label="email"
                        variant="ghost"size="lg"
                          fontSize="3xl"
                          icon={<BsWhatsapp/>}
                          
                          _hover={{
                            bg: 'blue.500',
                            color:"white"
                          }}
                          
                          isRound
                        />
                        </Link>
                        <Text>+917838254390</Text>
                    </Flex>
                      {/* Mail */}
                      <Flex align="center" >
                      <Link target="_blank" href="mailto:someone@example.com">
                      <IconButton aria-label="email"
                        variant="ghost"size="lg"
                          fontSize="3xl"
                          icon={<MdEmail />}
                          _hover={{
                            bg: 'blue.500',
                            color:"white"
                          }}
                          
                          isRound
                        /></Link>
                        <Link href="mailto:someone@example.com">kuldeepsingh211199@gmail.com</Link>
                      </Flex>

                      {/* github */}
                      <Flex align="center">
                      <Link target="_blank" href="https://github.com/Kuldeepsingh921">
                      <IconButton aria-label="email"
                        variant="ghost"size="lg"
                          fontSize="3xl"
                          icon={<BsGithub />}
                          _hover={{
                            bg: 'blue.500',
                            color:"white"
                          }}
                          
                          isRound
                        />
                      </Link>
                        <Link  target="_blank" href="https://github.com/Kuldeepsingh921">Kuldeepsingh921</Link>
                      </Flex>

                      {/* Linkedin */}
                      <Flex align="center">
                      <Link target="_blank" href="https://www.linkedin.com/in/kuldeep-singh-a50672196/">
                      <IconButton aria-label="email"
                        variant="ghost"size="lg"
                          fontSize="3xl"
                          icon={<BsLinkedin />}
                          _hover={{
                            bg: 'blue.500',
                            color:"white"
                          }}
                          
                          isRound
                        /></Link>
                        <Link target="_blank" href="https://www.linkedin.com/in/kuldeep-singh-a50672196/">linkedin/kuldeepsingh921</Link>
                      </Flex>

                      {/* Instagram */}
                      <Flex align="center">
                      <Link target="_blank" href="https://www.instagram.com/kuldeep5452singh/">
                      <IconButton aria-label="email"
                        variant="ghost"size="lg"
                          fontSize="3xl"
                          icon={<BsInstagram />}
                          _hover={{
                            bg: 'blue.500',
                            color:"white"
                          }}
                          
                          isRound
                        />
                        </Link>
                        <Link target="_blank" href="https://www.instagram.com/kuldeep5452singh/">kuldeep5452singh</Link>
                      </Flex>
                      
            </Flex>
            {/* RightBox */}
            <Flex align="center" width="" >
                  <FormControl isRequired>
                    <FormLabel>Email I'd</FormLabel>
                    <Input placeholder="Email"/>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder='First name' />
                    <FormLabel>Message</FormLabel>
                    <Textarea type="textArea" placeholder='Enter your Message'/>
                    <Button style={colorMode==="light"?{color:"black"}:{color:"white"}} mt="5" className={styles.btn} type="submit">Send</Button>
                  </FormControl>
            </Flex> 
      </Flex>
      {/* Footer */}
      <Flex align={"center"} fontSize={{base:"12",lg:"17px"}} justify="center" className={colorMode==="light"? sty.lfooter:sty.rfooter} height={"50"}>
        Made with ❤️ by Kuldeep Singh © All rights reserved. 2023 
      </Flex>
      
    </Flex>
  )
}

export default Contact