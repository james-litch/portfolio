/* eslint-disable quotes */
import { Box, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'

export interface TimelineProps {
    items: TimelineItem[]
}

export type TimelineItem = {
    label: string;
    range: string;
    description: string;
}

/**
 * Timeline Library Component
 */
export const Timeline = ({ items }: TimelineProps) => {
  const titleColor = useColorModeValue('light.display', 'dark.display')
  const accentColor = useColorModeValue('light.accent', 'dark.accent')
  const dateColor = useColorModeValue('light.label', 'dark.label')
  const accentShadow = useColorModeValue(
    '0 0 0 0.2rem rgb(48 76 253 / 25%)',
    '0 0 0 0.2em rgb(13 134 255 / 25%)'
  )
  return (
  <VStack marginLeft={4} paddingRight={4}>
    {items.map(({ label, range, description }) => (
      <Box key={label}
        position="relative"
        borderLeftWidth={1}
        borderLeftStyle="solid"
        _last={{ borderLeftStyle: 'none', marginBottom: "-40px" }}>

          <VStack
          top={-4}
          alignItems="flex-start"
          spacing={2}
          marginTop={0}
          paddingLeft={4}
          paddingBottom={[4, 8]}
          position="relative"
          _before={{
            content: `""`,
            borderRadius: 'full',
            width: 3,
            height: 3,
            position: 'absolute',
            backgroundColor: accentColor,
            boxShadow: accentShadow,
            top: 1,
            left: '-7px'
          }}>
            <Heading as="h3" color={titleColor} size="md" marginTop={0}>{label}</Heading>
            <Text color={dateColor}>{range}</Text>
            <Text>{description}</Text>
          </VStack>
      </Box>
    ))}
  </VStack>)
}
