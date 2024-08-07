import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import styles from './style';
import HomeHeader from '../../component/common/HomeHeader';
import {
  LinkAccount,
  LinkAccount1,
  MPesa,
  ProfileImage,
  locations,
  moneyIcon,
  plus,
} from '../../assest/Images';
import {CardInf, dataWallet} from '../../data/DummayData';
import CraditCard from '../../component/core/CraditCard';
import SCREEN from '../../data/ScrName';
import {useState, useRef} from 'react';
import MyWallet from '../../component/other/MyWallet';
import {COLOR} from '../../themes/StyleGuides';
import {GestureHandlerRootView, TextInput} from 'react-native-gesture-handler';
import React from 'react';

const Wallet = (prop: any) => {
  const {navigation} = prop;
  const [balance, setBalance] = useState(false);
  const [location, setLocation] = useState(false);
  const [visible, setVisible] = useState(false);

  const handalNav = () => {
    setBalance(false);
    navigation.navigate(SCREEN.LinkCredit);
  };

  const slideAnim = useRef(new Animated.Value(0)).current; // Initial value for sliding animation

  const slideIn = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0], // Adjust the output range to change the sliding distance
  });

  const toggleSlide = () => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setVisible(false));
    } else {
      setVisible(true);
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const closeSlide = () => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setVisible(false));
    }
  };

  const SlidingComponent = () => {
    const [mpesaIsSelected, setMpesaIsSelected] = useState(false);
    const [bankIsSelected, setBankIsSelected] = useState(false);
    const [amount, setAmount] = useState('');
    console.log(bankIsSelected);
    return (
      <View style={styles.slidingContainer}>
        {visible && (
          <Animated.View
            style={[styles.slidingPanel, {transform: [{translateY: slideIn}]}]}>
            <View
              style={styles.SheetContainer}
            />
            {!mpesaIsSelected && (
              <TouchableOpacity
              style={styles.SheetBtn}

                onPress={() => {
                  setBankIsSelected(true);
                }}>
                <Text style={{color: COLOR.white}}>
                  Instant Transfer to Bank account
                </Text>
              </TouchableOpacity>
            )}
            {!bankIsSelected && (
              <TouchableOpacity
                style={styles.SheetBtn}
                onPress={() => {
                  setMpesaIsSelected(true);
                }}>
                <Text style={{color: COLOR.white}}>
                  Instant Transfer to M-Pesa account
                </Text>
              </TouchableOpacity>
            )}
            {mpesaIsSelected && (
              <View>
                <View style={styles.inputTextContainer}>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Enter Amount
                    </Text>
                    <TextInput
                      placeholder="000.0"
                      keyboardType="number-pad"
                      placeholderTextColor={COLOR.DarkGray_4}
                      style={styles.enterAmoutninput}
                      onChangeText={text => {
                      }}
                      onFocus={() => {}}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Add Phone Number
                    </Text>
                    <TextInput
                      placeholder="Add Number"
                      placeholderTextColor={COLOR.DarkGray_4}
                      style={styles.enterAmoutninput}
                      value={amount}
                      onChangeText={text => {
                        setAmount(text);
                      }}
                      onFocus={() => {}}
                    />
                  </View>
                </View>
                <View style={styles.inputTextContainer}>
                  <TouchableOpacity style={styles.DoneOrCencalBtn}>
                    <Text
                      style={{
                        color: 'white',
                      }}
                      onPress={() => {
                        toggleSlide()
                        navigation.navigate(SCREEN.StatusAndDetails);
                      }}>
                      Done
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.DoneOrCencalBtn}>
                    <Text
                      style={{
                        color: 'white',
                      }}
                      onPress={() => {
                        setMpesaIsSelected(false);
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {bankIsSelected && (
              <View>
                <View style={styles.inputTextContainer}>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Enter Amount
                    </Text>
                    <TextInput
                      placeholder="000.0"
                      keyboardType="number-pad"
                      placeholderTextColor={COLOR.DarkGray_4}
                      style={styles.enterAmoutninput}
                      onChangeText={text => {
                      }}
                      onFocus={() => {}}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Enter Account Number
                    </Text>
                    <TextInput
                      placeholder="xxxxxxxxxxxx"
                      placeholderTextColor={COLOR.DarkGray_4}
                      style={styles.enterAmoutninput}
                      value={amount}
                      onChangeText={text => {
                        setAmount(text);
                      }}
                      onFocus={() => {}}
                    />
                  </View>
                </View>
                <View
                  style={styles.inputTextContainer}>
                  <TouchableOpacity style={styles.DoneOrCencalBtn}>
                    <Text
                      style={{
                        color: 'white',
                      }}
                      onPress={() => {
                        toggleSlide()
                        navigation.navigate(SCREEN.StatusAndDetails);
                      }}>
                      Done
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.DoneOrCencalBtn}>
                    <Text
                      style={{
                        color: 'white',
                      }}
                      onPress={() => {
                        setBankIsSelected(false);
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Animated.View>
        )}
      </View>
    );
  };
  return (
    <GestureHandlerRootView style={styles.container}>
      <HomeHeader ProfileImage={ProfileImage} />

      {location == false ? (
        <ScrollView>
          <View style={styles.mainTitleCOntainer}>
            <Text style={styles.titleStyle}>My Cards</Text>
            <TouchableOpacity
              style={styles.LocationButton}
              onPress={() => setLocation(true)}>
              <Image style={styles.locationIcon} source={locations} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              contentContainerStyle={{marginLeft: '6%', marginTop: '3%'}}
              data={CardInf}
              horizontal
              renderItem={({item}) => (
                <CraditCard balance={item.balance} serial={item.serialNumber} />
              )}
            />
          </View>
          <TouchableOpacity
            style={styles.AddButton}
            onPress={() => handalNav()}>
            <Image style={styles.addIcon} source={plus} />
            <Text style={styles.addText}>Add Card</Text>
          </TouchableOpacity>
          {balance == false ? (
            <View>
              <Text style={styles.balanceText}>Wallet Balance</Text>
              <View style={styles.balanceContainer}>
                <Image style={styles.MoneyIcon} source={moneyIcon} />
                <Text style={styles.balance}>
                  $50,000.<Text style={styles.SmallText}>40</Text>
                </Text>
                <TouchableOpacity
                  style={styles.InstantTransferBtn}
                  onPress={() => {
                    toggleSlide();
                  }}>
                  <Text
                    style={{
                      color: COLOR.white,
                    }}>
                    Instant Transfer
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <FlatList
                data={dataWallet}
                renderItem={({item}) => (
                  <View style={styles.ListAddMoneyConatin}>
                    <Text style={styles.balanceText}>{item.titile}</Text>
                    <View style={styles.ListTitlAndButtonView}>
                      <View style={styles.balanceContainer}>
                        <Image style={styles.MoneyIcon} source={item.icon} />
                        <Text style={{...styles.balance, fontSize: 20}}>
                          $50,000.<Text style={styles.SmallText}>40</Text>
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={styles.buttonAddMoney}
                        onPress={() => navigation.navigate(SCREEN.LinkCredit)}>
                        <Image style={styles.addIcon} source={plus} />
                        <Text style={styles.AddMoneyText}>Add money</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
          )}
        </ScrollView>
      ) : (
        <MyWallet
          LinkPress={() => navigation.navigate(SCREEN.AddMywallet)}
          AddCardPress={() => navigation.navigate(SCREEN.LinkCredit)}
          locationonPres={() => setLocation(false)}
        />
      )}
      <SlidingComponent />

    </GestureHandlerRootView>
  );
};
export default Wallet;
