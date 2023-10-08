// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: '1', title: 'Alphabets', },
  { id: '2', title: 'Rhymes ', },
  { id: '3', title: 'Commands', },
  { id: '4', title: '...', },
 
];

const datalist = (arr, chunkSize) => {
  //this list hold the data for the card of this page 
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }
  return chunkedArray;
};

const HomeScreen = () => {
  const Data = datalist(data, 2); // Split data into rows with 2 columns each
  const navigation = useNavigation();
  const handleCardPress = () => {
    navigation.navigate('Listpage');
  };
  return (
    <View style={styles.container}>
   
      <ScrollView>
        {Data.map((rowData, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {rowData.map((item) => (
              <TouchableOpacity
              style={styles.card}
              key={item.id}
              onPress={handleCardPress}
              activeOpacity={0.7} // Set the opacity value for the press effect
            >
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F0DD',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    
    flex: 1,
    backgroundColor: '#A42929',
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 8,
    elevation: 4,
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
    color: '#F2F0DD', 
  },
 
});

export default HomeScreen;
