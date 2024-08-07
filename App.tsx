import React from 'react';
import { SafeAreaView } from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackNavigation />
    </SafeAreaView>
  );
}
