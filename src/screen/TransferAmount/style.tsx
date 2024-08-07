import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  ProfieImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '10%',
  },
  nameStyle: {
    fontSize: 24,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.black,
    alignSelf: 'center',
  },
  Transfer: {
    fontSize: 15,
    fontFamily: FONT.Montserrat_Bold,
    color: COLOR.gray_3,
    alignSelf: 'center',
    marginTop: '3%',
  },
  flagContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'center',
  },
  flagIcon: {width: 25, height: 25, resizeMode: 'contain', top: 5},
  BottomView: {
    backgroundColor: COLOR.primary,
    width: '100%',
    height: 75,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  ButttonStyle: {backgroundColor: COLOR.white},
  ButtonTitle: {color: COLOR.black},
  Textinputs: {
    fontSize: 24,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.gray_3,
    width: '30%',
  },
  DollarText: {fontSize: 24, fontFamily: FONT.Inter_Bold, color: COLOR.gray_3},
  textinputContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'center',
    marginLeft: '15%',
  },
  AvaibleAmount: {
    fontSize: 14,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.black,
    alignSelf: 'center',
    marginTop: '5%',
  },
});

export default styles;
