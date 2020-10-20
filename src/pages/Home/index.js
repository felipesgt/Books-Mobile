import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Lottie from 'lottie-react-native';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import api from '../../services/api';
import { addBook } from '../../redux/actions/actions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // array de id dos livros que serão pegos pela API do Google Books
    const ids = ['lScgAQAAQBAJ', 'k0j8IgiMKoMC'];
    ids.map((id) => {
      api
        .get(id)
        .then((response) => {
          let books = [];
          response.data.items.map((item) => {
            books = {
              image: item.volumeInfo.imageLinks.smallThumbnail,
              title: item.volumeInfo.title,
              description: item.volumeInfo.description,
              categories: item.volumeInfo.categories,
              autor: item.volumeInfo.authors,
              price: item.saleInfo.listPrice.amount,
            };
          });
          /* compartilhamento do estado de livros globalmente
         através da chamada da action */
          dispatch(addBook(books));
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  return (
    <View>
      <Header name="Inicio" />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Lottie
          loop
          autoPlay
          autoSize
          source={require('../../../4887-book.json')}
        />
      </View>
    </View>
  );
};

export default Home;
