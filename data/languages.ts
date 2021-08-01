import { As } from '@chakra-ui/react'
import { BiGitBranch } from 'react-icons/bi'
import { GrGraphQl } from 'react-icons/gr'
import { RiGatsbyLine, RiHtml5Line, RiCss3Fill } from 'react-icons/ri'
import { SiCsharp, SiDart, SiFlutter, SiJava, SiJavascript, SiNextDotJs, SiNodeDotJs, SiPhp, SiPython, SiReact, SiSwift, SiTypescript } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'

export type LanguageItem = {
    icon: As<any>;
    label: string;
}

export const languages = [
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiReact, label: 'React' },
  { icon: SiNextDotJs, label: 'Next.js' },
  { icon: RiGatsbyLine, label: 'Gatsby' },
  { icon: BiGitBranch, label: 'Git' },
  { icon: VscGithub, label: 'GitHub' },
  { icon: SiJava, label: 'Java' },
  { icon: SiNodeDotJs, label: 'Node.js' },
  { icon: SiSwift, label: 'Swift' },
  { icon: RiHtml5Line, label: 'HTML 5' },
  { icon: SiPhp, label: 'PHP' },
  { icon: RiCss3Fill, label: 'CSS 3' },
  { icon: SiPython, label: 'Python' },
  { icon: SiFlutter, label: 'Flutter' },
  { icon: SiDart, label: 'Dart' },
  { icon: SiCsharp, label: 'C#' },
  { icon: GrGraphQl, label: 'GraphQL' }

]
