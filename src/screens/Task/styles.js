import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F8F8F8',
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
    maxHeight: 250,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
  },
  hederContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 40,
  },
  profileImg: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  nameContainer: {
    flexDirection: 'column',
  },
  greet: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },
  searchWrapper: {
    alignItems: 'center',
    paddingTop: 40,
    left: 18,
  },
  inputItem: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: '#3581f3',
    borderColor: '#1e79fe',
    borderRadius: 20,
    borderBottomColor: '#3581f3',
    borderWidth: 0,
  },
  iconWrapper: {
    flexDirection: 'row',
    right: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
    backgroundColor: '#3581f3',
  },
  closeIcon: {
    color: '#fefefe',
  },
  closeIconText: {
    color: '#fefefe',
    fontSize: 18,
    paddingRight: 8,
  },
});
