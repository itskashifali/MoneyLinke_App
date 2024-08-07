import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import {COLOR} from '../../../themes/StyleGuides';

// import { Container } from './styles';
interface propType {
  circle?: any;
  container?: any;
}
const ToggalSwitch = (prop: propType) => {
  const [morningSwitchOn, setMorningSwitchOn] = useState(false);
  const {circle, container} = prop;
  const onToggleMorningSwitch = () => {
    setMorningSwitchOn(!morningSwitchOn);
  };

  const transformedCircleStyle = {
    ...styles.circleStyles,
    ...circle,
  };

  const transformedContainerStyle = {
    ...styles.ContainerStyle,
    ...container,
  };
  return (
    <>
      <SwitchToggle
        switchOn={morningSwitchOn}
        onPress={onToggleMorningSwitch}
        circleColorOff={COLOR.white}
        circleColorOn={COLOR.white}
        backgroundColorOn={COLOR.green}
        backgroundColorOff={COLOR.gray_1}
        circleStyle={transformedCircleStyle}
        containerStyle={transformedContainerStyle}
        duration={300}
      />
    </>
  );
};
export default ToggalSwitch;

const styles = StyleSheet.create({
  container: {},
  circleStyles: {
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: COLOR.green,
  },

  ContainerStyle: {
    width: 38,
    height: 22,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: COLOR.DarkGray,
  },
});
