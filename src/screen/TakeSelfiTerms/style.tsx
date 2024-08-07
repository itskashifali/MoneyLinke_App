import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, FONT } from '../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  ...commonStyles.mainContainer
 },
 Title:{fontSize:25,fontFamily:FONT.Inter_Bold,color:COLOR.black,marginLeft:"5%"},
 icon:{width:20,height:20,resizeMode:'center'},
 discContainer:{...commonStyles.verticleView,width:"90%",alignSelf:"center",marginVertical:'3%'},
 discription:{fontSize:14,fontFamily:FONT.Inter_SemiBold,color:COLOR.black,width:"90%"},
 btn:{position:"absolute",bottom:"5%"}
});

export default styles;
