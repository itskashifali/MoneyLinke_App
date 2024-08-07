import {Image, Text, View, TextInput} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import SCREEN from '../../data/ScrName';
import {usar_flag} from '../../assest/Images';
import Buttons from '../../component/common/Buttons';
import {useRoute, RouteProp} from '@react-navigation/native';
import React from 'react';
import {ImageSourcePropType} from 'react-native';

type RouteParams = {
  name: string;
  profile: ImageSourcePropType;
};

type TransferAmountRouteProp = RouteProp<{params: RouteParams}, 'params'>;

const TransferAmount = (props: any) => {
  // const route = useRoute<TransferAmountRouteProp>();
  // const {name, profile} = route.params;
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Headers title="Transfer Money" onpressBack={() => navigation.goBack()} />
      {/* <Image source={profile} style={styles.ProfieImage} /> */}
      <Text style={styles.Transfer}>Transfer To</Text>
      <View style={styles.flagContainer}>
        {/* <Text style={styles.nameStyle}>{name}</Text> */}
        <Image source={usar_flag} style={styles.flagIcon} />
      </View>
      <View style={styles.textinputContainer}>
        <Text style={styles.DollarText}>$</Text>
        <TextInput style={styles.Textinputs} />
      </View>
      <Text style={styles.AvaibleAmount}>Available: $2,000</Text>

      <View style={styles.BottomView}>
        <Buttons
          title="Continue"
          container={styles.ButttonStyle}
          tiileStyle={styles.ButtonTitle}
          onpress={() => navigation.navigate(SCREEN.StatusAndDetails)}
        />
      </View>
    </View>
  );
};

export default TransferAmount;
