import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {...commonStyles.mainContainer},
  ProfieImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '4%',
  },
  nameStyle: {
    fontSize: 24,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.black,
    alignSelf: 'center',
    marginTop: '2%',
  },
  copyContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '2%',
  },
  userName: {
    fontSize: 15,
    fontFamily: FONT.Montserrat_Bold,
    color: COLOR.gray_3,
    paddingHorizontal: '1%',
  },
  copyIcon: {width: 21, height: 21, resizeMode: 'contain'},
  EditButton: {
    width: '70%',
    height: 30,
    backgroundColor: COLOR.primary,
    borderRadius: 9,
    ...commonStyles.center,
    alignSelf: 'center',
    marginTop: '6%',
  },
  EditButtonText: {
    fontSize: 15,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.white,
  },
  SelectorView: {
    ...commonStyles.verticleView,
    paddingHorizontal: '7%',
    marginTop: '14%',
  },
  selectorText: {fontSize: 15, fontFamily: FONT.Inter_Bold},
  selctorButton: {borderBottomWidth: 1.5, borderBottomColor: COLOR.primary},
});

export default styles;
