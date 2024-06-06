import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthRoutes } from './routes';
const Stack = createStackNavigator();

const AuthStack = () => {
  const initialRouteName = 'Login';

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {AuthRoutes.map(({ name, component, options }) => {
        return <Stack.Screen key={name} name={name} component={component} options={options} />;
      })}
    </Stack.Navigator>
  );
};

export default AuthStack;
