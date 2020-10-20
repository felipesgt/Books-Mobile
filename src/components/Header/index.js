import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { ShowList } from '../../redux/actions/actions';

import styles from './styles';

const Header = ({ name }) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  function handleBack() {
    dispatch(ShowList());
    navigate.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BorderlessButton>
          <MaterialIcons
            onPress={handleBack}
            name="arrow-back"
            size={30}
            color="white"
          />
        </BorderlessButton>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </View>
  );
};

export default Header;
