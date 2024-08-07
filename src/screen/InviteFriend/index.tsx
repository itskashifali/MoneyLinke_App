import {Text, View, Share, Alert, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import React from 'react';
import {COLOR, FONT} from '../../themes/StyleGuides';
import Headers from '../../component/common/Headers';
import {Copy} from '../../assest/Images';

const InviteFriend = (props: any) => {
  const {navigation} = props;
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'install this app And Get 5$, AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
        url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      //   Alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Headers
        title="Invite the Friend"
        onpressBack={() => navigation.goBack()}
      />
      <View style={styles.copyToken}>
        <Text style={styles.tokenText}>QEFUBOwfu12</Text>
        <TouchableOpacity>
          <Image source={Copy} />
        </TouchableOpacity>
      </View>
      <Text style={styles.referrals}>Number of invites 10</Text>
      <Text style={styles.referrals}>Invite a friend to get $5</Text>
      <Text style={styles.referrals}>referrals Terms and condition</Text>
      <TouchableOpacity style={styles.newTransfer} onPress={onShare}>
        <Text style={styles.inviteText}>invite </Text>
      </TouchableOpacity>
    </View>
  );
};
export default InviteFriend;
