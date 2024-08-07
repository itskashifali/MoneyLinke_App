import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

export const styles = StyleSheet.create({
  container: {...commonStyles.center, flex: 1},
  mainCntainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },
  ImageIcon: {width: 75, height: 75},
  TextStyle: {fontSize: 42, color: COLOR.black, fontFamily: FONT.Roboto_Bold},
});
