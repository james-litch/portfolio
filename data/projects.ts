import { CgList } from 'react-icons/cg'
import { IoNewspaperOutline, IoSchoolOutline } from 'react-icons/io5'
import { GiBoxingRing, GiJoystick } from 'react-icons/gi'
import { As } from '@chakra-ui/react'
import { FaSchool } from 'react-icons/fa'
import { SiShopify } from 'react-icons/si'

export type Project = {
    icon: As<any>;
    title: string;
    tags: string[];
    iconBackground: string;
    description: string;
    url?: string;
    github?: string;
}

export const projects: Project[] = [
  {
    icon: IoNewspaperOutline,
    title: 'Personal Site',
    description: 'A personal portfolio site created with Next.js and ChakraUI, with built in automatic dark mode.',
    tags: ['Next.js', 'TypeScript'],
    github: 'https://github.com/james-litch/portfolio',
    url: 'https://www.litchfield.dev',
    iconBackground: 'rgb(38, 36, 51, 0.9)'
  },
  {
    icon: CgList,
    title: 'HourBlocks',
    description: 'A native IOS/MacOS day planner, which recieved over 100,000 downloads as well as being \'App of the Day\' in over 150+ countries.',
    tags: ['SwiftUI'],
    url: 'https://apps.apple.com/gb/app/hour-blocks-day-planner/id1456275153',
    iconBackground: 'rgba(245, 169, 27, 0.9)'
  },
  {
    icon: IoSchoolOutline,
    title: 'Nell',
    description: 'A cross platform lecture companion built to improve the lecture experiance for both students and lecturers.',
    tags: ['Flutter', 'GraphQL', 'Node.js'],
    github: 'https://github.com/james-litch/nell_app',
    iconBackground: 'rgba(36, 32, 32, 0.9)'
  },
  {
    icon: GiBoxingRing,
    title: 'PWS 2021',
    description: 'A native IOS simulator app that allows you to manage your own professional wrestling roster.',
    tags: ['SwiftUI', 'Node.js'],
    url: 'https://apps.apple.com/us/app/pro-wrestling-simulator-2021/id1513020607',
    iconBackground: 'rgba(217, 59, 69, 0.9)'
  },
  {
    icon: SiShopify,
    title: 'Flutter E-commerce App',
    description: 'A cross platform e-commerce app, using the Shopify GraphQL API, developed for an online clothing company.',
    tags: ['Flutter', 'GraphQL', 'Shopify'],
    iconBackground: 'rgba(232, 135, 180, 1)'
  },
  {
    icon: FaSchool,
    title: 'Android University Timetable',
    description: 'An Android timetable app created for the univerity\'s group software project. This improved on the existing app by adding attendance registering and location details.',
    tags: ['Java'],
    github: 'https://github.com/james-litch/UoLTimetable',
    iconBackground: 'rgba(46, 56, 166, 0.9)'
  },
  {
    icon: GiJoystick,
    title: 'Cartpole AI Agent',
    description: 'An artificial intelligence agent, using deep reinforcement learning, created to play CartPole.',
    tags: ['Python'],
    github: 'https://github.com/james-litch/CartPole',
    iconBackground: 'rgba(43, 103, 105, 1)'
  }
]
