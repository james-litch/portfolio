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
  { icon: SiJavascript, label: 'Javascript' },
  { icon: SiPhp, label: 'PHP' },
  { icon: SiTypescript, label: 'Typescript' },
  { icon: BiGitBranch, label: 'Git' },
  { icon: VscGithub, label: 'GitHub' },
  { icon: SiNextDotJs, label: 'Next' },
  { icon: SiReact, label: 'React' },
  { icon: RiGatsbyLine, label: 'Gatsby' },
  { icon: SiNodeDotJs, label: 'Node' },
  { icon: GrGraphQl, label: 'GraphQL' },
  { icon: SiSwift, label: 'Swift' },
  { icon: RiHtml5Line, label: 'HTML 5' },
  { icon: RiCss3Fill, label: 'CSS 3' },
  { icon: SiPython, label: 'Python' },
  { icon: SiFlutter, label: 'Flutter' },
  { icon: SiDart, label: 'Dart' },
  { icon: SiCsharp, label: 'C#' },
  { icon: SiJava, label: 'Java' }

]
