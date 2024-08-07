import {StyleSheet} from 'react-native';
import {COLOR, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center'},
  BackButton: {
    flexDirection: 'row',
    marginLeft: '5%',
    width: '20%',
    marginTop: '5%',
  },
  discription: {
    fontSize: 14,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.black,
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  BackArrow: {width: 20, height: 20, resizeMode: 'contain'},
  backText: {
    fontSize: 13,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.black,
    left: 4,
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
    borderBottomWidth: 1,
    borderBottomColor: COLOR.black,
  },
  ButtonStyle: {marginTop: '30%'},
  ContinueEmailContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: '10%',
    marginRight: '7%',
  },
  continueText: {
    fontSize: 14,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
  },
});

export default styles;
