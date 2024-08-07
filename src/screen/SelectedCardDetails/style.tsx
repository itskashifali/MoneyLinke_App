import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  userGroupContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
  usersICon: {width: 20, height: 20, resizeMode: 'contain'},
  GroupPayText: {
    fontSize: 11,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
  },
  TitleStyle: {
    fontSize: 15,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.DarkGray_1,
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
    marginLeft: '6%',
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
  ButtonsStyle: {marginTop: '15%',marginBottom:"10%"},
  selectedBtn: {
    paddingHorizontal: '5%',
    backgroundColor: COLOR.primary,
    borderRadius: 10,
    paddingVertical: '2%',
    alignSelf:"flex-end",
    marginRight:"10%",
    marginTop:"5%"
  },
  selectbBtnText: {
    fontSize: 13,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.white,
  },
  transactionOption: {
    width: 150,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    marginBottom: 10,
  },
  transactionOptionText: {
    color: 'white',
  },
  linearGradient: {
  flex:1,
    paddingLeft: 20,
    ...commonStyles.verticleView,
    paddingHorizontal:"10%"
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: 'gray',
  },
  CardContainer:{...commonStyles.verticleView,paddingHorizontal:"5%"},
  CardIcon:{width:25,height:25,resizeMode:"contain"}
});

export default styles;
