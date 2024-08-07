import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },

  image: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  Title: {
    fontSize: 17,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    textAlign: 'center',
    marginTop: '5%',
  },
  BtnContainer: {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
  },
  btn: {
    marginVertical: '5%',
  },
});

export default styles;
