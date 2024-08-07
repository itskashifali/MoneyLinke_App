import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {MyWalletCard} from '../../data/DummayData';
import HomeHeader from '../../component/common/HomeHeader';
import {ProfileImage, tick} from '../../assest/Images';
import {COLOR} from '../../themes/StyleGuides';
import {useState} from 'react';
import ToggalSwitch from '../../component/common/ToggalSwitch';
import Buttons from '../../component/common/Buttons';
import SCREEN from '../../data/ScrName';
import React from 'react';

const AddMywallet = (prop: any) => {
  const {navigation} = prop;
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);

  return (
    <View style={styles.container}>
      <HomeHeader ProfileImage={ProfileImage} />

      <ScrollView>
        <Text style={styles.titleStyle}>My Wallet</Text>

        <FlatList
          data={MyWalletCard}
          horizontal
          renderItem={({item}) => (
            <View>
              <ImageBackground
                style={styles.Card}
                source={item.card}
                resizeMode="contain">
                {item.title ? (
                  <View>
                    <View style={styles.CardIconContainer}>
                      <Text style={styles.titlelist}>{item.title}</Text>
                      <Image style={styles.iconMPesa} source={item.icon} />
                    </View>
                    <View style={styles.CardIconContainer}>
                      <Text style={styles.balanceText}>balance:</Text>
                      <Text style={styles.Amount}>{item.balance}</Text>
                    </View>
                  </View>
                ) : (
                  <View>
                    <Image source={item.icon} style={styles.airtelIcon} />
                  </View>
                )}
              </ImageBackground>
              <TouchableOpacity style={styles.LinkButton}>
                <Text style={styles.LinkText}>Link Account</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <Text style={styles.inputTitle}>Phone Number*</Text>

        <View style={styles.TextInput}>
          <TextInput
            placeholder="0000000000000"
            onChangeText={(data: any) => {
              setNumber(data);
            }}
            keyboardType="numeric"
            placeholderTextColor={COLOR.DarkGray_1}
            style={styles.fildeInput}
          />

          {emailVerify == true && (
            <Image style={styles.tickIcon} source={tick} />
          )}
        </View>
        <Text style={styles.inputTitle}> Full Name*</Text>

        <View style={styles.TextInput}>
          <TextInput
            placeholder="Name"
            onChangeText={(data: any) => {
              setName(data);
            }}
            placeholderTextColor={COLOR.DarkGray_1}
            style={styles.fildeInput}
          />
        </View>
        <View style={styles.ToggalSwitchContainer}>
          <ToggalSwitch
            container={styles.ToggalSwitch}
            circle={styles.circleSwitc}
          />
          <Text style={styles.defaultText}>Mark as default card</Text>
        </View>
        <Buttons
          title="Save"
          container={styles.ButtonsStyle}
          onpress={() => navigation.navigate(SCREEN.LinkCredit)}
        />
      </ScrollView>
    </View>
  );
};
export default AddMywallet;
