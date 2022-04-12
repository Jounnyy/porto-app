import { Text, Image, Flex, Box } from "@chakra-ui/react"

const ShowCase = ({showcase, profile}) => {
  return (
    <Flex flexDirection="column">
    {showcase.map((gallery, index) => {
      return(
        <Flex key={index} flexDirection="row" justifyContent="endspace-between">
          <Flex flexDirection="column" justifyContent="center" w="50%" pl="12">
            <Text>{gallery.title}</Text>
            <Text>{gallery.description}</Text>
          </Flex>
          <Image src={gallery.image} alt="showcase" width={400} height="auto" />
        </Flex>
      )
    })}
    </Flex>
  )
}

export default ShowCase