import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  BottomView: {
    backgroundColor: COLOR.primary,
    width: '100%',
    height: 75,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  ButttonStyle: {backgroundColor: COLOR.white},
  ButtonTitle: {color: COLOR.black},
  ListContainer: {width: '100%', height: 80, ...commonStyles.horizontalView},
  listProfile: {width: 40, height: 40, borderRadius: 20},
  imageContainer: {marginLeft: '6%', width: 70},
  listprofile: {position: 'absolute', bottom: 0, marginLeft: 25},
  profile: {
    height: 20,
    width: 20,
    borderRadius: 10,
    resizeMode: 'center',
  },
  titleList: {
    fontSize: 16,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
  },
  NoList: {fontSize: 15, fontFamily: FONT.Inter_Bold, color: COLOR.primary},
  titleContainer: {
    ...commonStyles.verticleView,
    width: '70%',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.black,
    paddingHorizontal: '1%',
  },
  smsContainer: {
    width: 20,
    height: 20,
    backgroundColor: COLOR.primary,
    borderRadius: 10,
    ...commonStyles.center,
    marginRight: '10%',
  },
  day: {
    fontSize: 12,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.black,
    marginRight: '8%',
  },
  smstext: {fontSize: 12, fontFamily: FONT.Inter_Medium, color: COLOR.white},
});

export default styles;
