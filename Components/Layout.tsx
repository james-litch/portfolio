// components/layout.js

import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { BurgerMenu } from './BurgerMenu'
import { InfoCard } from './InfoCard'
import { NavBar } from './NavBar'

export default function Layout({ children }: {children: ReactNode}) {
  const background = useColorModeValue('light.page', 'dark.page')
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio Website"></meta>
      </Head>
      <main>
        <Box padding={[5, 5, 5]}
          width={['100vw', '100vw', '100vw', 1200]}
          marginX="auto">

          <NavBar />
          <BurgerMenu />

          <Flex
            bgColor={background}
            borderRadius="2xl"
            flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row']}>
              <InfoCard />
              {children}
          </Flex>
        </Box>
      </main>
    </>
  )
}
