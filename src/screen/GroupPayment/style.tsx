import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  AdduserText: {
    fontSize: 24,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.black,
    marginLeft: '5%',
  },
  IconContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '8%',
    marginTop: '4%',
  },
  IconSTyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: COLOR.primary,
  },
  IconQR: {width: 25, height: 25, resizeMode: 'contain'},
  itemText: {fontSize: 13, fontFamily: FONT.Inter_SemiBold, color: COLOR.black},
  itemButton: {...commonStyles.center},
  inputText: {
    borderBottomWidth: 2,
    borderBottomColor: COLOR.black,
    width: '90%',
    alignSelf: 'center',
    color: COLOR.black,
  },

  searchContainer: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
    marginBottom: '60%',
  },
  ListContainer: {
    width: '90%',
    height: 70,
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
    color: COLOR.white,
    marginVertical: '2%',
  },
  tranid: {
    fontSize: 9,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.DarkGray_3,
    marginVertical: '2%',
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
});

export default styles;
