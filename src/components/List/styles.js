import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    flexGrow: 1,
    marginBottom: 50,
  },
  taskWrapper: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    elevation: 3,
    borderRadius: 10,
    flexGrow: 1,
  },
  titleWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '80%',
  },
  titleText: {
    color: '#243453',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  HeaderText: {
    color: '#243453',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    padding: 10,
  },
  labelWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  labelText: {
    fontFamily: 'Poppins-Regular',
    color: '#243453',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertGreet: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  notasksImg: {
    height: 300,
    width: 300,
  },
});
