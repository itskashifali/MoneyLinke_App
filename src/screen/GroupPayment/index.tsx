import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {QRIcon, UserIcon, sharing} from '../../assest/Images';
import {HomeList, SearchList} from '../../data/DummayData';
import {COLOR} from '../../themes/StyleGuides';
import {useState} from 'react';
import Buttons from '../../component/common/Buttons';
import SCREEN from '../../data/ScrName';
import GroupPaySheet from '../../component/core/GroupPaySheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';

const GroupPayment = (props: any) => {
  const {navigation} = props;
  const [search, setSearch] = useState('');
  const filteredList = SearchList.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <Headers
          title="Group Paymrnt"
          onpressBack={() => navigation.goBack()}
        />
        <Text style={styles.AdduserText}>Add users</Text>

        <View style={styles.IconContainer}>
          <TouchableOpacity style={styles.itemButton}>
            <Image style={styles.IconQR} source={QRIcon} />
            <Text style={styles.itemText}>Scan QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemButton}>
            <Image style={styles.IconSTyle} source={UserIcon} />
            <Text style={styles.itemText}>Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemButton}>
            <Image style={styles.IconSTyle} source={sharing} />
            <Text style={styles.itemText}>Share</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.inputText}
          placeholderTextColor={COLOR.DarkGray}
          placeholder="Search"
          onChangeText={e => {
            setSearch(e);
          }}
        />
        <View style={styles.searchContainer}>
          {search.length > 0 && (
            <FlatList
              data={filteredList}
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
        <GroupPaySheet />

        <View style={styles.BottomView}>
          <Buttons
            title="Continue"
            container={styles.ButttonStyle}
            tiileStyle={styles.ButtonTitle}
            onpress={() => navigation.navigate(SCREEN.Fundraiser)}
          />
        </View>
      </GestureHandlerRootView>
    </View>
  );
};
export default GroupPayment;
