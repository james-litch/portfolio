import { Badge, Box, Button, Heading, HStack, Icon, useColorModeValue, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLocationOutline } from 'react-icons/io5'
import { BsCloudDownload } from 'react-icons/bs'

const contacts = [
  { icon: FiPhone, href: 'tel:07850450030', label: '07850450030' },
  { icon: IoLocationOutline, label: 'Liverpool, England' },
  { icon: HiOutlineMail, href: 'mailto:james.litchfield99@gmail.com', label: 'james.litchfield99@gmail.com' },
  { icon: AiFillGithub, href: 'https://www.github.com/james-litch', label: 'james-litch' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/james-litchfield-34b875154/', label: 'LinkedIn' }
]

/**
 * NavBar Library Component
 */
export const InfoCard = () => {
  const background = useColorModeValue('light.card', 'dark.card')
  const badgeColor = useColorModeValue('light.badge', 'dark.badge')
  const badgeText = useColorModeValue('light.text', 'dark.text')
  const buttonColor = useColorModeValue('light.accent', 'dark.accent')

  return (
    <Box borderRadius="2xl" bgColor={background} width={['full', 'full', 'xs']} height="auto" padding={10} position="relative">
      <Box position='sticky' top={0}>
        <VStack spacing={6} alignContent="center" position="static" textAlign="center">

            <Image src="/images/memoji.png" width={200} height={200} layout="fixed"/>

            <Heading>James Litchfield</Heading>

            <Badge
              backgroundColor={badgeColor}
              px={4} py={2}
              height="fit-content"
              rounded="full"
              color={badgeText}>
              Software Developer
            </Badge>

            <VStack alignItems="start" spacing={2}>
              {contacts.map(({ icon, href, label }) => (
                <HStack key={label} spacing={2}>
                  <Icon as={icon} color={buttonColor} boxSize={5}/>
                { href
                  ? (
                    <Button variant="link" as='a' href={href} target="_blank"
                    _focus={{ outline: 'none', color: buttonColor }}>
                        {label}
                    </Button>
                    )
                  : (
                    <Button variant="link" as='p' _hover={{}}>
                      {label}
                    </Button>
                    )}
                </HStack>
              ))}
            </VStack>

            <Button
              _hover={{ transform: 'scale(1.1)' }}
              color="white"
              as="a"
              href="/resume.pdf"
              target="_blank"
              backgroundColor={buttonColor}
              borderRadius="xl"
              width="full"
              textAlign="center"
              py={6}>
                <Icon as={BsCloudDownload} color={'white'} boxSize={5} marginRight={2}/>
                Download CV
            </Button>
          </VStack>
      </Box>
    </Box>

  )
}
