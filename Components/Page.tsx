
import { Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import React, { ReactNode } from 'react'

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
        marginBottom={4}
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
  const routeTitle = `${title} - James Litchfield`

  return (
    <SimpleGrid padding={6} gap={8} width="full">
        <PageHeading title={title}/>

        <Head>
            <title>{routeTitle}</title>
            <meta property="og:title" content={routeTitle} key="title" />
        </Head>

        {children}
    </SimpleGrid>

  )
}
