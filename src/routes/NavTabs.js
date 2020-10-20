import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import Home from '../pages/Home';
import Loja from '../pages/Loja';
import Favoritos from '../pages/Favoritos';
import Downloads from '../pages/Downloads';
import { ShowList } from '../redux/actions/actions';

const { Navigator, Screen } = createBottomTabNavigator();
function teste() {
  console.log('AAAAs');
}
function NavTabs() {
  const dispatch = useDispatch();
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 66,
        },
        tabStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 25,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 3,
        },
        inactiveBackgroundColor: '#000',
        activeBackgroundColor: '#000',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#ffa500',
      }}
    >
      <Screen
        name="Início"
        component={Home}
        listeners={{
          tabPress: () => {
            dispatch(
              ShowList()
            ); /* Mudar o estado da lista, quando trocar de rota */
          },
        }}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-home"
                size={size}
                color={focused ? '#ffa500' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Favoritos"
        component={Favoritos}
        listeners={{
          tabPress: () => {
            dispatch(ShowList());
          },
        }}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-star"
                size={size}
                color={focused ? '#ffa500' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Loja"
        component={Loja}
        listeners={{
          tabPress: () => {
            dispatch(ShowList());
          },
        }}
        options={{
          tabBarLabel: 'Loja',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-cash"
                size={size}
                color={focused ? '#ffa500' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Download"
        component={Downloads}
        listeners={{
          tabPress: () => {
            dispatch(ShowList());
          },
        }}
        options={{
          tabBarLabel: 'Download',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-download"
                size={size}
                color={focused ? '#ffa500' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default NavTabs;
