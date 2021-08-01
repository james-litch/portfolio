import { Wrap } from '@chakra-ui/react'
import { Page } from '../Components/Page'
import { ProjectCard } from '../Components/ProjectCard'
import { projects } from '../data/projects'

const PortfolioPage = () => (
  <Page title="Portfolio">
    <Wrap flexDir={['column', 'column', 'column', 'row']} spacing={10} >
      {projects.map(({ icon, title, tags, description, iconBackground, github, url }) => (
          <ProjectCard key={title}
            icon={icon}
            title={title}
            tags={tags}
            iconBackground={iconBackground}
            description={description}
            github={github} url={url}/>
      ))}
    </Wrap>
  </Page>
)

export default PortfolioPage
