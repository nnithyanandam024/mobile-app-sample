import React from 'react';
import { StatusBar, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Ex7 = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar 
          backgroundColor='red'
          barStyle='light-content'
        />
        <Text style={styles.info}>StatusBar Example: Red Colour On Top Status Bar</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({

  info: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10, 
    color: 'black', 
  }
});

export default Ex7;
