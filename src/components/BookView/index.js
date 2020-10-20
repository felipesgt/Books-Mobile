import React from 'react';
import { Image, Linking, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import DownloadButton from '../DownloadButton';
import PageTitle from '../PageTitle';
import { ShowList } from '../../redux/actions/actions';

import styles from './styles';

const BookView = () => {
  const BookSelected = useSelector((state) => state.dataBook.dataBook);
  const dispatch = useDispatch();

  async function handleAction() {
    /* muda o status da lista ao clicar em favoritos (não implementado) */
    dispatch(ShowList());
  }

  return (
    <View>
      {BookSelected.map((item) => {
        return (
          <View style={styles.container}>
            <PageTitle title={item.title} />
            <View style={styles.bookArea}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.infoArea}>
                <Text style={styles.topText}>Título:</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.topText}>Genero:</Text>
                <Text style={styles.title}>{item.categories}</Text>
                <Text style={styles.topText}>Autor:</Text>
                <Text style={styles.title}>{item.autor}</Text>
              </View>
            </View>
            <Text style={styles.lowTitle}>Descrição:</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.lowTitle}>Prévia:</Text>
            <Text style={styles.description}>
              Tenha acesso ao primeiro capitulo do livro por tempo determinado
            </Text>
            <View style={styles.btn}>
              <DownloadButton onPress={handleAction} />
            </View>
            <Text style={styles.lowTitle}>E-Book Kindle </Text>

            <View style={styles.buyArea}>
              <Text style={styles.price}>R${item.price}0</Text>
              <Text style={styles.title}>COMPRA NO DÉBITO</Text>
              <RectButton
                style={styles.buyBtn}
                onPress={() =>
                  Linking.openURL(
                    `https://play.google.com/store/search?c=books&q=${item.title}`
                  )
                }
              >
                <Text>COMPRAR AGORA</Text>
              </RectButton>
            </View>
            <View styles={styles.favArea}>
              <AntDesign
                onPress={handleAction}
                style={styles.favBtn}
                name="like1"
                size={50}
                color="black"
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default BookView;
