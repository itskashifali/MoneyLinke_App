import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';
import {HomeHeaderProp} from '../../../data/PropType';
import {BackArrow, notification} from '../../../assest/Images';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import SCREEN, {RootStackParamList} from '../../../data/ScrName';

export default function HomeHeader(Props: HomeHeaderProp) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { onpressBack, ProfileImage ,title} = Props;

  return (
    <View style={styles.Container}>


      
      <TouchableOpacity onPress={onpressBack} >
      <Image source={BackArrow} style={styles.backArrow} /> 

      </TouchableOpacity>
{  title?<Text style={styles.balanceText}>{title}</Text>:    <Text style={styles.balanceText}>
        Your Balance <Text style={styles.balnces}>$50,000.40 </Text>
      </Text>}

      <TouchableOpacity
        onPress={() => navigation.navigate(SCREEN.Notification)}
        style={{...commonStyles.horizontalView}}>
        <Image style={styles.HeaderIcon} source={notification} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
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
