import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Animated,
  TouchableWithoutFeedback,
  Switch,
  Image,
} from 'react-native';
import styles from './style';
import HomeHeader from '../../component/common/HomeHeader';
import {MPesa, ProfileImage, mPesaImage} from '../../assest/Images';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SCREEN from '../../data/ScrName';
import {useState, useRef} from 'react';
import levenshtein from 'js-levenshtein';
import CountryFlag from 'react-native-country-flag';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { COLOR } from '../../themes/StyleGuides';

const countries = [
  {name: 'United States', isoCode: 'us'},
  {name: 'United Kingdom', isoCode: 'gb'},
  {name: 'Kenya', isoCode: 'ke'},
];

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];
const SendMoney = (prop: any) => {
  
  const {navigation} = prop;
  const [selector, setSelector] = useState(0);
  const [QRScanner, setQRScanner] = useState(false);
  const [QRSCode, setQRCode] = useState(false);
  const [query, setQuery] = useState<string>('');
  const [receiverQuery, setReceiverQuery] = useState<string>('');
  const [stateQuery, setStateQuery] = useState<string>('');
  const [sortedNames, setSortedNames] = useState<string[]>(
    countries.map(country => country.name),
  );
  const [sortedStateNames, setSortedStateNames] = useState<string[]>(states);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [stateIsFocused, setStateIsFocused] = useState<boolean>(false);
  const [receiverIsFocused, setReceiverIsFocused] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('ke');
  const [selectedCountryReceiver, setSelectedCountryReceiver] =
    useState<string>('ke');
  const [sendValue, setSendValue] = useState<string>('');
  const [receivedValue, setReceivedValue] = useState<string>('');
  const [fee, setFee] = useState('');
  const [mpesaIsSelected, setMpesaIsSelected] = useState<boolean>(false);
  const [moneyLinkIsSelected, setMoneyLinkIsSelected] =
    useState<boolean>(false);
  const [debitIsSelected, setDebitIsSelected] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);

  const getSortedNames = (query: string, namesList: string[]): string[] => {
    if (!query) return namesList;
    return namesList
      .map((name: string) => ({
        name,
        distance: levenshtein(query.toLowerCase(), name.toLowerCase()),
      }))
      .sort((a, b) => a.distance - b.distance)
      .map(item => item.name);
  };

  const handleSearch = (text: string) => {
    setQuery(text);
    setSortedNames(
      getSortedNames(
        text,
        countries.map(country => country.name),
      ),
    );
    const matchingCountry = countries.find(country =>
      country.name.toLowerCase().includes(text.toLowerCase()),
    );
    if (matchingCountry) {
      setSelectedCountry(matchingCountry.isoCode);
    } else {
      setSelectedCountry('');
    }
  };

  const handleSearchState = (text: string) => {
    setStateQuery(text);
    setSortedStateNames(getSortedNames(text, states));
  };

  const handleSearchReceiver = (text: string) => {
    setReceiverQuery(text);
    setSortedNames(
      getSortedNames(
        text,
        countries.map(country => country.name),
      ),
    );
    const matchingCountry = countries.find(country =>
      country.name.toLowerCase().includes(text.toLowerCase()),
    );
    if (matchingCountry) {
      setSelectedCountryReceiver(matchingCountry.isoCode);
    } else {
      setSelectedCountryReceiver('');
    }
  };

  const handleSelectName = (name: string) => {
    setQuery(name);
    setSortedNames(
      getSortedNames(
        name,
        countries.map(country => country.name),
      ),
    );
    const selectedCountryData = countries.find(
      country => country.name === name,
    );
    if (selectedCountryData) {
      setSelectedCountry(selectedCountryData.isoCode);
    }
    setIsFocused(false); // Hide the list after selection
  };

  const handleSelectNameState = (name: string) => {
    setStateQuery(name);
    setSortedNames(getSortedNames(name, states));
    setStateIsFocused(false); // Hide the list after selection
  };

  const handleSelectNameReceiver = (name: string) => {
    setReceiverQuery(name);
    setSortedNames(
      getSortedNames(
        name,
        countries.map(country => country.name),
      ),
    );
    const selectedCountryData = countries.find(
      country => country.name === name,
    );
    if (selectedCountryData) {
      setSelectedCountryReceiver(selectedCountryData.isoCode);
    }
    setReceiverIsFocused(false); // Hide the list after selection
  };

  const [visible, setVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current; // Initial value for sliding animation

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

  const slideIn = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0], // Adjust the output range to change the sliding distance
  });

  const closeSlide = () => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setVisible(false));
    }
  };

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

  const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const toggleButton = () => {
      setIsToggled(!isToggled);
    };

    return (
      <TouchableOpacity
        style={[styles.toggleButton, isToggled && styles.selectedButton]}
        onPress={toggleButton}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#39B54C', '#39B54C', '#80D08C']}
          style={styles.toggleLinearGradient}>
          <Text style={styles.toggleButtonText}>
            {isToggled ? 'ON' : 'OFF'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const SlidingComponent = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvc, setCvc] = useState('');

    return (
      <View style={styles.slidingContainer}>
        {visible && debitIsSelected && (
          <Animated.View
            style={[styles.slidingPanel, {transform: [{translateY: slideIn}]}]}>
            <Text style={styles.panelText}>Card Information</Text>
            <View style={styles.panelInputContainer}>
              <Text style={styles.panelInputTitle}>Card Number*</Text>
              <TextInput
                style={styles.panelInput}
                value={cardNumber}
                onChangeText={text => {
                  setCardNumber(text);
                }}
              />
            </View>
            <View style={styles.panelInputContainer}>
              <Text style={styles.panelInputTitle}>
                Card Holder's Full Name*
              </Text>
              <TextInput
                style={styles.panelInput}
                value={cardName}
                onChangeText={text => {
                  setCardName(text);
                }}
              />
            </View>
            <View style={styles.panelInputContainerFlex}>
              <View style={styles.panelInputHalf}>
                <Text style={styles.panelInputTitle}>Expiration Date*</Text>
                <TextInput
                  style={styles.panelInputSmall}
                  value={expirationDate}
                  onChangeText={text => {
                    setExpirationDate(text);
                  }}
                />
              </View>
              <View style={styles.panelInputHalf}>
                <Text style={styles.panelInputTitle}>CVC*</Text>
                <TextInput
                  style={styles.panelInputSmall}
                  value={cvc}
                  onChangeText={text => {
                    setCvc(text);
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <Switch
                trackColor={{false: 'gray', true: '#007BFF'}}
                thumbColor="white"
                ios_backgroundColor="gray"
                onValueChange={value => setToggle(value)}
                value={toggle}
              />
              <Text>Use this as the default card?</Text>
            </View>
            <TouchableOpacity
              style={styles.continueBtn}
              onPress={() => {
                navigation.navigate(SCREEN.PaymentDetails);
              }}>
              <Text style={styles.continueBtnText}>Continue</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
        {visible && moneyLinkIsSelected && (
          <Animated.View
            style={[styles.slidingPanel, {transform: [{translateY: slideIn}]}]}>
            <Text style={styles.panelText}>Wallet Balance: Ksh 50,0000</Text>
            <TouchableOpacity
              style={styles.continueBtn}
              onPress={() => {
                navigation.navigate(SCREEN.PaymentDetails);
              }}>
              <Text style={styles.continueBtnText}>Continue</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
        {visible && mpesaIsSelected && (
          <Animated.View
            style={[styles.slidingPanel, {transform: [{translateY: slideIn}]}]}>
            <View style={styles.panelInputContainer}>
              <Text style={styles.panelInputTitle}>Your Phone Number*</Text>
              <TextInput
              
                style={styles.panelInput}
                value={cardNumber}
                onChangeText={text => {
                  setCardNumber(text);
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.continueBtn}
              onPress={() => {
                navigation.navigate(SCREEN.PaymentDetails);
              }}>
              <Text style={styles.continueBtnText}>Continue</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <TouchableWithoutFeedback onPress={closeSlide}>
        <View style={{flex: 1}}>
          <HomeHeader ProfileImage={ProfileImage} onpressBack={()=>navigation.goBack()} />
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>
              {selector == 0
                ? 'Send Money'
                : selector == 1
                  ? 'Request Money'
                  : 'Shared  Payment'}
            </Text>
          </View>
          <View style={styles.countrySearch}>
            <Text style={styles.countryTitle}>Where are you located?</Text>
            <View style={styles.countryInput}>
              {selectedCountry && (
                <CountryFlag
                  isoCode={selectedCountry}
                  size={20}
                  style={styles.countryFlag}
                />
              )}
              <TextInput
                style={styles.input}
                placeholder="Search for a name..."
                placeholderTextColor={COLOR.black}
                value={query}
                onChangeText={handleSearch}
                onFocus={() => {
                  setIsFocused(true);
                  setStateIsFocused(false);
                }}
              />
              {isFocused && (
                <FlatList
                  style={styles.countryOptions}
                  data={sortedNames}
                  keyExtractor={item => item}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={styles.searchOption}
                      onPress={() => handleSelectName(item)}>
                      <Text style={styles.item}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}
            </View>
            {selectedCountry === 'us' && (
              <View style={styles.countryInput}>
                {selectedCountry && (
                  <Text style={styles.countryFlag}>State</Text>
                )}
                <TextInput
                  style={styles.input}
                  placeholder="Search for a name..."
                  placeholderTextColor={COLOR.black}
                  value={stateQuery}
                  onChangeText={handleSearchState}
                  onFocus={() => {
                    setStateIsFocused(true);
                    setIsFocused(false);
                  }}
                />
                {stateIsFocused && (
                  <FlatList
                    style={styles.countryOptions}
                    data={sortedStateNames}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.searchOption}
                        onPress={() => handleSelectNameState(item)}>
                        <Text style={styles.item}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                )}
              </View>
            )}
          </View>
          <View style={styles.countrySearch}>
            <Text style={styles.countryTitle}>Where are you sending?</Text>
            <View style={styles.countryInput}>
              {selectedCountryReceiver && (
                <CountryFlag
                  isoCode={selectedCountryReceiver}
                  size={20}
                  style={styles.countryFlag}
                />
              )}
              <TextInput
                style={styles.input}
                placeholder="Search for a name..."
                placeholderTextColor={COLOR.black}
                value={receiverQuery}
                onChangeText={handleSearchReceiver}
                onFocus={() => {
                  setReceiverIsFocused(true);
                  setStateIsFocused(false);
                  setIsFocused(false);
                }}
              />
              {receiverIsFocused && (
                <FlatList
                  style={styles.countryOptions}
                  data={sortedNames}
                  keyExtractor={item => item}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={styles.searchOption}
                      onPress={() => handleSelectNameReceiver(item)}>
                      <Text style={styles.item}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}
            </View>
          </View>
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
          <Text
            style={{
              marginLeft: 20,
              color:COLOR.black
            }}>
            Fees: {fee === '' ? '0' : fee}
          </Text>
          <View style={styles.transactionOptionsContainer}>
            <Text style={styles.transactionOptionsText}>Send to?</Text>
            <View style={styles.transactionOptions}>
              {query == 'United States' && (
                <TouchableOpacity
                  style={[
                    styles.transactionOption,
                    mpesaIsSelected && styles.selectedOption,
                  ]}
                  onPress={() => {
                    navigation.navigate(SCREEN.SelectedCardDetails,{type:"M-pesa"})
                    // toggleSlide();
                    // setMpesaIsSelected(true);
                    // setMoneyLinkIsSelected(false);
                  }}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#39B54C', '#39B54C', '#80D08C']}
                    style={styles.linearGradient}>
                    <Text style={styles.transactionOptionText}>M-Pesa</Text>
                    <Image source={mPesaImage} style={styles.mpesIcon} />
                  </LinearGradient>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={[
                  styles.transactionOption,
                  moneyLinkIsSelected && styles.selectedOption,
                ]}
                onPress={() => {
                  // toggleSlide();
                  // setMoneyLinkIsSelected(true);
                  // setMpesaIsSelected(false);
                  navigation.navigate(SCREEN.SelectedCardDetails,{type:"MoneyLink"})
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#5416B9', '#8F6ACB']}
                  style={styles.linearGradient}>
                  <Text style={styles.transactionOptionText}>MoneyLink</Text>
                </LinearGradient>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={[
                  styles.transactionOption,
                  moneyLinkIsSelected && styles.selectedOption,
                ]}
                onPress={() => {
                  toggleSlide();
                  setMoneyLinkIsSelected(false);
                  setMpesaIsSelected(false);
                  setDebitIsSelected(true);
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#5416B9', '#8F6ACB']}
                  style={styles.linearGradient}>
                  <Text style={styles.transactionOptionText}>
                    Debit/Credit Card
                  </Text>
                </LinearGradient>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <SlidingComponent />
    </GestureHandlerRootView>
  );
};
export default SendMoney;
