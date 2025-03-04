import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

const Ex4 = () => {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
            <TextInput 
                style={{
                   textAlign: 'center',
                   fontWeight: 'bold',
                   borderWidth:1,
                   borderRadius: 20, 
                   width: 200,
                   marginLeft: 110
                }}
            placeholder='Enter your name'
            />
        </SafeAreaView>
        </SafeAreaProvider>
    </>
  )
}

export default Ex4
