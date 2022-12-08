import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  navWrapper: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    elevation: 5,
    width: '100%',
    maxHeight: 60,
    flex: 2,
  },
  btnWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#F8F8F8',
  },
  activeNav: {color: '#3366ff', fontFamily: 'Poppins-Medium'},
  activeText: {color: '#3366ff', fontFamily: 'Poppins-Medium'},
  searchIcon: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
  },
  searchIconvar: {
    height: 25,
    width: 25,
    resizeMode: 'cover',
  },
});
