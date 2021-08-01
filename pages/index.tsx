import { Page } from '../Components/Page'
import { Text, Heading, Box, SimpleGrid } from '@chakra-ui/react'
import { SkillCard } from '../Components/SkillCard'
import { skills } from '../data/skills'

const IndexPage = () => (
  <Page title="About Me">

    <Box>
      <Text as="p" marginBottom={2}>I&apos;m a software developer from Liverpool, England, working in mobile and web development. I enjoy taking ideas and turning them into beautiful and responsive apps.</Text>
      <Text as="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ipsam maxime itaque maiores possimus labore vero nam. Dolorum cumque ducimus facere totam dolor exercitationem, pariatur placeat deleniti cum odio odit illo ut blanditiis voluptatum doloribus. Delectus voluptatem ipsa quis adipisci!</Text>
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
