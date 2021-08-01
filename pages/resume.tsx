import { Box, Heading, HStack, Icon, Stack, useColorModeValue } from '@chakra-ui/react'
import { BsBriefcase } from 'react-icons/bs'
import { IoSchoolOutline } from 'react-icons/io5'
import { LanguagesCard } from '../Components/LanguagesCard'
import { Page } from '../Components/Page'
import { Timeline } from '../Components/Timeline'
import { education } from '../data/education'
import { jobs } from '../data/jobs'

const ResumePage = () => {
  const titleColor = useColorModeValue('light.display', 'dark.display')
  const accentColor = useColorModeValue('light.accent', 'dark.accent')
  return (
    <Page title="Resume">
        <Stack direction={['column', 'column', 'column', 'row']}>
            <Box>
                <HStack justifyItems="flex-start" spacing={4} marginBottom={10}>
                    <Icon as={BsBriefcase} color={accentColor} boxSize={8}/>
                    <Heading as="h2" color={titleColor} size="lg" >
                        Work Experience
                    </Heading>
                </HStack>
                <Timeline items={jobs}/>
            </Box>
            <Box>
                <HStack justifyItems="flex-start" spacing={4} marginBottom={10}>
                    <Icon as={IoSchoolOutline} color={accentColor} boxSize={8}/>
                    <Heading as="h2" color={titleColor} size="lg">
                        Education
                    </Heading>
                </HStack>
                <Timeline items={education}/>
            </Box>
        </Stack>

        <Heading as="h2" color={titleColor} size="lg">My Skills</Heading>
        <LanguagesCard />
    </Page>
  )
}

export default ResumePage
