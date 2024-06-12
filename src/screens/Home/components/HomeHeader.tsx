import { Platform, Pressable, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { colors } from '../../../components/theme';
import { Box, Divider, HStack, HamburgerIcon, Icon, Image, Menu, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { setIsAuthenticated } from '../../../store';
import { useDispatch } from 'react-redux';
import { AVATAR } from '../../../constants';

interface HomeHeaderProps {
  title: string;
  user?: any;
}

export const HomeHeader = ({ title, user }: HomeHeaderProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setIsAuthenticated(false));
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary['200'] }} />
      <StatusBar
        translucent
        backgroundColor="black"
        barStyle="light-content"
        networkActivityIndicatorVisible={false}
      />
      <HStack
        bg="black"
        px={6}
        color="brand.100"
        alignItems="center"
        justifyContent="space-between"
        h="60px"
        mt={Platform.OS == 'ios' ? '0' : '25px'}
      >
        <Box>
          <Text color="white" fontSize="18px" fontWeight={600}>
            {title}
          </Text>
        </Box>
        <Box>
          <Menu
            w="240"
            mr={2}
            px={0}
            trigger={(triggerProps) => {
              return (
                <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                  <Image source={AVATAR} borderRadius="50" alt="user-image" size={8} />
                </Pressable>
              );
            }}
          >
            {user && (
              <Menu.Item px={0}>
                <HStack space={2} alignItems="center">
                  <Image source={AVATAR} borderRadius="50" alt="user-image" size={10} />
                  <Box>
                    <Text fontWeight="bold" fontSize="18px">
                      {user.nom}
                    </Text>
                    <Text color="gray.400">{user.email}</Text>
                  </Box>
                </HStack>
              </Menu.Item>
            )}
            <Divider />
            <Menu.Item px={0} onPress={logout}>
              <HStack space={7} alignItems="center">
                <Icon as={AntDesign} name="logout" color="black" size="5" />
                <Box>
                  <Text fontWeight="bold" fontSize="16px">
                    Logout
                  </Text>
                </Box>
              </HStack>
            </Menu.Item>
          </Menu>
        </Box>
      </HStack>
    </>
  );
};
