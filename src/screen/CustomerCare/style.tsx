import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  ListContainer: {
    paddingBottom: '4%',
    marginTop: '1%',
  },
  name: {fontSize: 16, fontFamily: FONT.Inter_SemiBold, color: COLOR.black},
  MessageCard: {
    width: '92%',
    marginTop: '3%',
    alignItems: 'flex-start',
    marginLeft: '2%',
    alignSelf: 'center',
  },
  MessageContainer: {
    paddingVertical: '4%',
    paddingHorizontal: '3%',
    borderTopLeftRadius: 1,
    backgroundColor: COLOR.white_2,
    borderRadius: 14,
    // width: '90%',
    marginRight: '3.5%',
    ...commonStyles.horizontalView,
    alignItems: 'center',
  },
  MainCOntainer: {marginLeft: '2%', width: '85%', marginVertical: '1%'},
  mainContainer2: {marginVertical: '1%'},
  MesgSenderContainer: {
    paddingVertical: '6%',
    paddingHorizontal: '3%',
    backgroundColor: COLOR.primary,
    borderTopRightRadius: 1,

    borderRadius: 10,
    marginLeft: '3.5%',
    marginRight: '3.5%',
    alignItems: 'center',
    // width: '90%',
  },
  MessageLabel: {
    fontSize: 15,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.black,
  },
  MessageLabel2: {
    fontSize: 15,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.white,
  },
  BottomContainer: {
    ...commonStyles.verticleView,
    height: 80,
    width: '100%',
    backgroundColor: COLOR.white,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: '8%',
  },
  icon: {width: 20, height: 20, resizeMode: 'contain'},

  profile: {width: 40, height: 40, resizeMode: 'contain'},
  time: {
    fontSize: 9,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.DarkGray_10,
    alignSelf: 'flex-end',
    marginRight: '6%',
  },
  time1: {
    fontSize: 9,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.DarkGray_10,
    marginLeft: '5%',
  },
  typingView: {
    width: '27%',
    height: 30,
    borderRadius: 10,
    backgroundColor: COLOR.white_2,
    ...commonStyles.verticleView,
    paddingHorizontal: '4%',
  },
  typing: {
    width: 10,
    height: 10,
    backgroundColor: COLOR.white_3,
    borderRadius: 8,
  },
  InputStyle: {
    fontSize: 12,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.gray_6,
    justifyContent: 'center',
    width: '70%',
    top: 1.5,
  },
  GellerieIcon: {width: 20, height: 20, resizeMode: 'contain', right: 10},
  sendsmsContainer: {
    width: 30,
    height: 30,
    backgroundColor: COLOR.primary,
    ...commonStyles.center,
    borderRadius: 15,
  },
  gallerieContainer: {flexDirection: 'row', alignItems: 'center'},
  RightIcon: {
    width: 18,
    height: 18,
    resizeMode: 'center',
    tintColor: COLOR.white,
  },
});

export default styles;
