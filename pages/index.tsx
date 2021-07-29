import { Page } from '../Components/Page'
import { Text, Heading, Box, SimpleGrid } from '@chakra-ui/react'
import { SkillCard } from '../Components/SkillCard'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { CgWebsite } from 'react-icons/cg'
import { BiServer, BiCog } from 'react-icons/bi'

const skills = [
  { icon: IoPhonePortraitOutline, title: 'Mobile Apps', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' },
  { icon: CgWebsite, title: 'Web Development', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' },
  { icon: BiServer, title: 'API Development', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' },
  { icon: BiCog, title: 'GitHub Integrations', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' }
]

const IndexPage = () => (
  <Page title="About Me">

    <Box>
      <Text as="p" marginBottom={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas doloribus nisi placeat. Illum nesciunt nemo ratione, temporibus voluptatem non voluptatibus!</Text>
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

    <Heading as="h2" size="lg" marginBottom={6}>
      Testimonials
    </Heading>

  </Page>
)

export default IndexPage
