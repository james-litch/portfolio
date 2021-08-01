import { Button, HStack, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BiSun, BiMoon } from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/dist/client/router'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/portfolio', label: 'Portfolio' }
]

/**
 * NavBar Library Component
 */
export const NavBar = () => {
  const { toggleColorMode } = useColorMode()
  const router = useRouter()
  const accentColor = useColorModeValue('light.accent', 'dark.accent')
  const icon = useColorModeValue(<BiSun />, <BiMoon />)

  return (
    <HStack width="fit-content" marginLeft="auto" padding={4} paddingRight={1}>
      {menuItems.map(({ href, label }) => (
        <Link key={href} href={href} >
          <Button
            as="a"
            isActive={router.pathname === href}
            _active={{ backgroundColor: accentColor, color: 'white' }}>
            {label}
          </Button>
        </Link>
      ))}
      <IconButton onClick={toggleColorMode} aria-label="Dark Mode Toggle" icon={icon}/>
    </HStack>
  )
}
