import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TitleStyle: {
    fontSize: 23,
    fontFamily: FONT.Montserrat_Bold,
    color: COLOR.black,
    marginLeft: '4.5%',
    marginTop: '15%',
  },
  discriptionStyle: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_Regular,
    color: COLOR.black,
    width: '83%',
    marginLeft: '5%',
    marginTop: '5%',
    marginBottom: '7%',
    lineHeight: 23,
  },
  orUsetext: {
    fontSize: 14,
    color: COLOR.DarkGray_1,
    fontFamily: FONT.Inter_SemiBold,
    marginHorizontal: '2%',
  },
  TextInput: {marginTop: 0},
  buttonStyle: {marginTop: '28%'},
  emailButtonCintainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },
});

export default styles;
