import {StyleSheet} from 'react-native';
import {COLOR, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainCOntainer: {
    width: '100%',
    backgroundColor: COLOR.gray_1,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '70%',
  },
  line: {
    width: 60,
    height: 5,
    backgroundColor: COLOR.DarkGray,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '5%',
  },
  WellcomeStyle: {
    fontSize: 20,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '5%',
  },
  ForgotText: {
    fontSize: 14,
    fontFamily: FONT.Montserrat_SemiBold,
    color: COLOR.primary,
  },
  forgetButton: {
    alignSelf: 'flex-end',
    marginRight: '11%',
    borderBottomWidth: 1,
    borderBottomColor: COLOR.black,
    marginTop: '2%',
  },
  ButtonStyle: {marginTop: '30%'},
});

export default styles;
