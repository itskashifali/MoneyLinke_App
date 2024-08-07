import {Dimensions, StyleSheet, View} from 'react-native';
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
import {FundraiserList} from '../../../data/DummayData';
import HomeListComponent from '../../other/HomeList';
import {COLOR} from '../../../themes/StyleGuides';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 300;

type BottomSheetProps = {
  children?: React.ReactNode;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const FundraiserSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
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

          {FundraiserList.map((item, index) => (
            <HomeListComponent
              key={index}
              index={index}
              title={item.title}
              image={item.image}
              balance={item.balance}
              transferId={item.transactionId}
              containerStyle={styles.listContaiber}
            />
          ))}
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
    // position: 'absolute',
    borderRadius: 25,
  },
  line: {
    width: 50,
    height: 5,
    backgroundColor: COLOR.DarkGray_4,
    alignSelf: 'center',
    borderRadius: 2,
    marginTop: '3%',
  },

  listContaiber: {alignSelf: 'center'},
});

export default FundraiserSheet;
