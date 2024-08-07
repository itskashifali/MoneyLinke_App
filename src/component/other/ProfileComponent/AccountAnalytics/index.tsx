import {StyleSheet, Text, View} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../../../themes/StyleGuides';
import React from 'react';

const AccountAnalytics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.ErrorText}>(GRAPH GOES HERE)</Text>
    </View>
  );
};
export default AccountAnalytics;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
    ...commonStyles.center,
  },
  ErrorText: {fontSize: 16, fontFamily: FONT.Roboto_Bold, color: COLOR.black},
});
