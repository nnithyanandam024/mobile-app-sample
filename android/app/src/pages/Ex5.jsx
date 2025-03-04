import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Ex5 = () => {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
            <Image style={styles.image}
            source={{
                uri: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/757bae5a21039bac6ebace5de9affcd8.jpg',
            }} />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginLeft: 110,
    }
})

export default Ex5
