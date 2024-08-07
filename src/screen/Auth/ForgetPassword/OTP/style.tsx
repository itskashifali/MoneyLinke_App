import {StyleSheet} from 'react-native';
import {COLOR, FONT} from '../../../../themes/StyleGuides';

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
    marginBottom: '5%',
    lineHeight: 23,
  },
  Seconds: {
    fontSize: 17,
    color: COLOR.black,
    alignSelf: 'flex-end',
    marginRight: '5%',
    fontFamily: FONT.Urbanist_Bold,
  },
  FieldContainer: {
    marginTop: '5%',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  codeFieldRoot: {
    marginTop: '5%',
  },
  cell: {
    width: 40,
    height: 45,
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
