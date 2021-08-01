import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import { navItems } from '../data/navigation'

const Header = ({ onClose }:{onClose: ()=> void}) => {
  const accentColor = useColorModeValue('light.accent', 'dark.accent')
  const icon = useColorModeValue(<BiSun />, <BiMoon />)
  const { toggleColorMode } = useColorMode()
  const accentShadow = useColorModeValue(
    '0 0 0 0.2rem rgb(48 76 253 / 25%)',
    '0 0 0 0.2em rgb(13 134 255 / 25%)'
  )
  return (
    <DrawerHeader display="flex" flexDir="row" justifyContent="space-between">
       <IconButton
        _selected={{ boxShadow: accentShadow }}
        _focus={{ boxShadow: accentShadow }}
        _active={{ boxShadow: accentShadow }}
        _hover={{ boxShadow: accentShadow }}
        padding={4}
        fontSize={30}
        onClick={toggleColorMode}
        aria-label="Dark Mode Toggle"
        size="2xl"
        icon={icon}
        borderRadius="full" />

      <IconButton
        _selected={{ boxShadow: accentShadow }}
        _focus={{ boxShadow: accentShadow }}
        _active={{ boxShadow: accentShadow }}
        _hover={{ boxShadow: accentShadow }}
        padding={4}
        fontSize={30}
        backgroundColor={accentColor}
        icon={<CgClose/>}
        aria-label="Close Menu"
        size="2xl"
        borderRadius="full"
        color="white"
        onClick={() => onClose()}/>
    </DrawerHeader>
  )
}
/**
 * BurgerMenu Library Component
 */
export const BurgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const accentColor = useColorModeValue('light.accent', 'dark.accent')
  const backgroundColor = useColorModeValue('light.background', 'dark.background')
  const accentShadow = useColorModeValue(
    '0 0 0 0.2rem rgb(48 76 253 / 25%)',
    '0 0 0 0.2em rgb(13 134 255 / 25%)'
  )
  useEffect(() => { if (isOpen) onClose() }, [router.asPath])

  return (
    <>
      <IconButton
        zIndex={100}
        _selected={{ boxShadow: accentShadow }}
        _focus={{ boxShadow: accentShadow }}
        _active={{ boxShadow: accentShadow }}
        _hover={{ boxShadow: accentShadow }}
        borderRadius="full"
        color="white"
        backgroundColor={accentColor}
        icon={<CgMenuRightAlt/>}
        aria-label="Open Menu"
        onClick={() => onOpen()}
        display={['block', 'none']}
        position="fixed"
        size="3xl"
        padding={4}
        fontSize={30}
        top={3}
        right={3}/>

       <Drawer onClose={onClose} isOpen={isOpen} size="full" autoFocus={false}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={backgroundColor}>
          <Header onClose={() => onClose()}/>
          <DrawerBody display="flex" flexDir="column" justifyContent="center">
           {navItems.map(({ href, label }) => (
             <Link href={href} passHref key={href}>
              <Button as="a"
                isActive={router.pathname === href}
                variant="ghost"
                textAlign="center"
                fontWeight="bold"
                size="lg"
                width='full'
                padding={10}
                fontSize="3xl"
                _active={{ color: accentColor }}>
                {label}
              </Button>
              </Link>
           ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
