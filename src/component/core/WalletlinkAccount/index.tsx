import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';
import React from 'react';
interface PropsType {
  backImage?: any;
  title?: any;
  onpress?: () => void;
}
const WalletlinkAccount = (props: PropsType) => {
  const {backImage, title, onpress} = props;
  return (
    <ImageBackground
      source={backImage}
      resizeMode="stretch"
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <TouchableOpacity style={styles.AddButton} onPress={onpress}>
          <Text style={styles.addText}>Link Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default WalletlinkAccount;

const styles = StyleSheet.create({
  linearGradient: {
    ...commonStyles.verticleView,
    height: 70,
    width: '95%',
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    marginVertical: '2%',
  },
  container: {...commonStyles.verticleView, width: '90%', marginLeft: '2%'},
  addText: {fontSize: 12, fontFamily: FONT.Inter_SemiBold, color: COLOR.white},

  AddButton: {
    width: 100,
    height: 25,
    backgroundColor: COLOR.primary,
    borderRadius: 5,
    ...commonStyles.center,
  },

  titleStyle: {
    fontSize: 13,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
  },
});
