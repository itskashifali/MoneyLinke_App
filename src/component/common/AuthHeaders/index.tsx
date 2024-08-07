import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {HeaderProp} from '../../../data/PropType';
import {BackArrow, Logo} from '../../../assest/Images';

export default function AuthHeaders(Props: HeaderProp) {
  const {iconBack, onpressBack, title} = Props;
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={onpressBack}
        style={{...commonStyles.horizontalView}}>
        <Image style={styles.HeaderIcon} source={BackArrow} />
        <Text style={styles.BackText}>Back</Text>
      </TouchableOpacity>

      <View>
        <Image style={styles.logo} source={Logo} />
      </View>

      <View style={styles.freeView} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
  },
  HeaderIcon: {width: 18, height: 18, resizeMode: 'center'},
  BackText: {fontSize: 15, color: COLOR.black, left: 6, fontWeight: '700'},
  freeView: {width: 50},
  logo: {width: 45, height: 45, resizeMode: 'contain', top: 14},
});
