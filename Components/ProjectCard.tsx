import { Center, Heading, Icon, Stack, Text, useColorModeValue, VStack, HStack, Button } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Project } from '../data/projects'

/**
 * ProjectCard Library Component
 */
export const ProjectCard = ({ icon, title, tags, iconBackground, description, url, github }: Project) => {
  const subtitleColor = useColorModeValue('light.label', 'dark.label')
  const titleColor = useColorModeValue('light.display', 'dark.display')
  const cardColor = useColorModeValue('light.card', 'dark.card')
  const accentColor = useColorModeValue('light.accent', 'dark.accent')

  return (
    <Stack
    direction={['column', 'column', 'column', 'row']}
    align={['center', 'center', 'center', 'flex-start']}
    spacing={[5, 10]}
    borderRadius="2xl"
    backgroundColor={cardColor}
    width='full'
    padding={8}>

      <Center
        backgroundColor={iconBackground}
        padding={10}
        borderRadius="2xl">
          <Icon as={icon} color="white" boxSize={50} />
      </Center>

      <VStack align="flex-start" >
        <Heading as="h3" color={titleColor} fontSize="2xl" paddingLeft={1} paddingTop={1}>{title}</Heading>
        <Text fontSize="md" marginTop={0} paddingLeft={1}>{description}</Text>
        <Stack width="full" direction={['column', 'column', 'row']} spacing={4}>
          <Text color={subtitleColor} fontSize="md" marginTop={0} paddingLeft={1} marginRight="auto">
            {tags.join(' / ')}
          </Text>

          <HStack justifyContent="space-between" spacing={10} paddingX={1}>
            {url
              ? (
                <Button as="a" variant="link" href={url} boxSize={5} target="_blank" rel="noreferrer">
                  <Icon as={ HiOutlineExternalLink} color={accentColor} marginRight={2}/>
                    Live
                </Button>
                )
              : (<></>)}

           {github
             ? (
                <Button as="a" variant="link" href={github} target="_blank" rel="noreferrer">
                  <Icon as={ AiFillGithub} color={accentColor} marginRight={2} boxSize={5}/>
                  Github
                </Button>
               )
             : (<></>)}
          </HStack>
        </Stack>
      </VStack>
    </Stack>
  )
}
