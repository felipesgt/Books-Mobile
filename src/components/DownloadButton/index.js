import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const DownloadButton = ({ onPress }) => {
  return (
    <RectButton onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Download Prévia</Text>
    </RectButton>
  );
};

export default DownloadButton;
