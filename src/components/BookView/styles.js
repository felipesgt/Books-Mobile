import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  description: {
    marginHorizontal: 24,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    lineHeight: 25,
  },
  topText: {
    fontSize: 16,
    fontWeight: '700',
  },
  image: {
    height: 250,
    width: 180,
  },
  imgArea: {
    width: 185,
  },
  infoArea: {
    width: 180,
  },
  lowTitle: {
    fontFamily: 'Archivo_700Bold',
    marginHorizontal: 24,
    paddingBottom: 8,
    fontWeight: '700',
  },
  container: {
    marginTop: 20,
  },
  bookArea: {
    flexDirection: 'row',
    padding: 15,
  },
  btn: {
    marginHorizontal: 120,
  },
  buyArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyBtn: {
    width: 180,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#ffa500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 40,
  },
  favBtn: {
    marginHorizontal: 300,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
