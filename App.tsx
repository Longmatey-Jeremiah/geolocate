import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';
import { Provider } from 'react-redux';
import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { NativeBaseProvider } from 'native-base';
import { theme } from './src/components/theme';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
