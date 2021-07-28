import { Page } from '../Components/Page'
import { Text, Heading, Box } from '@chakra-ui/react'

const IndexPage = () => (
  <Page title="About Me">

    <Box marginBottom={8}>
      <Text as="p" marginBottom={2}>I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</Text>
      <Text as="p">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</Text>
    </Box>

    <Heading as="h2" size="lg">
      What I&apos;m doing now
    </Heading>

  </Page>
)

export default IndexPage
