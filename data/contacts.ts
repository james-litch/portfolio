import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLocationOutline } from 'react-icons/io5'

export const contacts = [
  {
    icon: FiPhone,
    href: 'tel:07850450030',
    label: '07850450030'
  },
  {
    icon: IoLocationOutline,
    label: 'Liverpool, England'
  },
  {
    icon: HiOutlineMail,
    href: 'mailto:contact@litchfield.dev',
    label: 'contact@litchfield.dev'
  },
  {
    icon: AiFillGithub,
    href: 'https://www.github.com/james-litch',
    label: 'james-litch'
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/james-litchfield-34b875154/',
    label: 'LinkedIn'
  }
]
