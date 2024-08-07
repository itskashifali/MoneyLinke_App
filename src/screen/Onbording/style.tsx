import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LogoStyle: {
    width: 207,
    height: 207,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: '18%',
  },
  TextStyle: {
    fontSize: 36,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.black,
    width: '77%',
    flexWrap: 'wrap',
    marginLeft: '5%',
    marginTop: '15%',
  },
  ButtonLogin: {marginTop: '10%'},
  ButtonCeart: {
    marginTop: '8%',
    backgroundColor: COLOR.white,
    borderWidth: 1,
    borderColor: COLOR.primary,
  },
  Buttontext: {color: COLOR.black},
});

export default styles;
