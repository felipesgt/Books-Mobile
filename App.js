import React from 'react';
import {
  useFonts,
  Archivo_400Regular,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import AppStack from './src/routes/AppStack';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </>
  );
}
