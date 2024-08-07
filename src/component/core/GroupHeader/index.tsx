import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { COLOR, FONT, commonStyles } from '../../../themes/StyleGuides';
import { BackArrow, notification } from '../../../assest/Images';
import SCREEN, {RootStackParamList} from '../../../data/ScrName';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeHeaderProp } from '../../../data/PropType';
const GroupHeader = (Props:HomeHeaderProp) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { onpressBack, ProfileImage } = Props;

 return (
  <View style={styles.container}>
   
   <TouchableOpacity onPress={onpressBack} >
      <Image source={BackArrow} style={styles.backArrow} /> 
      </TouchableOpacity>
   

      <TouchableOpacity
        onPress={() => navigation.navigate(SCREEN.Notification)}
        style={{...commonStyles.horizontalView}}>
        <Image style={styles.HeaderIcon} source={notification} />
      </TouchableOpacity>
  </View>
 )
}
export default GroupHeader



const styles = StyleSheet.create({
    container: {
        ...commonStyles.verticleView,
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: '4%',
        paddingHorizontal: '6%',
      },
      HeaderIcon: {width: 28, height: 28, resizeMode: 'center'},
      BackText: {fontSize: 15, color: COLOR.black, left: 6, fontWeight: '700'},
      titleStyle: {
        fontFamily: FONT.Inter_SemiBold,
        fontSize: 18,
        color: COLOR.black,
        fontWeight: '900',
      },
      freeView: {width: 20},
      balnces: {fontFamily: FONT.Montserrat_Bold},
      balanceText: {
        fontSize: 15,
        fontFamily: FONT.Montserrat_Medium,
        color: COLOR.DarkGray_2,
        marginLeft: 0,
      },
      balance: {
        fontSize: 30,
        fontFamily: FONT.Inter_Bold,
        color: COLOR.primary,
      },
      backArrow:{width:20,height:20,resizeMode:'contain'}
});

