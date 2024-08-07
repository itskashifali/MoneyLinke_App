const SCREEN = {
  Splash: 'Splash',
  Onbording: 'Onbording',
  Login: 'Login',
  Home: 'Home',
  Wallet: 'Wallet',
  UsersHelp: 'UsersHelp',
  Satting: 'Setting',
  BottomBarNavigation: 'BottomBarNavigation',
  OTP: 'OTP',
  EmailAndNum: 'EmailAndNum',
  ResetPassword: 'ResetPassword',
  Profile: 'Profile',
  LinkCredit: 'LinkCredit',
  TransferMoney: 'TransferMoney',
  AccountDetails: 'AccountDetails',
  SignUPOTP: 'SignUPOTP',
  SignUP: 'SignUP',
  SharePayment: 'SharePayment',
  UserName: 'UserName',
  TransferAmount: 'TransferAmount',
  SuccessScreen: 'SuccessScreen',
  Notification: 'Notification',
  EditProfile: 'EditProfile',
  Fundraiser: 'Fundraiser',
  Groups: 'Groups',
  GroupChat: 'GroupChat',
  GroupPayment: 'GroupPayment',
  CustomerCare: 'CustomerCare',
  AddMywallet: 'AddMywallet',
  Home2: 'Home2',
  SendMoney: 'SendMoney',
  PaymentDetails: 'PaymentDetails',
  ReportScreen:"ReportScreen",
  AccountStatus:"AccountStatus",
  SelectedCardDetails:'SelectedCardDetails',
  MoneyLinkCard:"MoneyLinkCard",
  InviteFriend:"InviteFriend",
  VerifiedScreen:"VerifiedScreen",
  VerifieIdTermAndCondition:"VerifieIdTermAndCondition",
  ShowImage:"ShowImage",
  TakeSelfiTerms:"TakeSelfiTerms",
  ShowSelfie:"ShowSelfie",
  SucceseVerify:'SucceseVerify',
  StatusAndDetails:"StatusAndDetails",
  VisionCamera:"VisionCamera"
} as const;

export default SCREEN;

export type RootStackParamList = {
  [K in keyof typeof SCREEN]:
    | undefined
    | {selectedScreen?: keyof typeof SCREEN};
};
