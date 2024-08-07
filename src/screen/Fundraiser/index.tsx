import {Image, Text, TextInput, View} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {FundraiserImage} from '../../assest/Images';
import * as Progress from 'react-native-progress';
import Buttons from '../../component/common/Buttons';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {COLOR} from '../../themes/StyleGuides';
import FundraiserSheet from '../../component/core/FundraiserSheet';
import React from 'react';

const Fundraiser = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Headers title="Fundraiser" onpressBack={() => navigation.goBack()} />
      <Image source={FundraiserImage} style={styles.profile} />
      <Text style={styles.CollectiveText}>Collective Purchase</Text>
      <Text style={styles.BuyingText}>We’re buying a couch 😃</Text>
      <Progress.Bar
        progress={0.3}
        width={300}
        color={COLOR.primary}
        style={styles.progreeBar}
      />
      <View style={styles.costGoalContainer}>
        <Text style={styles.BuyingText}>$500</Text>
        <Text style={styles.Goal}>goal</Text>
      </View>
      <View style={styles.textinputContainer}>
        <Text style={styles.DollarText}>$</Text>
        <TextInput style={styles.Textinputs} />
      </View>
      <Buttons title="Continue" container={styles.ButtonStyle} />
      <GestureHandlerRootView>
        <FundraiserSheet />
      </GestureHandlerRootView>
    </View>
  );
};
export default Fundraiser;
