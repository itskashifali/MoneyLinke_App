import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLOR.black,
    borderBottomWidth: 1,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: '6%',
  },
  titleStyle: {
    color: COLOR.black,
    fontSize: 12,
    fontFamily: FONT.Inter_SemiBold,
  },
  IconStyle: {width: 16, height: 16, resizeMode: 'contain'},
});

export default styles;
