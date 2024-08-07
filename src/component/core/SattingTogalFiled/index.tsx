import {Text, View, StyleSheet} from 'react-native';
import {COLOR, FONT} from '../../../themes/StyleGuides';
import ToggalSwitch from '../../common/ToggalSwitch';
import React from 'react';

interface ProType {
  title?: any;
}
const SattingTogalFiled = (prop: ProType) => {
  const {title} = prop;
  return (
    <View style={styles.listContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <ToggalSwitch />
    </View>
  );
};
export default SattingTogalFiled;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLOR.black,
    borderBottomWidth: 1,
    height: 60,
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  titleStyle: {
    color: COLOR.black,
    fontSize: 15,
    fontFamily: FONT.Inter_SemiBold,
  },
});
