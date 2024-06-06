import { Box } from 'native-base';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { colors } from '../components/theme';
import { DismissKeyboard } from '../components/ui';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.brand['200'] }} />
      <SafeAreaView>
        <Box h="100%" bg="brand.200">
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
            networkActivityIndicatorVisible={false}
          />

          <DismissKeyboard>
            <Box h="100%" mx={10}>
              {children}
            </Box>
          </DismissKeyboard>
        </Box>
      </SafeAreaView>
    </>
  );
}
