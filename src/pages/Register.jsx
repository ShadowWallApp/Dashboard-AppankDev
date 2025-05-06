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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { registerWithEmail } = UserAuth();

  // Warna yang responsif terhadap dark mode
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "white");
  const inputBg = useColorModeValue("gray.50", "gray.700");
  const bgOuter = useColorModeValue('gray.50', 'gray.900');
  const linkColor = useColorModeValue('blue', 'white');

  const handleRegister = async () => {
    if (!email || !password || !displayName) {
      toast({
        title: "Semua field wajib diisi ya",
        status: "warning",
        position: "top",
      });
      return;
    }
    setIsLoading(true);
    try {
      console.log('Attempting sign-up with:', { email, displayName });
      const { data, error } = await registerWithEmail(email, password, displayName);
      if (error) {
        console.error('Sign-up error:', error.message, error.code, error.status);
        throw error;
      }
      console.log('Sign-up response:', data);
      const userId = data?.user?.id;
      if (userId) {
        await supabase
          .from("profiles")
          .upsert({ id: userId, full_name: displayName });
        toast({
          title: "Registrasi berhasil",
          description: "Silakan cek email Anda untuk verifikasi.",
          status: "success",
          position: "top",
        });
        navigate("/verify-email");
      }
    } catch (err) {
      toast({
        title: "Gagal registrasi",
        description: err.message,
        status: "error",
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center w="100%" h="100dvh" bg={bgOuter} px="10px">
      <Box
        bg={bgColor}
        w="100%"
        maxW="400px"
        p="6"
        boxShadow="md"
        borderRadius="md"
        border="1px solid #ccc"
      >
        <Flex flexDir="column" gap="20px">
          <Text fontSize="2xl" textAlign="center" color={textColor}>
            Register Akun
          </Text>
          <Input
            bg={inputBg}
            placeholder="Nama Lengkap"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            color={textColor}
          />
          <Input
            bg={inputBg}
            placeholder="Email"
            type="email"
            value={email}
            color={textColor}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            bg={inputBg}
            placeholder="Password"
            type="password"
            value={password}
            color={textColor}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button colorScheme="teal" onClick={handleRegister} isLoading={isLoading}>
            Register
          </Button>
          <Text color={"gray.600"}>
            Sudah punya akun?{" "}
            <a href="/login" style={{ color: linkColor }}>
              Login
            </a>
          </Text>
        </Flex>
      </Box>
    </Center>
  );
}

export default Register;