export interface HeaderProp {
  iconBack?: any;
  onpressBack?: () => void;
  title?: string;
}
export interface HomeHeaderProp {
  onpressBack?: () => void;
  ProfileImage?: any;
  title?:any
}
export interface HeadersProp {
  iconBack?: any;
  onpressBack?: () => void;
  title?: string;
  rightIcon?: any;
  view?: any;
}

export interface ButtonProps {
  onpress?: () => void;
  title?: string;
  container?: any;
  tiileStyle?: any;
}
export interface PaymentListProp {
  discription?: any;
  title?: string;
  image?: any;
}

export interface PropType {
  PlaceHolder?: string;
  onChangeText?: any;
  Icon?: any;
  KeyBoard?: any;
  secureText?: boolean;
  length?: number;
  hideOnpress?: () => void;
  title?: any;
  container?: any;
  onFuces?: any;
  textfield?: any;
  leftIcon?: any;
  leftIconStyle?: any;
  iconStyle?: any;
}

export interface HomeListprop {
  index?: number;
  title?: string;
  image?: any;
  transferId?: any;
  balance?: any;
  containerStyle?: any;
}

export interface servicesProp {
  icon?: any;
  title?: any;
  onpress?: () => void;
}

export interface propsMyWallet {
  LinkPress?: () => void;
  AddCardPress?: () => void;
  locationonPres?: () => void;
}
