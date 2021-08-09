import { Center, VStack, Icon, Text } from '@chakra-ui/react'
import { Page } from '../Components/Page'
import { FaUserSecret } from 'react-icons/fa'

const NotFoundPage = () => (
<Page title="Not Found">
    <Center alignSelf="start">
        <VStack spacing={10}>
            <Icon as={FaUserSecret} boxSize={100}/>
            <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                The page you have searched for can not be found.
            </Text>
        </VStack>
    </Center>
</Page>
)

export default NotFoundPage
