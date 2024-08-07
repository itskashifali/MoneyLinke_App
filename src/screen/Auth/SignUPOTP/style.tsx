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
  TitleStyle: {
    fontSize: 23,
    fontFamily: FONT.Montserrat_Bold,
    color: COLOR.black,
    marginLeft: '4.5%',
    marginTop: '5%',
  },
  discriptionStyle: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_Regular,
    color: COLOR.black,
    width: '83%',
    marginLeft: '5%',
    marginTop: '5%',
    marginBottom: '5%',
    lineHeight: 23,
  },
  FieldContainer: {
    marginTop: '3%',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  codeFieldRoot: {
    marginTop: '5%',
  },
  cell: {
    width: 55,
    height: 60,
    fontSize: 24,
    borderWidth: 1.5,
    backgroundColor: COLOR.gray_1,
    borderRadius: 12,
    marginHorizontal: '1%',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: COLOR.black,
    fontFamily: FONT.Urbanist_Bold,
  },
  focusCell: {
    borderColor: COLOR.primary,
  },
  TextContainer: {alignSelf: 'center', marginTop: '13%', alignItems: 'center'},
  DidnotText: {
    fontSize: 18,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black_1,
    marginBottom: '2%',
  },
  resond: {
    fontSize: 18,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.primary,
    alignSelf: 'center',
    marginTop: '13%',
    textDecorationLine: 'underline',
  },
  buttonStyle: {marginTop: '28%'},
});

export default styles;
