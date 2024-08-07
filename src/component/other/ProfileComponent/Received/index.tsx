import {StyleSheet, Text, View} from 'react-native';
import {commonStyles} from '../../../../themes/StyleGuides';
import React from 'react';

const Received = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};
export default Received;

const styles = StyleSheet.create({
  container: {...commonStyles.mainContainer},
});
