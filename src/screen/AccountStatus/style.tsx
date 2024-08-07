import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  profileContainer: {
    marginTop: '8%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  AKImages: {width: 100, height:100, resizeMode: 'contain'},
  Date: {fontSize: 15, fontFamily: FONT.Inter_SemiBold, color: COLOR.gray_2,marginTop:"3%"},
  tickStyle:{width:18,height:18,tintColor:COLOR.green},
  textStyle:{fontSize:13,fontFamily:FONT.Inter_Regular,color:COLOR.black},
  AvailableTet:{fontSize:13,fontFamily:FONT.Inter_SemiBold,color:COLOR.black},
  textContainer:{...commonStyles.verticleView,paddingHorizontal:"4%",marginTop:"6%"}
});

export default styles;
