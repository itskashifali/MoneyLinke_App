import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import HomeHeader from '../../component/common/HomeHeader';
import {ProfileImage} from '../../assest/Images';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SCREEN from '../../data/ScrName';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

interface Option {
  id: number;
  mpesaIsSelected: boolean;
  moneyLinkIsSelected: boolean;
  recipientName: string;
}

const PaymentDetails = (prop: any) => {
  const {navigation} = prop;
  const [selector, setSelector] = useState(0);
  const [recipientName, setRecipientName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [mpesaIsSelected, setMpesaIsSelected] = useState<boolean>(false);
  const [moneyLinkIsSelected, setMoneyLinkIsSelected] = useState<boolean>(true);
  const [options, setOptions] = useState<Option[]>([
    {
      id: 1,
      mpesaIsSelected: false,
      moneyLinkIsSelected: false,
      recipientName: '',
    },
  ]);

  const addOption = () => {
    setOptions(prevOptions => [
      ...prevOptions,
      {
        id: prevOptions.length + 1,
        mpesaIsSelected: false,
        moneyLinkIsSelected: false,
        recipientName: '',
      },
    ]);
  };

  const removeOption = (index: number) => {
    setOptions(prevOptions => prevOptions.filter((_, i) => i !== index));
  };

  const handleOptionChange = (index: number, type: 'mpesa' | 'moneyLink') => {
    setOptions(prevOptions =>
      prevOptions.map((option, i) => {
        if (i === index) {
          return {
            ...option,
            mpesaIsSelected: type === 'mpesa',
            moneyLinkIsSelected: type === 'moneyLink',
          };
        }
        return option;
      }),
    );
  };

  const handleRecipientNameChange = (index: number, text: string) => {
    setOptions(prevOptions =>
      prevOptions.map((option, i) => {
        if (i === index) {
          return {
            ...option,
            recipientName: text,
          };
        }
        return option;
      }),
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <HomeHeader ProfileImage={ProfileImage} />
      <View>
        {options.length > 1 && (
          <Text style={{marginLeft: 20, fontWeight: '500'}}>Group Payment</Text>
        )}
        {options.map((option, index) => (
          <View key={option.id} style={styles.transactionOptionsContainer}>
            <Text style={styles.transactionOptionsText}>Send to?</Text>
            <View style={styles.transactionOptions}>
              <TouchableOpacity
                style={[
                  styles.transactionOption,
                  mpesaIsSelected && styles.selectedOption,
                ]}
                onPress={() => handleOptionChange(index, 'mpesa')}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#39B54C', '#39B54C', '#80D08C']}
                  style={styles.linearGradient}>
                  <Text style={styles.transactionOptionText}>M-Pesa</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.transactionOption,
                  moneyLinkIsSelected && styles.selectedOption,
                ]}
                onPress={() => handleOptionChange(index, 'moneyLink')}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#5416B9', '#8F6ACB']}
                  style={styles.linearGradient}>
                  <Text style={styles.transactionOptionText}>MoneyLink</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            {option.moneyLinkIsSelected && (
              <View style={styles.panelInputContainer}>
                <Text style={styles.panelInputTitle}>Recipients Username*</Text>
                <TextInput
                  style={styles.panelInput}
                  value={option.recipientName}
                  onChangeText={text => handleRecipientNameChange(index, text)}
                />
              </View>
            )}
            {option.mpesaIsSelected && (
              <View style={styles.panelInputContainer}>
                <Text style={styles.panelInputTitle}>
                  Recipients Phone Number*
                </Text>
                <TextInput
                  style={styles.panelInput}
                  value={option.recipientName}
                  onChangeText={text => handleRecipientNameChange(index, text)}
                />
              </View>
            )}
            <TouchableOpacity
              style={{marginLeft: 20, marginVertical: 10}}
              onPress={() => removeOption(index)}>
              <Text>Remove Recepient</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={{
          marginLeft: 20,
        }}
        onPress={addOption}>
        <Text>Add recepient</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.continueBtn}
        onPress={() => {
          navigation.navigate(SCREEN.StatusAndDetails);
        }}>
        <Text style={styles.continueBtnText}>Continue</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};
export default PaymentDetails;
