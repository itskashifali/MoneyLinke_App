import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {CardBackGround, mastercard_logo} from '../../../assest/Images';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';
import React from 'react';

interface PropType {
  serial?: any;
  balance?: any;
}
const CraditCard = (props: PropType) => {
  const {balance, serial} = props;
  return (
    <ImageBackground
      resizeMode="contain"
      source={CardBackGround}
      style={styles.container}>
      <View style={styles.TextAndLogoCOntainer}>
        <Text style={styles.CurrentText}>Current Balance</Text>
        <Image style={styles.logo} source={mastercard_logo} />
      </View>
      <Text style={styles.Balance}>{balance}</Text>
      <View style={styles.serialContainer}>
        <Text style={styles.serialNum}>{serial}</Text>
        <Text style={styles.Date}>12/24</Text>
      </View>
    </ImageBackground>
  );
};
export default CraditCard;

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 190,
    marginLeft: 8,
  },
  TextAndLogoCOntainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '10%',
    marginTop: '12%',
  },
  logo: {width: 40, height: 30, resizeMode: 'contain'},
  CurrentText: {
    fontSize: 15,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.black_2,
  },
  Balance: {
    fontSize: 26,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.black_2,
    marginLeft: '13%',
  },
  serialContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '10%',
    marginTop: '12%',
  },
  Date: {fontSize: 14, fontFamily: FONT.Inter_Medium, color: COLOR.black_2},
  serialNum: {
    fontSize: 14,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black_2,
  },
});
