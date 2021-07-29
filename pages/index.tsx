import { Page } from '../Components/Page'
import { Text, Heading, Box, SimpleGrid } from '@chakra-ui/react'
import { SkillCard } from '../Components/SkillCard'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { CgWebsite } from 'react-icons/cg'
import { BiServer, BiCog } from 'react-icons/bi'

const skills = [
  { icon: IoPhonePortraitOutline, title: 'Mobile Apps', description: 'Professional development of applications for iOS and Android.' },
  { icon: CgWebsite, title: 'Web Development', description: 'High-quality development of sites at the professional level.' },
  { icon: BiServer, title: 'API Development', description: 'Professional development of applications for iOS and Android.' },
  { icon: BiCog, title: 'GitHub Integrations', description: 'High-quality development of sites at the professional level.' }
]

const IndexPage = () => (
  <Page title="About Me">

    <Box>
      <Text as="p" marginBottom={2}>I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</Text>
      <Text as="p">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</Text>
    </Box>

    <Heading as="h2" size="lg">
      What I&apos;m doing now
    </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={8}>
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
