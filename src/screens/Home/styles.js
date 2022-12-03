import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ccc',
    flex: 1,
  },
  bgImage: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    maxHeight: 200,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hederContainer: {
    flexDirection: 'row',
  },
  nameContainer: {
    flexDirection: 'column',
  },
});
