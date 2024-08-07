import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLOR, FONT} from '../../../themes/StyleGuides';
import {HomeListprop} from '../../../data/PropType';
import React from 'react';

const HomeListComponent = (props: HomeListprop) => {
  const {index, title, image, transferId, balance, containerStyle} = props;
  console.log(index);
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} key={index}>
      <Image style={styles.ImageStyle} source={image} />
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.tranid}>{transferId}</Text>
        </View>
        <Text style={styles.balance}>{balance}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default HomeListComponent;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageStyle: {width: 35, height: 35, resizeMode: 'contain', marginLeft: '5%'},
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 70,
    borderBottomColor: COLOR.gray_1,
    borderBottomWidth: 1,
  },
  title: {fontSize: 11, fontFamily: FONT.Inter_SemiBold, color: COLOR.black},
  tranid: {
    fontSize: 9,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.DarkGray_3,
  },
  balance: {
    fontSize: 15,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.black,
    marginRight: '6%',
  },
});
