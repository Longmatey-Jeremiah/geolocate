import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './modules/AppStack';
import AuthStack from './modules/AuthStack';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

function MainNavigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen name="App" options={{ headerShown: false }} component={AppStack} />
      ) : (
        <Stack.Screen name="Auth" options={{ headerShown: false }} component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}

export default MainNavigation;
