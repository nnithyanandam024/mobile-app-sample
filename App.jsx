import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import Ex1 from '../app/android/app/src/pages/Ex1';
import Ex2 from '../app/android/app/src/pages/Ex2';
import Ex3 from '../app/android/app/src/pages/Ex3';
import Ex4 from '../app/android/app/src/pages/Ex4';
import Ex5 from '../app/android/app/src/pages/Ex5';
import Ex6 from '../app/android/app/src/pages/Ex6';
import Ex7 from '../app/android/app/src/pages/Ex7';
import Ex8 from '../app/android/app/src/pages/Ex8';


const examples = [
  { id: '1', title: 'Ex:1 [Sample]', component: <Ex1 /> },
  { id: '2', title: 'Ex:2 [Loading]', component: <Ex2 /> },
  { id: '3', title: 'Ex:3 [Button]', component: <Ex3 /> },
  { id: '4', title: 'Ex:4 [TextInput]', component: <Ex4 /> },
  { id: '5', title: 'Ex:5 [Image]', component: <Ex5 /> },
  { id: '6', title: 'Ex:6 [Switch]', component: <Ex6 /> },
  { id: '7', title: 'Ex:7 [StatusBar]', component: <Ex7 /> },
  { id: '8', title: 'Ex:8 [Modals]', component: <Ex8 /> },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.titleText}>Examples</Text>
        
        <FlatList
          data={examples}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.exampleContainer}>
              <Text style={styles.contentText}>{item.title}</Text>
              {item.component}
            </View>
          )}
          removeClippedSubviews={true} 
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          windowSize={5} 
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  exampleContainer: {
    marginBottom: 20, 
  },
  titleText: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 50,
    fontWeight: 'bold',
  },
  contentText: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
