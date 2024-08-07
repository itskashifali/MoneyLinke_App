import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  ProfileText: {
    fontSize: 16,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    marginLeft: '10%',
    marginTop: '4%',
  },
  ProfieImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'cover',
    marginTop: '4%',
    marginLeft: '10%',
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
  udateBtton: {
    height: 25,
    borderRadius: 5,
    ...commonStyles.center,
    alignSelf: 'flex-end',
    marginRight: '11%',
    marginTop: '2%',
    paddingHorizontal: '4%',
    backgroundColor: COLOR.primary,
  },
  UpdateText: {
    fontSize: 12,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.white,
  },
});

export default styles;
