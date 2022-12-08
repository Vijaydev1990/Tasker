import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  taskWrapper: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    color: '#243453',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 20,
  },
  formLabel: {
    color: '#243453',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  errMsg: {
    fontFamily: 'Poppins-Regular',
  },
  formControl: {marginTop: 20},
  inputItem: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    borderRadius: 20,
    borderWidth: 0,
  },
  labelWrapper: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  labelText: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  submitBtn: {
    marginTop: 30,
    backgroundColor: '#1e79fe',
    borderRadius: 10,
    fontFamily: 'Poppins-Medium',
  },
  submitBtnTxt: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  alertGreet: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
