import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import PageTitle from '../PageTitle';
import BookItem from '../BookItem';

import styles from './styles';

const BookList = () => {
  /* busca no store o array de livros obtidos pela API */
  const book = useSelector((state) => state.books.data);
  return (
    <View style={styles.container}>
      <PageTitle title="Popular" />
      {book.map((element) => {
        return <BookItem key={element.title} book={element} />;
      })}
    </View>
  );
};

export default BookList;
