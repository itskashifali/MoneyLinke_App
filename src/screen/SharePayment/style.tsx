import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../themes/StyleGuides';

export const styles = StyleSheet.create({
  containar: {...commonStyles.mainContainer},
  Discription: {
    fontSize: 24,
    fontWeight: '600',
    color: COLOR.black,
    width: '75%',
    marginLeft: '5%',
    marginTop: '4%',
  },

  BottomView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLOR.primary,
    width: '100%',
    height: 75,
    justifyContent: 'center',
  },
  ListContainer: {marginTop: '3%'},
});
