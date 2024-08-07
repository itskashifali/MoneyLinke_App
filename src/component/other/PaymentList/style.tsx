import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 140,
    backgroundColor: COLOR.white,
    elevation: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    ...commonStyles.horizontalView,
    paddingHorizontal: '2%',
    marginVertical: '2.4%',
  },
  titleContainer: {width: '80%', justifyContent: 'center'},
  title: {fontSize: 17, fontWeight: '800', color: COLOR.black},
  discription: {
    fontSize: 13,
    color: COLOR.black,
    width: '84%',
    marginTop: '4%',
  },
  Icon: {width: 40, height: 40},
});
