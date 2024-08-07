import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
    backgroundColor: COLOR.white_1,
  },
  balnces: {fontFamily: FONT.Montserrat_Bold},
  balanceText: {
    fontSize: 15,
    fontFamily: FONT.Montserrat_Medium,
    color: COLOR.DarkGray_2,
    marginLeft: '5%',
    marginTop: '5%',
  },
  balance: {
    fontSize: 30,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.primary,
  },
  AddButton: {
    width: 100,
    height: 25,
    backgroundColor: COLOR.primary,
    borderRadius: 7,
    ...commonStyles.verticleView,
    paddingHorizontal: '2%',
  },
  SmallText: {fontSize: 20, fontFamily: FONT.Inter_Bold, color: COLOR.black},
  addText: {fontSize: 12, fontFamily: FONT.Inter_SemiBold, color: COLOR.white},
  addIcon: {width: 12, height: 12, resizeMode: 'contain', alignSelf: 'center'},
  balanceContainer: {
    ...commonStyles.verticleView,
    marginTop: '3%',
    paddingHorizontal: '5%',
  },
  itemShare: {
    ...commonStyles.verticleView,
    marginTop: '8%',
    paddingHorizontal: '13%',
    width: '100%',
  },
  itemText: {
    fontSize: 12,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    marginTop: '4%',
  },
  itemIcon: {width: 20, height: 18, resizeMode: 'stretch', alignSelf: 'center'},
  QRImage: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '5%',
  },
  QRCodeText: {
    fontSize: 15,
    fontFamily: FONT.Montserrat_SemiBold,
    color: COLOR.black,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: '3%',
    marginBottom: '3%',
  },
  SheetContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: COLOR.gray_2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  line: {
    width: 55,
    height: 7,
    backgroundColor: COLOR.DarkGray,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '5%',
  },
  SeeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  RecentText: {
    fontSize: 15,
    fontFamily: FONT.Montserrat_SemiBold,
    color: COLOR.black,
  },
  SeeAllText: {
    fontSize: 12,
    fontFamily: FONT.Montserrat_SemiBold,
    color: COLOR.DarkGray_3,
  },
  ListContainer: {
    width: '90%',
    backgroundColor: COLOR.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    alignSelf: 'center',
    marginTop: '5%',
  },
});

export default styles;
