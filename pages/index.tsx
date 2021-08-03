import { Page } from '../Components/Page'
import { Text, Heading, Box, SimpleGrid } from '@chakra-ui/react'
import { SkillCard } from '../Components/SkillCard'
import { skills } from '../data/skills'

const IndexPage = () => (
  <Page title="About Me">

    <Box>
      <Text as="p" marginBottom={2}>I&apos;m a software engineer from Liverpool, England, working in mobile and web development. I enjoy taking ideas and turning them into beautiful and responsive apps.</Text>
      <Text as="p">My job is to build responsive applications that are both eye catching and user-friendly. I&apos;m also a team orientated and friendly individual, with knowledge in a vast amount of fields, always willing to learn and try new
things to the best of my ability.</Text>
    </Box>

    <Heading as="h2" size="lg">
      What I&apos;m doing now
    </Heading>

    <SimpleGrid columns={[1, 1, 1, 2]} gap={8}>
      {skills.map(({ icon, title, description }) => (
        <SkillCard icon={icon} title={title} description={description} key={title}/>
      ))}
    </SimpleGrid>

  </Page>
)

export default IndexPage
