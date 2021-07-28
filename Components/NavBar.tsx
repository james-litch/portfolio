import { Button, Flex, HStack, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'

/**
 * NavBar Library Component
 */
export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
<Flex padding={1} justifyContent="flex-end" height="10vh">
    <HStack>
    <Link href="/"><Button as="a">About</Button></Link>
    <Link href="/resume"><Button as="a">Resume</Button></Link>
    <Link href="/portfolio"><Button as="a">Portfolio</Button></Link>
    <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
    </HStack>
</Flex>
  )
}
