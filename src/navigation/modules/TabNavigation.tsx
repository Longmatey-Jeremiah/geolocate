import { TouchableOpacity, Platform } from 'react-native';
import { Box, Center, Flex, HStack, Text, Icon } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { AppRoutes } from './routes';
import { RouteNames } from '../../constants';
import { Header } from '../../components/ui';
import React from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabItems = [
  {
    icon: 'home',
    name: 'Home',
    routeName: RouteNames.DASHBOARD,
  },
  {
    icon: 'person',
    name: 'MAP',
    routeName: RouteNames.MAP,
  },
];

let currentRoute = '';
function isFocused(name: string) {
  return name.toLowerCase() === currentRoute.toLowerCase() ? 'primary.100' : 'secondary.300';
}

function AppStack(props: any) {
  const routeName = getFocusedRouteNameFromRoute(props.route) ?? 'home';
  currentRoute = routeName;
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        header: ({ options }) => <Header title={options?.headerTitle} />,
      }}
    >
      {AppRoutes.map(({ name, component, options }) => {
        return <Stack.Screen key={name} name={name} component={component} options={options} />;
      })}
    </Stack.Navigator>
  );
}

function TabNavigation(props: any) {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Main" options={{ headerShown: false }} component={AppStack} />
    </Tab.Navigator>
  );
}
function TabItem({ name, navigation, icon, to }: any) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityStates={isFocused ? ['selected'] : []}
      onPress={() => {
        navigation.navigate(to);
      }}
    >
      <Flex style={{ justifyContent: 'center' }}>
        <Box>
          <Center>
            <Icon as={Ionicons} name={icon} size="18px" color={isFocused(to)} />
          </Center>
        </Box>
        <Box>
          <Text fontSize="10px" color={isFocused(to)}>
            {name}
          </Text>
        </Box>
      </Flex>
    </TouchableOpacity>
  );
}

const MyTabBar = ({ state, descriptors, navigation }: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <HStack
      justifyContent="space-around"
      p={Platform.OS === 'ios' ? '20px' : '10px'}
      bg="brand.100"
    >
      {TabItems.map(({ name, icon, routeName }) => {
        return (
          <Box flex={1} justifyContent="center" alignItems="center" key={name}>
            <TabItem icon={icon} name={name} navigation={navigation} to={routeName} />
          </Box>
        );
      })}
    </HStack>
  );
};

export default TabNavigation;
