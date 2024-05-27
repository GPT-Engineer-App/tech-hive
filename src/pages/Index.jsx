import { Box, Container, VStack, Text, Image, Grid, GridItem, Link, Flex, Heading, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex gap={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact Us</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={10} textAlign="center">
        <Heading size="xl" mb={4}>Featured Product</Heading>
        <Image src="/images/featured-product.jpg" alt="Featured Product" boxSize="300px" mx="auto" />
        <Text fontSize="lg" mt={4}>Discover the latest in electronics with our featured product of the month!</Text>
        <Button colorScheme="blue" mt={4}>Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Heading size="lg" mb={6} textAlign="center">Our Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          <GridItem bg="white" boxShadow="md" p={4} borderRadius="md">
            <Image src="/images/product1.jpg" alt="Product 1" boxSize="200px" mx="auto" />
            <Text mt={2} fontWeight="bold">Product 1</Text>
            <Text>$199.99</Text>
          </GridItem>
          <GridItem bg="white" boxShadow="md" p={4} borderRadius="md">
            <Image src="/images/product2.jpg" alt="Product 2" boxSize="200px" mx="auto" />
            <Text mt={2} fontWeight="bold">Product 2</Text>
            <Text>$299.99</Text>
          </GridItem>
          <GridItem bg="white" boxShadow="md" p={4} borderRadius="md">
            <Image src="/images/product3.jpg" alt="Product 3" boxSize="200px" mx="auto" />
            <Text mt={2} fontWeight="bold">Product 3</Text>
            <Text>$399.99</Text>
          </GridItem>
          <GridItem bg="white" boxShadow="md" p={4} borderRadius="md">
            <Image src="/images/product4.jpg" alt="Product 4" boxSize="200px" mx="auto" />
            <Text mt={2} fontWeight="bold">Product 4</Text>
            <Text>$499.99</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={6} mt={10}>
        <Flex justifyContent="space-between" alignItems="center" px={4}>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <Flex gap={4}>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaInstagram /></Link>
          </Flex>
        </Flex>
        <Flex justifyContent="center" mt={4} gap={4}>
          <Link href="#" color="white">Terms of Service</Link>
          <Link href="#" color="white">Privacy Policy</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;