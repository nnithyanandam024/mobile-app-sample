import React, { useState } from 'react';
import { SafeAreaView, Switch, StyleSheet } from 'react-native';

const Ex6 = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Switch 
        onValueChange={toggleSwitch}
        value={isEnabled}
        trackColor={{ false: "#767577", true: "#81b0ff" }} 
        thumbColor={isEnabled ? "#000f" : "#f4f3f4"} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

export default Ex6;
