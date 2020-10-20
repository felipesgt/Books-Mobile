import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavTabs from './NavTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="NavTabs" component={NavTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
