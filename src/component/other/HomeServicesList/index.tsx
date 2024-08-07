import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {servicesProp} from '../../../data/PropType';
import {RightArrow} from '../../../assest/Images';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';
import React from 'react';

const HomeServicesList = (prop: servicesProp) => {
  const {icon, title, onpress} = prop;

  return (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      <View style={styles.containertitle}>
        <Image style={styles.Icon} source={icon} />

        <Text style={styles.title}>{title}</Text>
      </View>

      <Image style={styles.rightIcon} source={RightArrow} />
    </TouchableOpacity>
  );
};
export default HomeServicesList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    borderBottomColor: COLOR.gray_1,
    borderBottomWidth: 1,
    height: 40,
  },
  containertitle: {...commonStyles.horizontalView, marginLeft: '3%'},
  title: {
    fontSize: 12,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.black,
    marginLeft: '12%',
  },
  Icon: {
    width: 22,
    height: 22,
    resizeMode: 'center',
  },
  rightIcon: {
    width: 18,
    height: 18,
    resizeMode: 'center',
  },
});
