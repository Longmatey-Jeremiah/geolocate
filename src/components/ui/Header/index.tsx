import { Dimensions, Pressable, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../theme';
import { Box, Divider, HStack, Icon, Image, Menu, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { AVATAR } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated } from '../../../store';

const Header = ({ title = '', icon, onPress }: { title?: string; icon?: any; onPress?: any }) => {
  const navigation = useNavigation();
  const user = useSelector((state) => state?.auth.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setIsAuthenticated(false));
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary['200'] }} />
      <HStack
        bg="black"
        px={6}
        color="brand.100"
        alignItems="center"
        justifyContent="space-between"
        h="60px"
        mt="25px"
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon as={Ionicons} name="arrow-back-outline" color="white" />
        </TouchableOpacity>

        <Box>
          <Text color="white" fontSize="18px" fontWeight={600}>
            {title}
          </Text>
        </Box>
        {user && (
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
        )}
      </HStack>
    </>
  );
};

export { Header };
