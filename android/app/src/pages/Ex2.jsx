import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={[styles.container, styles.horizontal]}>  
      <ActivityIndicator size="large" />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        justifyContent: 'center',
    },
});

export default App;