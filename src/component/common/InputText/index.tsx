import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {COLOR, FONT} from '../../../themes/StyleGuides';
import {PropType} from '../../../data/PropType';

const InputText = (Props: PropType) => {
  const {
    PlaceHolder,
    onChangeText,
    Icon,
    KeyBoard,
    secureText,
    length,
    hideOnpress,
    title,
    container,
    onFuces,
    leftIcon,
    textfield,
    leftIconStyle,
    iconStyle,
  } = Props;
  return (
    <View style={[styles.container, container]}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={[styles.MainCOntainer, textfield]}>
        {leftIcon && (
          <Image source={leftIcon} style={[styles.leftIcon, leftIconStyle]} />
        )}
        <TextInput
          onFocus={onFuces}
          maxLength={length && length}
          secureTextEntry={secureText && secureText}
          keyboardType={KeyBoard && KeyBoard}
          placeholder={PlaceHolder}
          placeholderTextColor={COLOR.DarkGray}
          onChangeText={e => {
            onChangeText && onChangeText(e);
          }}
          style={styles.InputText}
        />
        {Icon ? (
          <TouchableOpacity onPress={hideOnpress}>
            <Image source={Icon} style={[styles.IconSTyle, iconStyle]} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};
export default InputText;
const styles = StyleSheet.create({
  container: {marginTop: '4%'},
  MainCOntainer: {
    width: '85%',
    height: 44,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.white,
    paddingHorizontal: '4%',
    marginLeft: '5%',
    borderWidth: 2,
    
  },
  IconSTyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.primary,
  },
  InputText: {width: '94%', color: COLOR.black},
  titleStyle: {
    fontSize: 14,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    marginLeft: '5.5%',
    marginBottom: '1.5%',
  },
  leftIcon: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    tintColor: COLOR.black,
    right: 6,
  },
});
