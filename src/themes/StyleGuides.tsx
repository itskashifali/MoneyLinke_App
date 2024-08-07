import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ACTIVEOPACITY = 0.5;

const COLOR = {
  primary: '#5416B9',
  primary_1: '#5416B9',
  errorRed: '#BD0A0A',
  black: '#000',
  black_1: '#212121',
  black_2: '#0D0D0D',
  gray: '#BBBBBB',
  gray_1: '#EAEAEA',
  gray_2: '#E3E3E3',
  gray_3: '#929292',
  gray_4: '#E8E8E8',
  gray_5: '#F4F4F4',
  gray_6: '#D9D9D9',
  gray_7: '#F2F2F2',
  gray_8:"#F3F3F3",
  lightgray: 'rgba(217, 217, 217, 1)',
  white: '#FFFFFF',
  white_1: '#F1F1F1',
  white_2: '#F1F7FF',
  white_3: '#C7DFFF',
  DarkGray: '#868686',
  DarkGray_1: '#5F5F5F',
  DarkGray_2: '#555555',
  DarkGray_3: '#797979',
  DarkGray_4: '#5C5C5C',
  darKGray_5: '#DEDEDE',
  DarkGary_6: '#787878',
  DarkGray_7: '#868686',
  DarKGray_8: '#A8A8A8',
  DarkGray_9: '#818181',
  DarkGray_10: '#0D082C',
  green: '#4caf50',
};

const FONT = {
  Roboto_Black: 'Roboto-Black',
  Roboto_BlackItalic: 'Roboto-BlackItalic',
  Roboto_Bold: 'Roboto-Bold',
  Roboto_Medium: 'Roboto-Medium',
  Roboto_Regular: 'Roboto-Regular',
  Roboto_Thin: 'Roboto-Thin',
  Inter_Bold: 'Inter-Bold',
  Inter_Medium: 'Inter-Medium',
  Inter_Regular: 'Inter-Regular',
  Inter_SemiBold: 'Inter-SemiBold',
  Inter_Thin: 'Inter-Thin',
  Montserrat_Bold: 'Montserrat-Bold',
  Montserrat_Medium: 'Montserrat-Medium',
  Montserrat_Regular: 'Montserrat-Regular',
  Montserrat_SemiBold: 'Montserrat-SemiBold',
  Urbanist_Bold: 'Urbanist-Bold',
  Urbanist_Medium: 'Urbanist-Medium',
  Urbanist_Regular: 'Urbanist-Regular',
  Urbanist_SemiBold: 'Urbanist-SemiBold',
};

const TEXT_STYLE = StyleSheet.create({
  text_regular: {
    fontSize: 14,
    fontFamily: FONT.Roboto_Regular,
    color: COLOR.black,
  },
  regular: {
    fontSize: 14,
    fontFamily: FONT.Roboto_Regular,
    color: COLOR.black,
  },
  text_medium: {
    fontSize: 14,
    fontFamily: FONT.Roboto_Medium,
    color: COLOR.black,
  },
  text_small: {
    fontSize: 14,
    fontFamily: FONT.Roboto_Thin,
    color: COLOR.black,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: FONT.Roboto_Thin,
    color: COLOR.black,
  },
  title: {
    fontSize: 22,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.black,
  },
  text_smallSemiBold: {
    fontSize: 10,
    fontFamily: FONT.Roboto_Thin,
    color: COLOR.black,
  },
  AuthWellComeText: {
    fontSize: 20,
    fontFamily: FONT.Roboto_Thin,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '10%',
    marginBottom: '3%',
  },
});

const commonStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifyView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {width, height, ACTIVEOPACITY, FONT, COLOR, TEXT_STYLE, commonStyles};
