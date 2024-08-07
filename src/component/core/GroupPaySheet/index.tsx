import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useImperativeHandle, useRef} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {GroupPaymentList} from '../../../data/DummayData';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';
import {search, tick} from '../../../assest/Images';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 450;

type BottomSheetProps = {
  children?: React.ReactNode;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const GroupPaySheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  ({children}, ref) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);
    const context = useRef({y: 0});

    const scrollTo = useCallback((destination: number) => {
      'worklet';
      active.value = destination !== 0;

      translateY.value = withTiming(destination, {
        duration: 700,
        easing: Easing.inOut(Easing.ease),
      });
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({scrollTo, isActive}), [
      scrollTo,
      isActive,
    ]);

    const gesture = Gesture.Pan()
      .onStart(() => {
        context.current = {y: translateY.value};
      })
      .onUpdate(event => {
        translateY.value = event.translationY + context.current.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
        } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP,
      );

      return {
        borderRadius,
        transform: [{translateY: translateY.value}],
      };
    });

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
          <View style={styles.line} />
          <View style={styles.MainCOntainer}>
            <Image source={search} style={styles.leftIcon} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={COLOR.white}
              style={styles.InputText}
            />
          </View>

          <Text style={styles.title}>Group Members</Text>
          <View style={styles.ListCOntainer}>
            <FlatList
              data={GroupPaymentList}
              renderItem={({item}) => (
                <View style={styles.List}>
                  <Image style={styles.profileImage} source={item.image} />
                  <View style={styles.titleContainer}>
                    <Text style={styles.ListTitle}>{item.title}</Text>
                    {item.payment && (
                      <TouchableOpacity style={styles.buttonContainer}>
                        <Image style={styles.tickIcon} source={tick} />
                        <Text style={styles.Buttontitle}>$ {item.payment}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              )}
            />
          </View>
        </Animated.View>
      </GestureDetector>
    );
  },
);

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: COLOR.gray_2,
    borderRadius: 25,
  },
  line: {
    width: 60,
    height: 8,
    backgroundColor: COLOR.DarkGray_4,
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: '3%',
  },
  MainCOntainer: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.DarkGray_9,
    paddingHorizontal: '4%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  inputCOntainer: {marginTop: 0},
  leftIcon: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    tintColor: COLOR.white,
    right: 6,
  },
  InputText: {width: '94%', color: COLOR.black},
  ListCOntainer: {
    width: '90%',
    backgroundColor: COLOR.white,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '3%',
  },
  title: {
    fontSize: 16,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    marginTop: '5%',
    marginLeft: '5%',
  },
  List: {...commonStyles.verticleView, paddingHorizontal: '4%', height: 60},
  profileImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    borderRadius: 15,
  },

  ListTitle: {
    fontSize: 11,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
  },
  titleContainer: {
    width: '80%',
    ...commonStyles.verticleView,
    borderBottomColor: COLOR.black,
    borderBottomWidth: 1,
    height: 40,
  },
  buttonContainer: {
    width: '30%',
    height: 25,
    backgroundColor: COLOR.primary,
    borderRadius: 8,
    ...commonStyles.horizontalView,
  },
  tickIcon: {
    width: 15,
    height: 15,
    resizeMode: 'stretch',
    tintColor: COLOR.white,
    marginLeft: '6%',
  },
  Buttontitle: {
    fontSize: 11,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.white,
    marginLeft: '5%',
  },
});

export default GroupPaySheet;
