import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screen from '../../screen/index';
import SCREEN, {RootStackParamList} from '../../data/ScrName';
import BottomBarNavigation from '../BottomBarNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={SCREEN.Splash as keyof RootStackParamList}
          component={screen.Splash}
        />
        <Stack.Screen
          name={SCREEN.Onbording as keyof RootStackParamList}
          component={screen.Onbording}
        />
        <Stack.Screen
          name={SCREEN.Login as keyof RootStackParamList}
          component={screen.Login}
        />
        <Stack.Screen
          name={SCREEN.SignUPOTP as keyof RootStackParamList}
          component={screen.SignUPOTP}
        />
        <Stack.Screen
          name={SCREEN.SignUP as keyof RootStackParamList}
          component={screen.SignUP}
        />
        {/* <Stack.Screen
          name={SCREEN.BottomBarNavigation as keyof RootStackParamList}
          component={(props: any) => (
            <BottomBarNavigation selectedScreen="Home2" {...props} />
          )}
        /> */}
          <Stack.Screen
          name={SCREEN.BottomBarNavigation}
          component={screen.BottomBarNavigation}
        />
        <Stack.Screen
          name={SCREEN.OTP as keyof RootStackParamList}
          component={screen.OTP}
        />
        <Stack.Screen
          name={SCREEN.UserName as keyof RootStackParamList}
          component={screen.UserName}
        />
        <Stack.Screen
          name={SCREEN.EmailAndNum as keyof RootStackParamList}
          component={screen.EmailAndNum}
        />
        <Stack.Screen
          name={SCREEN.ResetPassword as keyof RootStackParamList}
          component={screen.ResetPassword}
        />
        <Stack.Screen
          name={SCREEN.Profile as keyof RootStackParamList}
          component={screen.Profile}
        />
        <Stack.Screen
          name={SCREEN.LinkCredit as keyof RootStackParamList}
          component={screen.LinkCredit}
        />
        <Stack.Screen
          name={SCREEN.TransferMoney as keyof RootStackParamList}
          component={screen.TransferMoney}
        />
        <Stack.Screen
          name={SCREEN.AccountDetails as keyof RootStackParamList}
          component={screen.AccountDetails}
        />
        <Stack.Screen
          name={SCREEN.TransferAmount as keyof RootStackParamList}
          component={screen.TransferAmount}
        />
        <Stack.Screen
          name={SCREEN.SuccessScreen as keyof RootStackParamList}
          component={screen.SuccessScreen}
        />
        <Stack.Screen
          name={SCREEN.Notification as keyof RootStackParamList}
          component={screen.Notification}
        />
        <Stack.Screen
          name={SCREEN.EditProfile as keyof RootStackParamList}
          component={screen.EditProfile}
        />
        <Stack.Screen
          name={SCREEN.Fundraiser as keyof RootStackParamList}
          component={screen.Fundraiser}
        />
        <Stack.Screen
          name={SCREEN.Groups as keyof RootStackParamList}
          component={screen.Groups}
        />
        <Stack.Screen
          name={SCREEN.GroupChat as keyof RootStackParamList}
          component={screen.GroupChat}
        />
        <Stack.Screen
          name={SCREEN.GroupPayment as keyof RootStackParamList}
          component={screen.GroupPayment}
        />
        <Stack.Screen
          name={SCREEN.CustomerCare as keyof RootStackParamList}
          component={screen.CustomerCare}
        />
        <Stack.Screen
          name={SCREEN.AddMywallet as keyof RootStackParamList}
          component={screen.AddMywallet}
        />
        <Stack.Screen
          name={SCREEN.Home as keyof RootStackParamList}
          component={screen.Home}
        />
        {/* <Stack.Screen
          name={SCREEN.Home2 as keyof RootStackParamList}
          component={screen.Home2}
        /> */}
        <Stack.Screen
          name={SCREEN.SharePayment as keyof RootStackParamList}
          component={screen.SharePayment}
        />
        <Stack.Screen
          name={SCREEN.SendMoney as keyof RootStackParamList}
          component={screen.SendMoney}
        />
        <Stack.Screen
          name={SCREEN.PaymentDetails as keyof RootStackParamList}
          component={screen.PaymentDetails}
        />
           <Stack.Screen
          name={SCREEN.SelectedCardDetails as keyof RootStackParamList}
          component={screen.SelectedCardDetails}
        />
        {/* <Stack.Screen
          name={SCREEN.Wallet as keyof RootStackParamList}
          component={screen.Wallet}
        />
        <Stack.Screen
          name={SCREEN.Satting as keyof RootStackParamList}
          component={screen.Setting}
        />
        <Stack.Screen
          name={SCREEN.UsersHelp as keyof RootStackParamList}
          component={screen.UsersHelp}
        /> */}
         <Stack.Screen
          name={SCREEN.ReportScreen as keyof RootStackParamList}
          component={screen.ReportScreen}
        />
          <Stack.Screen
          name={SCREEN.AccountStatus as keyof RootStackParamList}
          component={screen.AccountStatus}
        />
        <Stack.Screen
          name={SCREEN.MoneyLinkCard as keyof RootStackParamList}
          component={screen.MoneyLinkCard}
        />
         <Stack.Screen
          name={SCREEN.InviteFriend as keyof RootStackParamList}
          component={screen.InviteFriend}
        />
         <Stack.Screen
          name={SCREEN.VerifiedScreen as keyof RootStackParamList}
          component={screen.VerifiedScreen}
        />
         <Stack.Screen
          name={SCREEN.VerifieIdTermAndCondition as keyof RootStackParamList}
          component={screen.VerifieIdTermAndCondition}
        />
         <Stack.Screen
          name={SCREEN.ShowImage as keyof RootStackParamList}
          component={screen.ShowImage}
        />
         <Stack.Screen
          name={SCREEN.TakeSelfiTerms as keyof RootStackParamList}
          component={screen.TakeSelfiTerms}
        />
         <Stack.Screen
          name={SCREEN.ShowSelfie as keyof RootStackParamList}
          component={screen.ShowSelfie}
        />
        <Stack.Screen
          name={SCREEN.SucceseVerify as keyof RootStackParamList}
          component={screen.SucceseVerify}
        />
         <Stack.Screen
          name={SCREEN.StatusAndDetails as keyof RootStackParamList}
          component={screen.StatusAndDetails}
        />
       
          <Stack.Screen
          name={SCREEN.VisionCamera as keyof RootStackParamList}
          component={screen.VisionCamera}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
