import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const PageTitle = ({ title }) => {
  return (
    <View style={styles.titleArea}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PageTitle;
