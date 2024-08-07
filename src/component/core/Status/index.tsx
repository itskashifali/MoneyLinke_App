import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const Status = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.point} />
        <Text style={styles.title}>Transfer created</Text>
      </View>
      <Text style={styles.date}>July 17, 12:00 am</Text>
      <View style={styles.container}>
        <View style={styles.point} />
        <Text style={styles.title}>Transfer processed</Text>
      </View>
      <Text style={styles.date}>July 17, 12:00 am</Text>
      <View style={styles.container}>
        <View style={styles.point} />
        <Text style={styles.title}>Transfer processed Locally  </Text>
      </View>
      <Text style={styles.date}>July 17, 12:00 am</Text>
      <View style={styles.container}>
        <View style={styles.point} />
        <Text style={styles.title}>400000.00 Kes paid out to Alspencer </Text>
      </View>
      <Text style={styles.date}>July 17, 12:00 am</Text>
    </View>
  );
};
export default Status;

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
  container: {...commonStyles.horizontalView, marginLeft: '6%',marginTop:'4.5%'},
  date: {
    fontSize: 16,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.black,
    marginLeft: '17%',
    marginTop: '1%',
  },
});
