import React from 'react';
import { Box, Text, Image, Center } from 'native-base';
import { APP_LOGO, APP_NAME } from '../../../constants';

function PageTitle() {
  return (
    <Center>
      <Image source={APP_LOGO} alt="arrow-left" />
      <Text color="primary.100" fontSize={16} fontWeight={700} lineHeight="28px">
        {APP_NAME}
      </Text>
    </Center>
  );
}

export { PageTitle };
