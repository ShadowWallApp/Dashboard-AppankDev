import {
    Box,
    Button,
    Center,
    Flex,
    Input,
    Text,
    useToast,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { supabase } from "../supabaseClient";
  
  const ResetPasswordRequest = () => {
    const [email, setEmail] = useState("");
    const toast = useToast();

     // Warna yang responsif terhadap dark mode
     const textColor = useColorModeValue("gray.600", "white");
     const inputBg = useColorModeValue("gray.50", "gray.700");
  
    const handleResetPassword = async () => {
      if (!email) {
        toast({
          title: "Email wajib diisi",
          status: "warning",
          position: "top",
        });
        return;
      }
  
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "https://dashboardappankdev.vercel.app/update-password",
  
      });
  
      if (error) {
        toast({
          title: "Gagal kirim link",
          description: error.message,
          status: "error",
          position: "top",
        });
      } else {
        toast({
          title: "Link reset terkirim",
          description: "Cek email kamu untuk mengganti password",
          status: "success",
          position: "top",
        });
      }
    };
  
    return (
      <Center w="100%" h="100vh">
        <Flex direction="column" w="300px" gap={4}>
          <Text fontSize="xl" fontWeight="bold" color={"teal.500"}>Reset Password</Text>
          <Input
            bg={inputBg}
            placeholder="Email"
            value={email}
            color={textColor}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button colorScheme="teal" onClick={handleResetPassword}>
            Kirim Link Reset
          </Button>
        </Flex>
      </Center>
    );
  };
  
  export default ResetPasswordRequest;
  