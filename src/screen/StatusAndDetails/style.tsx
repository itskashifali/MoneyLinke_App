import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  firstCOntainer: {flex: 1, backgroundColor: COLOR.primary},
  secondCOntainer: {flex: 1.5, backgroundColor: COLOR.white},
  HeaderIcon: {
    width: 18,
    height: 18,
    resizeMode: 'center',
    tintColor: COLOR.white,
  },
  BackText: {
    fontSize: 13,
    color: COLOR.white,
    left: 6,
    fontFamily: FONT.Inter_SemiBold,
  },
  mobile: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '5%',
  },
  title: {
    fontSize: 18,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.white,
    textAlign: 'center',
    marginTop: '7%',
  },
  btnpress: {
    paddingHorizontal: '3%',
    height: 30,
    backgroundColor: COLOR.white,
    borderRadius: 5,
    alignSelf: 'center',
    ...commonStyles.center,
    marginTop: '5%',
  },
  btnText: {
    fontSize: 13,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.primary,
  },
  Card: {
    width: '90%',
    height: '48%',
    backgroundColor: COLOR.gray_8,
    borderRadius: 10,
    elevation: 10,
    position: 'absolute',
    marginTop: '70%',
    alignSelf: 'center',
  },
  btnContainer: {
    backgroundColor: COLOR.gray_6,
    ...commonStyles.verticleView,
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 10,
    paddingHorizontal: '4%',
    marginTop:'4%'
  },
  selectbtn: {
    width: '50%',
    height: 35,
    backgroundColor: COLOR.white,
    ...commonStyles.center,
  },
  text: {fontSize: 16, fontFamily: FONT.Inter_SemiBold},
});

export default styles;
