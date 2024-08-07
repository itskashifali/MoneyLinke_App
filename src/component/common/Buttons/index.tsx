import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLOR, FONT} from '../../../themes/StyleGuides';
import {ButtonProps} from '../../../data/PropType';

export default function Buttons(props: ButtonProps) {
  const {title, onpress, container, tiileStyle} = props;
  return (
    <TouchableOpacity style={[styles.Container, container]} onPress={onpress}>
      <Text style={[styles.TextStyle, tiileStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: '87%',
    height: 40,
    backgroundColor: COLOR.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    alignSelf: 'center',
  },
  TextStyle: {
    fontSize: 15,
    color: COLOR.white,
    fontFamily: FONT.Inter_Medium,
    fontWeight: 'bold',
  },
});
