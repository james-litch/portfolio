import { CgList } from 'react-icons/cg'
import { IoNewspaperOutline, IoSchoolOutline } from 'react-icons/io5'
import { GiJoystick } from 'react-icons/gi'
import { As } from '@chakra-ui/react'
import { FaSchool } from 'react-icons/fa'

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
    icon: GiJoystick,
    title: 'PWS 2021',
    description: 'A native IOS simulator app that allows you to manage your own professional wrestling roster.',
    tags: ['SwiftUI', 'Node.js'],
    iconBackground: 'rgba(217, 59, 69, 0.9)'
  },
  {
    icon: FaSchool,
    title: 'University Timetable',
    description: 'An Android timetable app created for the univerity\'s group software project. This improved on the existing app by adding attendance registering and location details.',
    tags: ['Java'],
    github: 'https://github.com/james-litch/UoLTimetable',
    iconBackground: 'rgba(46, 56, 166, 0.9)'
  }
]
