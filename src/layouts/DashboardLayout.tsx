import { Box } from 'native-base';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { colors } from '../components/theme';
import { DismissKeyboard } from '../components/ui';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <SafeAreaView style={{ flex: 0, backgroundColor: colors.brand['200'] }} /> */}
      <SafeAreaView>
        <Box h="100%" bg="brand.200">
          <StatusBar
            translucent
            backgroundColor="black"
            barStyle="light-content"
            networkActivityIndicatorVisible={false}
          />

          <DismissKeyboard>
            <Box h="100%" mx={5} py={2} mt={4}>
              {children}
            </Box>
          </DismissKeyboard>
        </Box>
      </SafeAreaView>
    </>
  );
}
