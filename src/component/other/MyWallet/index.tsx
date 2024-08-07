import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {CardInf, MyWalletCard} from '../../../data/DummayData';
import CraditCard from '../../core/CraditCard';
import {locations, moneyIcon, plus} from '../../../assest/Images';
import {propsMyWallet} from '../../../data/PropType';
import React from 'react';

const MyWallet = (props: propsMyWallet) => {
  const {LinkPress, AddCardPress, locationonPres} = props;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainTitleCOntainer}>
          <Text style={styles.titleStyle}>My Wallet</Text>
          <TouchableOpacity
            style={styles.LocationButton}
            onPress={locationonPres}>
            <Image style={styles.locationIcon} source={locations} />
          </TouchableOpacity>
        </View>
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
              <TouchableOpacity style={styles.LinkButton} onPressIn={LinkPress}>
                <Text style={styles.LinkText}>Link Account</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <Text style={styles.titleStyle}>Wallet Balance</Text>
        <View style={styles.balanceContainer}>
          <Image style={styles.MoneyIcon} source={moneyIcon} />
          <Text style={styles.balance}>
            Kes.$50,000.<Text style={styles.SmallText}>40</Text>
          </Text>
        </View>

        <FlatList
          contentContainerStyle={{marginLeft: '2%', marginTop: '3%'}}
          data={CardInf}
          horizontal
          renderItem={({item}) => (
            <CraditCard balance={item.balance} serial={item.serialNumber} />
          )}
        />

        <TouchableOpacity style={styles.AddButton} onPress={AddCardPress}>
          <Image style={styles.addIcon} source={plus} />
          <Text style={styles.addText}>Add Card</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default MyWallet;
