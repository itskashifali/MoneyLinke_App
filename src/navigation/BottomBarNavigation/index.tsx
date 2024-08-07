// import React, {useState} from 'react';
// import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {COLOR, FONT} from '../../themes/StyleGuides';
// import {
//   Home,
//   messageuser,
//   setting,
//   usersHelp,
//   wallet,
// } from '../../assest/Images';

// enum SCREEN {
//   Home = 'Home',
//   Wallet = 'Wallet',
//   UsersHelp = 'UsersHelp',
//   Setting = 'Setting',
// }

// type ScreenNames = keyof typeof SCREEN;

// interface BottomBarNavigationProps {
//   selectedScreen: ScreenNames;
// }

// const BottomBarNavigation = ({selectedScreen}: BottomBarNavigationProps) => {
//   const navigation = useNavigation();
//   const [currentScreen, setCurrentScreen] =
//     useState<ScreenNames>(selectedScreen);

//   const handleTabPress = (screenName: ScreenNames) => {
//     setCurrentScreen(screenName);
//     navigation.navigate(screenName as never); // Casting to `never` to satisfy the type check
//   };

//   const TabButton = ({
//     screen,
//     icon,
//     focusedIcon,
//     label,
//   }: {
//     screen: ScreenNames;
//     icon: any;
//     focusedIcon: any;
//     label: string;
//   }) => {
//     const isFocused = currentScreen === screen;

//     const handlePress = () => {
//       handleTabPress(screen);
//     };

//     return (
//       <TouchableOpacity onPress={handlePress}>
//         <View>
//           {isFocused ? (
//             <View style={styles.focsContainer}>
//               <Image
//                 source={focusedIcon}
//                 style={[styles.focsIcon, {tintColor: COLOR.primary}]}
//               />
//               <Text style={styles.titleSTyle}>{label}</Text>
//             </View>
//           ) : (
//             <Image
//               source={icon}
//               style={[styles.imageStyle, {tintColor: COLOR.white}]}
//             />
//           )}
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <TabButton
//         screen={SCREEN.Home}
//         icon={Home}
//         focusedIcon={Home}
//         label="Home"
//       />
//       <TabButton
//         screen={SCREEN.Wallet}
//         icon={wallet}
//         focusedIcon={wallet}
//         label="Wallet"
//       />
//       <TabButton
//         screen={SCREEN.UsersHelp}
//         icon={usersHelp}
//         focusedIcon={messageuser}
//         label="Help"
//       />
//       <TabButton
//         screen={SCREEN.Setting}
//         icon={setting}
//         focusedIcon={setting}
//         label="Setting"
//       />
//     </View>
//   );
// };

// export default BottomBarNavigation;




import { Image, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { COLOR, FONT } from '../../themes/StyleGuides';
import { Home, setting, usersHelp, wallet } from '../../assest/Images';
import * as screen from '../../screen/index';
import SCREEN from '../../data/ScrName';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomBarNavigation = () => {
 return (
  <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {display: 'none'},
        tabBarStyle: {
          height: 70,
          backgroundColor: COLOR.primary,
          paddingHorizontal: '4%',
        },
      }}>
      <Tab.Screen
        name={SCREEN.Home2}
        component={screen.Home2}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <View style={styles.focsContainer}>
                  <Image
                    source={Home}
                    style={[styles.focsIcon, {tintColor: COLOR.primary}]}
                  />

                  <Text style={styles.titleSTyle}>Home</Text>
                </View>
              ) : (
                <Image
                  source={Home}
                  style={[styles.imageStyle, {tintColor: COLOR.white}]}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.Wallet}
        component={screen.Wallet}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <View style={styles.focsContainer}>
                  <Image
                    source={wallet}
                    style={[styles.focsIcon, {tintColor: COLOR.primary}]}
                  />
                  <Text style={styles.titleSTyle}>Wallet</Text>
                </View>
              ) : (
                <Image
                  source={wallet}
                  style={[styles.imageStyle, {tintColor: COLOR.white}]}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.UsersHelp}
        component={screen.UsersHelp}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <View style={styles.focsContainer}>
                  <Image
                    source={usersHelp}
                    style={[styles.HelpFocesIcon, {tintColor: COLOR.primary}]}
                  />
                  <Text style={styles.titleSTyle}>Help</Text>
                </View>
              ) : (
                <Image
                  source={usersHelp}
                  style={[styles.imageStyle, {tintColor: COLOR.white}]}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.Satting}
        component={screen.Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <View style={styles.focsContainer}>
                  <Image
                    source={setting}
                    style={[styles.focsIcon, {tintColor: COLOR.primary}]}
                  />
                  <Text style={styles.titleSTyle}>Settings</Text>
                </View>
              ) : (
                <Image
                  source={setting}
                  style={[styles.imageStyle, {tintColor: COLOR.white}]}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
 )
}
export default BottomBarNavigation

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: COLOR.primary,
    paddingHorizontal: '4%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageStyle: {width: 26, height: 26, resizeMode: 'center'},
  focsContainer: {
    height: 26,
    width: 75,
    borderRadius: 11,
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: '10%',
  },
  titleSTyle: {
    fontSize: 11,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.black,
  },
  focsIcon: {width: 12, height: 12, resizeMode: 'center', marginRight: '7%'},
  HelpFocesIcon: {width: 15, height: 15, resizeMode: 'center', marginRight: '7%'},

  
});