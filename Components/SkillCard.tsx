import { As, Flex, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Card } from './Card'

export interface SkillCardProps {
   icon?: As<any>;
   title: string;
   description: string;
}

/**
 * SkillCard Library Component
 */
export const SkillCard = ({ icon, title, description }: SkillCardProps) => {
  const titleColor = useColorModeValue('light.title', 'dark.title')
  const backgroundColor = useColorModeValue('light.card', 'dark.card')
  const borderColor = useColorModeValue('light.card', 'dark.card')
  const iconColor = useColorModeValue('light.accent', 'dark.accent')
  return (
<Card
    backgroundColor={backgroundColor}
    borderStyle="solid"
    borderColor={borderColor}
    padding={5}
    boxShadow="md"
    justifyContent="space-evenly">
    <Flex
        flexDir={['column', 'column', 'row']}
        alignItems={['center', 'center', 'flex-start']}
        textAlign={['center', 'center', 'start']}>

        <Icon as={icon} boxSize={8} color={iconColor} marginBottom={5}/>

        <Flex flexDir="column" marginLeft={4}>
            <Heading size="md" color={titleColor}>{title}</Heading>
            <Text>{description}</Text>
        </Flex>

    </Flex>
</Card>
  )
}
