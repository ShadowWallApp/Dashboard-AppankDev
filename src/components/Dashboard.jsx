"use client";

import {
  Box,
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
  useBreakpointValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ButtonGroup,
  IconButton,
  Button,
  SimpleGrid,
  Image,
  Link,
} from "@chakra-ui/react";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useState } from "react";

const Dashboard = () => {
  const [activePage, setActivePage] = useState(1);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const iconColor = useColorModeValue("gray.600", "gray.200");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const buttonTextColor = useColorModeValue("gray.800", "gray.200");

  const pageSize = 5;
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const paginatedItems = items.slice(
    (activePage - 1) * pageSize,
    activePage * pageSize
  );

  const handlePrev = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };

  const handleNext = () => {
    if (activePage < totalPages) setActivePage(activePage + 1);
  };

  const handlePageChange = (pageNum) => {
    setActivePage(pageNum);
  };

  return (
    <Flex
      mx="auto"
      direction="column"
      mt="6"
      p="4" // Tambah padding untuk ruang yang lebih baik
      maxW="100%"
      minH="auto" // Hapus minH="500px" untuk fleksibilitas
      h="100vh" // Gunakan tinggi penuh viewport
      overflowY="auto" // Pastikan scroll vertikal aktif
      pb="20" // Tambahkan padding bawah agar footer terlihat
      transition="all 0.3s ease"
    >
      {/* Breadcrumb hanya tampil di desktop */}
      {!isMobile && (
        <Breadcrumb
          separator={
            <Box as="span" color="gray.600" fontWeight="bold">
              /
            </Box>
          }
          mb={4}
        >
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="gray.600">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
   <Box mb={4} p={2}>
        {/* Alert */}
        <Alert
  status="info"
  maxHeight="auto"
  borderRadius="md"
  flexDirection="column" // Mengatur tata letak vertikal
  alignItems="flex-start" // Menyelaraskan konten ke kiri
  p={4} // Menambahkan padding untuk estetika
>
  <Flex alignItems="center" mb={2}> {/* Membungkus AlertIcon dan AlertTitle */}
    <AlertIcon boxSize={5} color={iconColor} />
    <AlertTitle color={iconColor} fontSize="lg">
      Information:
    </AlertTitle>
  </Flex>
  <AlertDescription color={iconColor} mt={2}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </AlertDescription>
</Alert>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        {/* Item 1 */}
        <Box
          textAlign="left"
          p={6}
          bg={bgColor}
          boxShadow="md"
          borderRadius="xl"
          mb={4}
          _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
        >
          <Image
            src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/google/google.svg"
            alt="Google"
            boxSize="80px"
            mx="inherit"
            mb={4}
          />
          <Text fontSize="xl" fontWeight="bold" color="teal.600">
           Client 0Auth2
          </Text>
          <Text mt={2} fontSize="sm" color="gray.500">
          Google 0Auth2 Sebagai Authentikasi User 
          </Text>
        </Box>

        {/* Item 2 */}
        <Box
         textAlign="left"
         p={6}
         bg={bgColor}
         boxShadow="md"
         borderRadius="xl"
         mb={4}
         _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
        >
          <Image
            src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/bc82276a7ea47630ae52edd6137e58da18cfedce/public/logos/technology/supabase/supabase.svg"
            alt="Supabase"
            boxSize="80px"
            mx="inherit"
            mb={4}
          />
          <Text fontSize="xl" fontWeight="bold" color="teal.600">
          Supabase
          </Text>
          <Text mt={2} fontSize="sm" color="gray.500">
             Authentikasi User dibuat menggunakan Supabase
          </Text>
        </Box>

        {/* Item 3 */}
        <Box
          textAlign="left"
          p={6}
          bg={bgColor}
          boxShadow="md"
          borderRadius="xl"
          mb={4}
          _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
        >
          <Image
            src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/bc82276a7ea47630ae52edd6137e58da18cfedce/public/logos/technology/chakraui/chakraui.svg"
            alt="Chakra UI"
            boxSize="80px"
            mx="inherit"
            mb={4}
          />
          <Text fontSize="xl" fontWeight="bold" color="teal.600">
            Chakra Ui
          </Text>
          <Text mt={2} fontSize="sm" color="gray.500">
            Stayle ini dibuat menggunakan Chakra UI V2.10.7
          </Text>
        </Box>
      </SimpleGrid>

      <Box height="10px" />
      <Box mb={4} p={2}>
        <Text fontSize="2xl" fontWeight="bold" color={textColor}>
          Tabel Data
        </Text>
      </Box>

      <Box
       bg={bgColor}
       color={textColor}
       p="20px"
       borderRadius="lg"
       boxShadow="sm"
       border="1px solid"
       borderColor={borderColor}
       minH="300px"
       maxW="auto"
       maxHeight="400px" // Batasi tinggi maksimum Box
       overflowY="auto" // Aktifkan scroll vertikal jika konten melebihi maxHeight
       transition="all 0.3s ease"
      >
        <Table size="sm" variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th color={textColor}>Product</Th>
              <Th color={textColor}>Category</Th>
              <Th textAlign="end" color={textColor}>
                Price
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {paginatedItems.map((item) => (
              <Tr key={item.id}>
                <Td color={textColor}>{item.name}</Td>
                <Td color={textColor}>{item.category}</Td>
                <Td color={textColor} textAlign="end">
                  {item.price}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {/* Pagination Controls */}
        <ButtonGroup
          color={iconColor}
          size="sm" // Ubah dari md ke sm untuk tombol lebih kecil
    spacing={1} // Kurangi jarak antar tombol
          mt={4}
          p={2}
          justifyContent="center"
          display="inherit"
        >
          <IconButton
            icon={<LuChevronLeft />}
            onClick={handlePrev}
            bg="blue.600"
            isDisabled={activePage === 1}
            aria-label="Previous page"
            variant="ghost"
          />
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNum) => (
              <Button
                key={pageNum}
                variant={pageNum === activePage ? "solid" : "ghost"}
                onClick={() => handlePageChange(pageNum)}
                aria-label={`Page ${pageNum}`}
                color={pageNum === activePage ? "white" : buttonTextColor}
                bg={pageNum === activePage ? "blue.500" : "transparent"}
                _hover={{
                  bg: pageNum === activePage ? "blue.600" : "gray.100",
                }}
              >
                {pageNum}
              </Button>
            )
          )}
          <IconButton
            icon={<LuChevronRight />}
            onClick={handleNext}
            color={iconColor}
            isDisabled={activePage === totalPages}
            aria-label="Next page"
            bg="blue.600"
            variant="ghost"
          />
        </ButtonGroup>
      </Box>

      <Box mb={4} p={2}>
  <Text
    fontSize="xs"
    fontStyle="italic"
    color="gray.600"
    textAlign="center"
  >
    © 2025 All rights reserved .by{" "}
    <Link
      href="https://appank-dev.vercel.app/" // Ganti dengan URL yang diinginkan
      color="blue.500"
      _hover={{ textDecoration: "underline", color: "blue.600" }}
      isExternal // Tambahkan ini jika link eksternal
    >
      AppankDev
    </Link>
  </Text>
</Box>
    </Flex>
  );
};

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
  { id: 6, name: "Lusifer", category: "Dsds", price: 999.93 },
  { id: 7, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 8, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 9, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 10, name: "Headphones", category: "Accessories", price: 199.99 },
  { id: 11, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 12, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 13, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 14, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 15, name: "Headphones", category: "Accessories", price: 199.99 },
  { id: 16, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 17, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 18, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 19, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 20, name: "Headphones", category: "Accessories", price: 199.99 },
  { id: 21, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 22, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 23, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 24, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 25, name: "Headphones", category: "Accessories", price: 199.99 },
  { id: 26, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 27, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 28, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 29, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 30, name: "Headphones", category: "Accessories", price: 199.99 },
];

export default Dashboard;