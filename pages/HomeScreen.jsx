// HomeScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { alphabetsImage,rhymesImage,commandsImage,otherImage } from "../assets";

const data = [
  { id: "1", title: "Alphabets", bg: alphabetsImage },
  { id: "2", title: "Rhymes", bg: rhymesImage },
  { id: "3", title: "Commands", bg:commandsImage },
  { id: "4", title: "...", bg: otherImage},
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
    navigation.navigate("Listpage");
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
                <ImageBackground
                style={styles.backgroundImage}
                source={item.bg}
                >
                  <View style={styles.overlay} />
                  <Text style={styles.cardTitle}>{item.title}</Text>
                </ImageBackground>
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
    backgroundColor: "#F2F0DD",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width:'100%' 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha (last value) for the desired transparency
  },
  card: {
    flex: 1,
    backgroundColor: "transparent",
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 8,
    elevation: 4,
    height: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    justifyContent: "center", 
    alignItems: "center", 
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F2F0DD",
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 5, 
  },
});

export default HomeScreen;
