import { As, Flex, Heading, Icon, Text, useColorModeValue, VStack } from '@chakra-ui/react'
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
  const iconColor = useColorModeValue('light.accent', 'dark.accent')

  return (
    <Flex
      backgroundColor={backgroundColor}
      padding={5}
      boxShadow="md"
      justifyContent="space-evenly"
      borderRadius="2xl"
      flexDir={['column', 'column', 'column', 'row']}
      alignItems={['center', 'center', 'center', 'flex-start']}
      textAlign={['center', 'center', 'center', 'start']}>

        <Icon as={icon} boxSize={8} color={iconColor} marginBottom={5}/>

        <VStack align={['center', 'center', 'center', 'flex-start']} marginLeft={4}>
            <Heading size="md" color={titleColor}>{title}</Heading>
            <Text>{description}</Text>
        </VStack>
    </Flex>
  )
}
