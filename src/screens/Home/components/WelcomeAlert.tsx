import { Alert, Box, HStack, Text } from 'native-base';
import React, { useEffect, useState } from 'react';

export const WelcomeAlert = ({ user = '' }: { user: string }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showAlert) return null;
  return (
    <Box position="absolute" top="0" right="1">
      <Alert status="success" variant="subtle" m={0}>
        <HStack space={2} alignItems="center">
          <Alert.Icon />
          <Text fontSize="md" fontWeight="medium" flexShrink={1}>
            Welcome {user} !
          </Text>
        </HStack>
      </Alert>
    </Box>
  );
};
