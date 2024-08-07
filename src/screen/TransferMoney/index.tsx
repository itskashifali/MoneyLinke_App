import {FlatList, Image, Text, TextInput, View} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import Buttons from '../../component/common/Buttons';
import {COLOR} from '../../themes/StyleGuides';
import {HomeList, SearchList} from '../../data/DummayData';
import {useState} from 'react';
import SCREEN from '../../data/ScrName';
import React from 'react';

const TransferMoney = (prop: any) => {
  const {navigation} = prop;
  const [search, setSearch] = useState('');
  const filteredList = HomeList.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Headers onpressBack={() => navigation.goBack()} title="Transfer Money" />

      <Text style={styles.TitleStyle}>Enter the recipient's username</Text>
      <TextInput
        style={styles.inputText}
        placeholderTextColor={COLOR.DarkGray}
        placeholder="Search"
        onChangeText={e => {
          setSearch(e);
        }}
      />
      <View>
        {search.length > 0 && (
          <FlatList
            data={SearchList}
            renderItem={({item}) => (
              <View style={styles.ListContainer}>
                <Image style={styles.listImage} source={item.image} />
                <View style={styles.titleContainer}>
                  <Text style={styles.Listtitle}>{item.title}</Text>
                  <Text style={styles.tranid}>{item.transactionId}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>

      <View style={styles.BottomView}>
        <Buttons
          onpress={() => navigation.navigate(SCREEN.AccountDetails)}
          title="Continue"
          container={styles.ButttonStyle}
          tiileStyle={styles.ButtonTitle}
        />
      </View>
    </View>
  );
};
export default TransferMoney;
