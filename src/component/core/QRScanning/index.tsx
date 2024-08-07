import React, {useRef, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Cross, FlashOff, FlashOn, ProfileImage} from '../../../assest/Images';
import {COLOR, FONT, commonStyles, width} from '../../../themes/StyleGuides';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../../../data/ScrName';

interface propType {
  cancle?: () => void;
  NextPage?: () => void;
}

const QRScanning = (prop: propType) => {
  const navigation = useNavigation();
  const {cancle, NextPage} = prop;
  const scannerRef = useRef<QRCodeScanner>(null);
  const [modals, setModals] = useState(false);
  const [isFlashOn, setIsFlashOn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      startScan();
    }, 300000);
    return () => clearTimeout(timer);
  }, []);

  const onSuccess = (e: any) => {
    //console.log('Scanned QR code:', e.data);
    // navigation.navigate(SCREEN.TransferAmount, {
    //   profile: ProfileImage,
    //   name: 'David King',
    // });
  };

  const startScan = () => {
    if (scannerRef.current) {
      scannerRef.current.reactivate();
      setTimeout(() => {
        setModals(true);
        setTimeout(() => {
          setModals(false);
        }, 2000);
      }, 1000);
    }
  };

  const toggleFlash = () => {
    setIsFlashOn(!isFlashOn);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={cancle}>
            <Image source={Cross} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              toggleFlash();
            }}>
            <Image
              source={isFlashOn == false ? FlashOff : FlashOn}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <QRCodeScanner
          ref={scannerRef}
          onRead={onSuccess}
          reactivate={false}
          cameraStyle={styles.scannerStyle}
          flashMode={
            isFlashOn
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }
        />
      </View>
      <Text style={styles.description}>
        Scan the QR-Code on a receiver’s device to send Money
      </Text>
    </View>
  );
};

export default QRScanning;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: COLOR.white_1},
  container: {
    width: '90%',
    alignSelf: 'center',
    height: '90%',
  },
  scannerStyle: {
    width: '80%',
    alignSelf: 'center',
  },
  iconContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    top: 15,
  },
  icon: {width: 20, height: 20, resizeMode: 'contain', tintColor: COLOR.black},
  description: {
    fontSize: 13,
    fontFamily: FONT.Montserrat_SemiBold,
    color: COLOR.black,
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
    bottom: '5%',
  },
});
