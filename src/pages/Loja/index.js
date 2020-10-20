import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import BookView from '../../components/BookView';
import BookList from '../../components/BookList';
import Header from '../../components/Header';

function Loja() {
  const showList = useSelector((state) => state.listReducer.showList);

  return (
    <View style={styles.container}>
      <Header name="Loja" />
      {!showList && (
        /* Se o estado da lista for False,
        os componentes trocam de lugar */
        <ScrollView>
          <BookView />
        </ScrollView>
      )}
      <View style={styles.listArea}>
        {showList && (
          <ScrollView>
            <BookList />
          </ScrollView>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Loja;
