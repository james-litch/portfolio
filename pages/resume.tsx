import React from 'react'
import { Page } from '../Components/Page'
import { Timeline, TimelineItem } from '../Components/Timeline'
import { BsBriefcase } from 'react-icons/bs'
import { RiGatsbyLine, RiHtml5Line, RiCss3Fill } from 'react-icons/ri'
import { IoSchoolOutline } from 'react-icons/io5'
import { VscGithub } from 'react-icons/vsc'
import { BiGitBranch } from 'react-icons/bi'
import { GrGraphQl } from 'react-icons/gr'
import { SiReact, SiNextDotJs, SiNodeDotJs, SiJavascript, SiTypescript, SiFlutter, SiDart, SiJava, SiPython, SiSwift, SiPhp, SiCsharp } from 'react-icons/si'
import { Box, Heading, HStack, Icon, Stack, useColorModeValue } from '@chakra-ui/react'
import { LanguagesCard } from '../Components/LanguagesCard'

const jobs: TimelineItem[] = [
  { label: 'Dexerto (Mid-level Web Developer)', range: 'January 2021 - Present', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' },
  { label: 'Eledev Digital (Full-stack Developer)', range: 'May 2020 - January 2021', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' },
  { label: 'Kmatic (Junior Devloper)', range: 'May 2020 - July 2020', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' }
]

const schools: TimelineItem[] = [
  { label: 'University of Liverpool', range: 'September 2017 - June 2020', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' },
  { label: 'Carmel College', range: 'September 2015 - June 2017', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' },
  { label: 'Lord Derby Academy', range: 'September 2011 - June 2015', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' }
]

const languages = [
  { icon: SiReact, label: 'React' },
  { icon: SiNextDotJs, label: 'Next.js' },
  { icon: RiGatsbyLine, label: 'Gatsby' },
  { icon: SiNodeDotJs, label: 'Node.js' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiFlutter, label: 'Flutter' },
  { icon: SiDart, label: 'Dart' },
  { icon: BiGitBranch, label: 'Git' },
  { icon: VscGithub, label: 'GitHub' },
  { icon: SiJava, label: 'Java' },
  { icon: RiHtml5Line, label: 'HTML 5' },
  { icon: RiCss3Fill, label: 'CSS 3' },
  { icon: SiPython, label: 'Python' },
  { icon: SiSwift, label: 'Swift' },
  { icon: SiPhp, label: 'PHP' },
  { icon: GrGraphQl, label: 'GraphQL' },
  { icon: SiCsharp, label: 'C#' }

]

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
                <Timeline items={schools}/>
            </Box>
        </Stack>

        <Heading as="h2" color={titleColor} size="lg">
            My Skills
        </Heading>

        <LanguagesCard items={languages}/>
    </Page>
  )
}

export default ResumePage
