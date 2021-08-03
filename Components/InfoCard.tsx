import { Badge, Box, Button, Heading, HStack, Icon, useColorModeValue, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { BsCloudDownload } from 'react-icons/bs'
import { contacts } from '../data/contacts'

const ContactLinks = () => {
  const accentColor = useColorModeValue('light.accent', 'dark.accent')
  return (
    <VStack alignItems="start" spacing={2}>
      {contacts.map(({ icon, href, label }) => (
        <HStack key={label} spacing={2}>
          <Icon as={icon} color={accentColor} boxSize={5}/>
          { href
            ? (
                <Button variant="link" as='a' href={href} target="_blank" rel="noreferrer"
                    _focus={{ outline: 'none', color: accentColor }}>
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
  )
}

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

            <Image src="/images/memoji.png" width={200} height={200} layout="fixed" alt="Memoji Image"/>

            <Heading>James Litchfield</Heading>

            <Badge
              backgroundColor={badgeColor}
              px={4} py={2}
              height="fit-content"
              rounded="full"
              color={badgeText}>
              Software Engineer
            </Badge>

            <ContactLinks />

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
