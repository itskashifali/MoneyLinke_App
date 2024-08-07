import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  TitleStyle: {
    fontSize: 24,
    fontFamily: FONT.Montserrat_Bold,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '7%',
  },
  inputText: {
    borderBottomWidth: 2,
    borderBottomColor: COLOR.black,
    width: '90%',
    alignSelf: 'center',
    color: COLOR.black,
  },

  BottomView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLOR.primary,
    width: '100%',
    height: 75,
    justifyContent: 'center',
  },
  ButttonStyle: {backgroundColor: COLOR.white},
  ButtonTitle: {color: COLOR.black},
  ListContainer: {
    width: '90%',
    height: 70,
    backgroundColor: COLOR.lightgray,
    ...commonStyles.horizontalView,
    alignSelf: 'center',
  },
  listImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 15,
    marginLeft: '10%',
  },
  titleContainer: {marginLeft: '4%'},
  Listtitle: {
    fontSize: 11,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    marginVertical: '2%',
  },

  tranid: {
    fontSize: 9,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.DarkGray_3,
    marginVertical: '2%',
  },
});

export default styles;
