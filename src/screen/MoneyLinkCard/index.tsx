import {Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import HomeHeader from '../../component/common/HomeHeader';
import InputText from '../../component/common/InputText';
import {plus} from '../../assest/Images';
import SCREEN from '../../data/ScrName';

const MoneyLinkCard = (prop: any) => {
  const {navigation} = prop;

  const [sendValue, setSendValue] = useState<string>('');
  const [receivedValue, setReceivedValue] = useState<string>('');
  const [fee, setFee] = useState('');

  const handleSendValueChange = (text: string) => {
    setSendValue(text);
    const sendAmount = parseFloat(text);
    if (!isNaN(sendAmount)) {
      const receivedAmount = (sendAmount * 0.9).toFixed(2);
      setReceivedValue(receivedAmount.toString());
      const feeAmount = (sendAmount - parseFloat(receivedAmount)).toFixed(2);
      setFee(feeAmount.toString());
    } else {
      setReceivedValue('');
      setFee('');
    }
  };
  return (
    <View style={styles.container}>
      <HomeHeader title={'Group Payment'} onpressBack={()=>navigation.goBack()} />
      <View style={{}}>
        <InputText
          title={'Recipient’s Full Name*'}
          PlaceHolder="Full Name"
          textfield={{width: '90%'}}
        />

        <View style={styles.sentAmountContainer}>
          <View style={styles.sending}>
            <Text style={styles.sendingText}>You Send</Text>
            <TextInput
              style={styles.sendingInput}
              value={sendValue}
              onChangeText={handleSendValueChange}
              placeholder="0.00"
              placeholderTextColor={'black'}
            />
          </View>
          {/* <Icon name="money-bill-transfer" size={30} color="#900" /> */}
          <View style={styles.sending}>
            <Text style={styles.sendingText}>Receiver gets</Text>
            <TextInput
              style={styles.sendingInput}
              value={receivedValue}
              onChangeText={text => {
                setReceivedValue(text);
              }}
              placeholder="0.00"
              placeholderTextColor={'black'}
            />
          </View>
        </View>
        <InputText
          title={'UserName*'}
          PlaceHolder="Full Name"
          textfield={{width: '90%'}}
        />
        <View style={styles.sentAmountContainer}>
          <View style={styles.sending}>
            <Text style={styles.sendingText}>You Send</Text>
            <TextInput
              style={styles.sendingInput}
              value={sendValue}
              onChangeText={handleSendValueChange}
              placeholder="0.00"
              placeholderTextColor={'black'}
            />
          </View>
          {/* <Icon name="money-bill-transfer" size={30} color="#900" /> */}
          <View style={styles.sending}>
            <Text style={styles.sendingText}>Receiver gets</Text>
            <TextInput
              style={styles.sendingInput}
              value={receivedValue}
              onChangeText={text => {
                setReceivedValue(text);
              }}
              placeholder="0.00"
              placeholderTextColor={'black'}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.AddBtn} onPress={()=>navigation.navigate(SCREEN.LinkCredit)} >
      <Image source={plus} style={styles.plusIcon} />
        <Text style={styles.AddText}>Add new Recipient</Text>
      </TouchableOpacity>
    </View>
  );
};
export default MoneyLinkCard;
