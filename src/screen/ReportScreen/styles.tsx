import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  phoneIcon: {width: 22, height: 22, resizeMode: 'contain'},
  PhoneContainer: {
    ...commonStyles.horizontalView,
    marginLeft: '5%',
    marginBottom: '6%',
  },
  PhoneText: {
    color: COLOR.black,
    fontSize: 15,
    fontFamily: FONT.Inter_SemiBold,
    marginLeft: '3%',
  },
  numbers: {...commonStyles.horizontalView, marginLeft: '5%'},
  numberText: {
    fontSize: 14,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.black,
  },
  report: {
    backgroundColor: COLOR.gray_2,
    width: '90%',
    height: 130,
    alignSelf: 'center',
    marginTop: '7%',
    borderRadius: 10,
    color: COLOR.black,
    fontSize: 14,
    fontFamily: FONT.Inter_Regular,
    textAlignVertical: 'top',
    padding: '3%',
  },
  sendButton: {
    backgroundColor: COLOR.primary,
    paddingHorizontal: '5%',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: '2%',
    borderRadius: 6,
    marginTop: '15%',
  },
  btnText: {fontSize: 12, color: COLOR.white, fontFamily: FONT.Inter_Regular,paddingRight:"3%"},
  tickIcon:{width:17,height:17,resizeMode:"center",tintColor:COLOR.white},
  btnView:{...commonStyles.verticleView}
});

export default styles;
