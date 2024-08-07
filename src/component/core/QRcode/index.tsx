import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {QRCode} from '../../../assest/Images';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';
import React from 'react';

interface PropType {
  onpress?: () => void;
}

const QRcode = (props: PropType) => {
  const {onpress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onpress}>
        <Text style={styles.ButtonText}>Done</Text>
      </TouchableOpacity>
      <Image source={QRCode} style={styles.QRImage} />

      <Text style={styles.QRCodeText}>
        Tell the sender to scan the QR-Code on their device to send you Money
      </Text>
    </View>
  );
};
export default QRcode;

const styles = StyleSheet.create({
  container: {},
  QRImage: {
    width: 290,
    height: 290,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '7%',
    marginBottom: '5%',
  },
  QRCodeText: {
    fontSize: 15,
    fontFamily: FONT.Montserrat_SemiBold,
    color: COLOR.black,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: '3%',
    marginBottom: '3%',
  },
  ButtonText: {fontSize: 12, fontFamily: FONT.Inter_Bold, color: COLOR.white},
  button: {
    backgroundColor: COLOR.primary,
    borderRadius: 10,
    ...commonStyles.center,
    width: '20%',
    height: 22,
    alignSelf: 'flex-end',
    marginRight: '15%',
    marginTop: '5%',
  },
});
