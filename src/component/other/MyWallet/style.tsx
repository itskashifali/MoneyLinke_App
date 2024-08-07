import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: FONT.Montserrat_Bold,
    color: COLOR.black,
    marginLeft: '6%',
    marginTop: '7%',
    marginBottom: '5%',
  },
  AddButton: {
    width: '35%',
    height: 21,
    backgroundColor: COLOR.primary,
    borderRadius: 17,
    ...commonStyles.verticleView,
    flexDirection: 'row',
    paddingHorizontal: '3%',
    marginLeft: '5%',
  },
  addIcon: {width: 12, height: 12, resizeMode: 'contain', alignSelf: 'center'},
  addText: {
    fontSize: 12,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.white,
    right: 25,
  },
  Card: {width: 170, height: 110, marginLeft: 8},
  airtelIcon: {
    resizeMode: 'contain',
    width: 100,
    height: 50,
    marginLeft: '5%',
    marginTop: '10%',
  },
  CardIconContainer: {
    ...commonStyles.horizontalView,
    marginLeft: '10%',
    marginTop: '6%',
  },
  iconMPesa: {resizeMode: 'center', width: 35, height: 50},
  balanceText: {fontSize: 9, fontFamily: FONT.Inter_Bold, color: COLOR.black},
  titlelist: {fontSize: 20, fontFamily: FONT.Inter_Bold, color: COLOR.white},
  Amount: {
    fontSize: 14,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.black,
    marginLeft: '3%',
  },
  LinkButton: {
    width: 100,
    height: 25,
    backgroundColor: COLOR.primary,
    borderRadius: 5,
    ...commonStyles.center,
    alignSelf: 'center',
  },
  LinkText: {
    fontSize: 12,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.white,
  },

  balanceContainer: {
    ...commonStyles.horizontalView,
    marginTop: '1%',
    paddingHorizontal: '5%',
  },
  balance: {
    fontSize: 30,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.black,
    marginLeft: '3%',
  },
  MoneyIcon: {width: 33, height: 33, resizeMode: 'contain'},
  SmallText: {fontSize: 20, fontFamily: FONT.Inter_Bold, color: COLOR.black},

  LocationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLOR.primary,
    ...commonStyles.center,
    marginRight: '5%',
  },
  locationIcon: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    tintColor: COLOR.white,
  },
  mainTitleCOntainer: {...commonStyles.verticleView},
});

export default styles;
