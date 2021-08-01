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
    icon: CgList,
    title: 'HourBlocks',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consectetur asperiores at eum repellendus provident, voluptatem libero incidunt cumque dignissimos!',
    tags: ['SwiftUI'],
    iconBackground: 'rgba(245, 169, 27, 0.9)'
  },
  {
    icon: IoSchoolOutline,
    title: 'Nell',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consectetur asperiores at eum repellendus provident, voluptatem libero incidunt cumque dignissimos!',
    tags: ['Flutter'],
    github: 'https://github.com/james-litch/nell_app',
    iconBackground: 'rgba(36, 32, 32, 0.9)'
  },
  {
    icon: IoSchoolOutline,
    title: 'Nell API',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consectetur asperiores at eum repellendus provident, voluptatem libero incidunt cumque dignissimos!',
    tags: ['Express', 'Node.js'],
    github: 'https://github.com/james-litch/nell_api',
    iconBackground: 'rgba(41, 40, 39, 0.9)'
  },
  {
    icon: GiJoystick,
    title: 'PWS 2020',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consectetur asperiores at eum repellendus provident, voluptatem libero incidunt cumque dignissimos!',
    tags: ['SwiftUI', 'Node.js'],
    iconBackground: 'rgba(217, 59, 69, 0.9)'
  },
  {
    icon: FaSchool,
    title: 'University Timetable',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consectetur asperiores at eum repellendus provident, voluptatem libero incidunt cumque dignissimos!',
    tags: ['Java'],
    github: 'https://github.com/james-litch/UoLTimetable',
    iconBackground: 'rgba(46, 56, 166, 0.9)'
  },
  {
    icon: IoNewspaperOutline,
    title: 'Personal Site',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consectetur asperiores at eum repellendus provident, voluptatem libero incidunt cumque dignissimos!',
    tags: ['Next.js', 'TypeScript'],
    github: 'https://github.com/james-litch/james-litch.github.io',
    iconBackground: 'rgb(38, 36, 51, 0.9)'
  }
]
