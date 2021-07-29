// components/layout.js

import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { InfoCard } from './InfoCard'
import { NavBar } from './NavBar'

export default function Layout({ children }: {children: ReactNode}) {
  const background = useColorModeValue('light.page', 'dark.page')
  return (
    <main>
      <Box padding={[5, 5, 5]}
        width={['full', 'full', 'full', 1200]}
        marginX="auto">

        <NavBar />

        <Flex
          bgColor={background}
          borderRadius="2xl"
          flexDir={['column-reverse', 'column-reverse', 'row']}>
            <InfoCard />
            {children}
        </Flex>
      </Box>
    </main>
  )
}
