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
    marginTop: '20%',
  },
  nameStyle: {
    fontSize: 32,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    alignSelf: 'center',
    marginTop: '2%',
  },
  discripton: {
    fontSize: 20,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.black,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default styles;
