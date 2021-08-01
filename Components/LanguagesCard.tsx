import { HStack, Icon, useColorModeValue, Text, Flex } from '@chakra-ui/react'
import { languages } from '../data/languages'

/**
 * LanguagesCard Library Component
 */
export const LanguagesCard = () => {
  const cardColor = useColorModeValue('light.card', 'dark.card')
  const accentColor = useColorModeValue('light.accent', 'dark.accent')
  return (
    <Flex
        borderRadius="2xl"
        width="full"
        flexDir="row"
        flexWrap="wrap"
        justifyContent="center"
        height='fit-content'
        backgroundColor={cardColor}
        padding={2}>
        {languages.map(({ icon, label }) => (
            <HStack
                marginX={2}
                marginY={2}
                key={label}
                width="fit-content"
                backgroundColor={accentColor}
                paddingX={6}
                paddingY={3}
                borderRadius="xl">
                <Icon as={icon} boxSize={6} color="white"/>
                <Text fontSize="lg"fontWeight="bold" color="white">{label}</Text>
            </HStack>
        ))}
    </Flex>
  )
}
