import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    fontSize: 16,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    alignSelf: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },

  rightArrow: {width: 20, height: 20, resizeMode: 'contain'},
  listContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  listText: {fontSize: 16, fontFamily: FONT.Inter_SemiBold, color: COLOR.black},
});

export default styles;
