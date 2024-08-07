import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR, commonStyles, FONT } from '../../../themes/StyleGuides';

const Details = () => {
 return (
  <View >




<View style={styles.container}>
        <View style={styles.point} />
        <Text style={styles.title}>detail 1</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.point} />
        <Text style={styles.title}>detail 2</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.point} />
        <Text style={styles.title}>detail 3</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.point} />
        <Text style={styles.title}>detail 3</Text>
      </View>
  </View>
 )
}
export default Details

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontFamily: FONT.Inter_SemiBold,
        color: COLOR.black,
        marginLeft: '7%',
      },
      point: {
        width: 13,
        height: 13,
        borderRadius: 7,
        backgroundColor: COLOR.primary,
      },
      container: {...commonStyles.horizontalView, marginLeft: '6%',marginTop:'8%',},
      date: {
        fontSize: 16,
        fontFamily: FONT.Inter_Regular,
        color: COLOR.black,
        marginLeft: '17%',
        marginTop: '1%',
      },
});

