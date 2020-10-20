import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 23,
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  top: {
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    paddingRight: 58,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
  },
});
export default styles;
