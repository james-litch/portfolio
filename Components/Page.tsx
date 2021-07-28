
import React, { ReactNode } from 'react'
import { NavBar } from './NavBar'
import { Box, Heading, HStack, Flex, useColorModeValue } from '@chakra-ui/react'
import { InfoCard } from './InfoCard'
import Head from 'next/head'

export interface PageProps {
    children: ReactNode,
    title: string
}

const PageHeading = ({ title }: {title: string}) => {
  const titleColor = useColorModeValue('light.display', 'dark.display')
  const titleBorderColor = useColorModeValue('light.accent', 'dark.accent')

  return (
    <Heading
        as="h1"
        position="relative"
        height="fit-content"
        color={titleColor}
        marginBottom={12}
        _after={{
          content: '""',
          position: 'absolute',
          backgroundColor: titleBorderColor,
          width: 16,
          height: 2,
          borderRadius: 'full',
          top: 'calc(100% + 10px)',
          left: 0
        }}>
        {title}
    </Heading>
  )
}

/**
 * Page Library Component
 */
export const Page = ({ children, title }: PageProps) => {
  const background = useColorModeValue('light.100', 'dark.100')
  const routeTitle = `${title} - James Litchfield`

  return (
    <Box px={20}>
        <Head>
            <title>{routeTitle}</title>
            <meta property="og:title" content={routeTitle} key="title" />
        </Head>

        <NavBar/>

        <HStack
            spacing={3}
            justifyContent="center"
            bgColor={background}
            borderRadius="2xl"
            borderRadiusTopLeft="0">

            <InfoCard />

            <Flex
                height="80vh"
                padding={6}
                spacing={10}
                flexDir="column"
                overflowY="scroll">
                <PageHeading title={title}/>
                {children}
            </Flex>
        </HStack>
    </Box>
  )
}
