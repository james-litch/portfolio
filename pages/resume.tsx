import React from 'react'
import { Page } from '../Components/Page'
import { Timeline, TimelineItem } from '../Components/Timeline'
import { CgBriefcase } from 'react-icons/cg'
import { IoSchoolOutline } from 'react-icons/io5'
import { Heading, HStack, Icon, useColorModeValue } from '@chakra-ui/react'

const jobs: TimelineItem[] = [
  { label: 'Dexerto (Mid-level Web Developer)', range: 'January 2021 - Present', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' },
  { label: 'Eledev Digital (Full-stack Developer)', range: 'April 2020 - January 2021', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' },
  { label: 'Kmatic (Junior Devloper)', range: 'March 2020 - May 2020', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' }
]

const schools: TimelineItem[] = [
  { label: 'University of Liverpool', range: 'September 2017 - June 2020', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' },
  { label: 'Carmel College', range: 'September 2015 - June 2017', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' }
]

const ResumePage = () => {
  const titleColor = useColorModeValue('light.display', 'dark.display')
  const accentColor = useColorModeValue('light.accent', 'dark.accent')
  return (
    <Page title="Resume">
        <HStack justifyItems="flex-start">
            <Icon as={CgBriefcase} color={accentColor} boxSize={10}/>
            <Heading as="h2" color={titleColor} size="lg">Work Experience</Heading>
        </HStack>
        <Timeline items={jobs}/>

        <HStack justifyItems="flex-start">
            <Icon as={IoSchoolOutline} color={accentColor} boxSize={10}/>
            <Heading as="h2" color={titleColor} size="lg">Education</Heading>
        </HStack>
        <Timeline items={schools}/>
    </Page>
  )
}

export default ResumePage
