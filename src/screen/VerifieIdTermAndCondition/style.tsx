import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  mainTitle: {
    fontSize: 29,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    alignSelf: 'center',
  },
  title: {
    fontSize: 17,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    marginTop: '2%',
    marginLeft: '5%',
  },
  discription: {
    fontSize: 16,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.black_1,
    width: '90%',
    alignSelf: 'center',
    marginTop: '2%',
  },
  heightLight: {
    fontSize: 16,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.black,
    width: '90%',
    alignSelf: 'center',
    marginTop: '3%',
  },
  btn:{marginVertical:"4%"}
});

export default styles;
