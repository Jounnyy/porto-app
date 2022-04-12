import { Container, Button ,SimpleGrid, Text, Box, Image } from "@chakra-ui/react"

const LandingPage = ({profile}) => {
    return(
        <Container isFullWidth>
        <SimpleGrid columns={1} spacing={10}>
            {profile.map((user, index) => {
                return(
                <Box key={index} borderRadius="lg" display="flex" flexDirection="column" mt="2" py="4" alignItems="center" justifyContent="center" boxShadow="dark-lg">
                    <Image src={user.image} alt="user photo" width={200} height="auto" borderRadius="full" boxSize="150px" mb="4"/>
                    <Text fontSize={"md"}>{user.name}</Text>
                    <Text fontSize={"sm"}>{user.job}</Text>
                    <Text fontSize={"sm"}>{user.greeting}</Text>
                </Box>
)
})}
        </SimpleGrid>
        <Button isFullWidth mt="8" colorScheme="blue" boxShadow="dark-lg">Lihat Showcase Saya</Button>
        </Container>
    )
}

export default LandingPage