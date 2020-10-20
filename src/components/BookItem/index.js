import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import { HideList, SelectBook } from '../../redux/actions/actions';
import DownloadButton from '../DownloadButton';

import styles from './styles';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  function handleActions() {
    /* Chama as actions para selecionar o 
    livro e renderizar o outro componente, escondendo a lista */
    dispatch(HideList());
    dispatch(SelectBook(book));
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.bookArea}>
          <TouchableOpacity onPress={handleActions}>
            <Image style={styles.image} source={{ uri: book.image }} />
          </TouchableOpacity>
          <View style={styles.infoArea}>
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookInfos}>Genero: {book.categories}</Text>
            <DownloadButton />
          </View>
        </View>
      </View>
    </>
  );
};

export default BookItem;
