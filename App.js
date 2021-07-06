import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import StoreCard from './src/components/StoreCard';

import data from './src/data.json';

function App() {
  const renderNews = ({item}) => <StoreCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <View>
        <TextInput
          placeholder="search"
          placeholderTextColor="black"
          textAlign="center"
        />
      </View>

      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={() => (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}></ScrollView>
        )}
        keyExtractor={item => item.id}
        data={data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#D1D0E5',
  },
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    marginVertical: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 48,
    fontStyle: 'italic',
  },
});

export default App;
