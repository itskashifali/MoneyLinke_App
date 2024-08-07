import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {},
  TitleStyle: {
    fontSize: 20,
    fontFamily: FONT.Montserrat_Bold,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '8%',
  },
  udateBtton: {
    height: 25,
    borderRadius: 5,
    ...commonStyles.center,
    alignSelf: 'flex-end',
    marginRight: '11%',
    marginTop: '2%',
    paddingHorizontal: '4%',
  },
  UpdateText: {
    fontSize: 12,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.white,
  },
  discription: {
    fontSize: 14,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.black,
    width: '90%',
    alignSelf: 'center',
    marginTop: '3%',
  },
  lastButtonView: {
    flexDirection: 'row',
    marginTop: '4%',
    marginBottom: '15%',
    marginLeft: '5%',
  },
  Logout: {width: 30, height: 30, resizeMode: 'contain'},
  LogoutContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    alignItems: 'center',
    marginTop: '7%',
  },
});

export default styles;
