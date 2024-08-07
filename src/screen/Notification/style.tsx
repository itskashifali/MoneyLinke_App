import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  list: {
    width: '100%',
    backgroundColor: COLOR.gray_7,
    height: 70,
    borderBottomColor: COLOR.black,
    borderBottomWidth: 1.5,
    ...commonStyles.horizontalView,
  },
  listProfile: {width: 40, height: 40, borderRadius: 20},
  titleList: {
    fontSize: 16,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
  },
  NoList: {fontSize: 15, fontFamily: FONT.Inter_Bold, color: COLOR.primary},
  profile: {
    height: 20,
    width: 20,
    borderRadius: 10,
    resizeMode: 'center',
  },
  listprofile: {position: 'absolute', bottom: 0, marginLeft: 25},
  imageContainer: {marginLeft: '6%', width: 70},
});

export default styles;
