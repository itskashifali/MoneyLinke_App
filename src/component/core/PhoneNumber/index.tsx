import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import PhoneInput from "react-native-phone-input";
import { isValidNumber } from "react-native-phone-number-input";
import { COLOR, FONT } from "../../../themes/StyleGuides";

interface PropType {
  title?: string;
  onChangetext?: (num: string) => void;
  validations?: (message: string) => void;
  onFuces?: () => void;
  textfield?: any;
}

const PhoneNumber = (props: PropType) => {
  const { title, onChangetext = () => {}, validations = () => {}, onFuces, textfield } = props;
  const [numberError, setNumberError] = useState("");

  const handlePhoneNumberChange = (num: string) => {
    onChangetext(num);
    setNumberError("");
    validateNumber(num);
  };

  const validateNumber = (num: string) => {
    const isNum = isValidNumber(num);
    setNumberError(isNum ? "" : "Invalid mobile number");
    validations(isNum ? "" : "Invalid mobile number");
  };

  return (
    <View style={styles.Container}>
      <View style={styles.starAndTitleContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.starStyle}>*</Text>
      </View>
      <PhoneInput
        style={[styles.InputStyle, textfield]}
        initialCountry={"pk"}
        initialValue={"1"}
        flagStyle={styles.FlagButton}
        onChangePhoneNumber={handlePhoneNumberChange}
        textProps={{
          placeholder: "Add Number",
          onFocus: onFuces
        }}
        textStyle={{ color: COLOR.black }}
      />
      {numberError !== "" && (
        <Text style={{ color: "red", marginLeft: "5%" }}>{numberError}</Text>
      )}
      {/* <View style={styles.LinBar} /> */}
    </View>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  Container: { marginTop: "3%" },
  starStyle: { color: "red", marginLeft: "2%" },
  starAndTitleContainer: { flexDirection: "row" },
  titleStyle: {
    fontSize: 14,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    marginLeft: '5.5%',
    marginBottom: '1.5%',
  },
  InputStyle: {
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
  FlagButton: {
    backgroundColor: COLOR.white,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#ededed",
    left: 5,
  },
  PhoneTextInput: {
    backgroundColor: COLOR.white,
    color: "white",
    height: 50,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#ededed",
    borderRadius: 10,
    right: 10,
    paddingVertical: 4,
  },
  CodeText: { fontSize: 15, color: "#000" },
  LinBar: {
    width: "90%",
    borderColor: "#ededed",
    borderWidth: 1,
    alignSelf: "center",
    marginTop: "2%",
  },
});
