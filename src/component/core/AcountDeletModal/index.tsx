import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';
import InputText from '../../common/InputText';
import React from 'react';

interface DeleteModalProp {
  canCel?: () => void;
  Confiram?: () => void;
}

const AcountDeletModal = (prop: DeleteModalProp) => {
  const {canCel, Confiram} = prop;
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>
          Are you sure you want to delete your account?
        </Text>

        <InputText
          PlaceHolder="OTP"
          textfield={styles.inputText}
          container={{marginTop: 0}}
        />

        <Text style={styles.secondTitle}>Uses Apple prompt UI</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={Confiram}>
            <Text style={{...styles.ConfiramText, color: COLOR.black}}>
              Confirm
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={canCel}>
            <Text style={{...styles.ConfiramText, color: COLOR.errorRed}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default AcountDeletModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.center,
  },
  modal: {
    width: '90%',
    borderRadius: 10,
    elevation: 10,
    backgroundColor: COLOR.DarKGray_8,
    alignSelf: 'center',
    height: '40%',
  },
  title: {
    fontSize: 17,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    width: '70%',
    flexWrap: 'wrap',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '25%',
  },
  inputText: {
    backgroundColor: COLOR.gray_6,
    borderRadius: 0,
    borderColor: COLOR.gray_6,
    marginLeft: 0,
    alignSelf: 'center',
  },
  secondTitle: {
    fontSize: 14,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    alignSelf: 'center',
    marginTop: '10%',
  },
  buttonContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '10%',
    marginTop: '7%',
  },
  ConfiramText: {fontSize: 15, fontFamily: FONT.Inter_SemiBold},
});
