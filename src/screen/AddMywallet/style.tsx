import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  titleStyle: {
    fontSize: 20,
    fontFamily: FONT.Montserrat_Bold,
    color: COLOR.black,
    marginLeft: '6%',
    marginTop: '7%',
    marginBottom: '5%',
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
  TextInput: {
    height: 28,
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: '2%',
  },
  tickIcon: {width: 17, height: 17, resizeMode: 'contain'},
  fildeInput: {height: 40, color: COLOR.black},
  inputTitle: {
    fontSize: 14,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.DarkGray_2,
    marginLeft: '5%',
    marginTop: '3%',
    marginBottom: '0.5%',
  },
  ToggalSwitchContainer: {
    ...commonStyles.horizontalView,
    marginLeft: '5%',
    marginTop: '5%',
  },
  ToggalSwitch: {width: 33, height: 20},
  circleSwitc: {width: 16, height: 16, borderRadius: 8},
  defaultText: {
    fontSize: 15,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.black,
    marginLeft: '4%',
  },
  ButtonsStyle: {marginTop: '15%'},
});

export default styles;
