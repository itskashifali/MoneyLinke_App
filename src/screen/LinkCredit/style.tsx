import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  TitleStyle: {
    fontSize: 24,
    fontFamily: FONT.Montserrat_Bold,
    color: COLOR.black,
    marginLeft: '6%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  inputTitle: {
    fontSize: 14,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.DarkGray_2,
    marginLeft: '5%',
    marginTop: '3%',
    marginBottom: '0.5%',
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
  DateContainer: {
    ...commonStyles.verticleView,
    width: '50%',
    marginLeft: '3%',
    marginTop: '2%',
  },
  DateDropContainer: {
    ...commonStyles.verticleView,
    width: '60%',
    marginLeft: '3%',
    marginTop: '2%',
  },
  DateDropButton: {
    width: '30%',
    borderBottomColor: COLOR.black,
    borderBottomWidth: 1,
    height: 30,
    ...commonStyles.verticleView,
  },
  dropIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    tintColor: COLOR.black,
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
  AddButton: {
    width: '45%',
    height: 35,
    backgroundColor: COLOR.primary,
    borderRadius: 7,
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    marginLeft: '5%',
    marginTop: '8%',
  },
  SmallText: {fontSize: 20, fontFamily: FONT.Inter_Bold, color: COLOR.black},
  addText: {fontSize: 12, fontFamily: FONT.Inter_Medium, color: COLOR.white},
  addIcon: {width: 20, height: 20, resizeMode: 'contain', alignSelf: 'center'},
  ButtonsStyle: {marginTop: '15%'},
});

export default styles;
