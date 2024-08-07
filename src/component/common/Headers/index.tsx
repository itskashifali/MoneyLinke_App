import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';
import {BackArrow} from '../../../assest/Images';
import {HeadersProp} from '../../../data/PropType';

export default function Headers(Props: HeadersProp) {
  const {iconBack, onpressBack, title, rightIcon, view} = Props;
  return (
    <View style={styles.Container}>
      {iconBack ? (
        <TouchableOpacity
          onPress={onpressBack}
          style={{...commonStyles.horizontalView}}>
          <Image style={[styles.HeaderIcon]} source={iconBack} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onpressBack}
          style={{...commonStyles.horizontalView}}>
          <Image style={styles.HeaderIcon} source={BackArrow} />
          <Text style={styles.BackText}>Back</Text>
        </TouchableOpacity>
      )}

      <View>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>

      {rightIcon ? (
        <Image source={rightIcon} style={[styles.HeaderIcon]} />
      ) : (
        <View style={[styles.freeView, view]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    ...commonStyles.verticleView,
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: '5%',
    paddingHorizontal: '4%',
  },
  HeaderIcon: {
    width: 18,
    height: 18,
    resizeMode: 'center',
    tintColor: COLOR.black,
  },
  BackText: {
    fontSize: 13,
    color: COLOR.black,
    left: 6,
    fontFamily: FONT.Inter_SemiBold,
  },
  titleStyle: {
    fontFamily: FONT.Montserrat_SemiBold,
    fontSize: 16,
    color: COLOR.black,
  },
  freeView: {width: 50},
});
