import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {},
  copyToken: {
    width: '90%',
    height: 50,
    backgroundColor: COLOR.gray_6,
    ...commonStyles.verticleView,
    paddingHorizontal: '4%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop:"15%",
    marginBottom:"5%"
  },
  copyIcon: {width: 20, height: 20, resizeMode: 'contain'},
  tokenText: {
    color: COLOR.black,
    fontSize: 16,
    fontFamily: FONT.Inter_SemiBold,
  },
  newTransfer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#4A13A3',
    borderRadius: 10,
    alignSelf: 'center',
    width: '90%',
    marginTop: "15%",
    
  },
  inviteText: {
    fontSize: 14,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.white,
    alignSelf: 'center',
  },
  referrals: {
    fontSize: 15,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '3%',
  },
});

export default styles;
