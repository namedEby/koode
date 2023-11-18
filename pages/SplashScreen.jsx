// CenteredImage.js
import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { background } from "../assets";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <ImageBackground
        source={background}
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "top",  
          alignItems: "center",
        }}
      >
        <Image source={require("./../assets/logo.png")} style={styles.image} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F0DD",
  },
  image: {
    width: 200, // Set the width of your image
    height: 200, // Set the height of your image
    resizeMode: "contain", // Adjust this as needed
  },
});

export default SplashScreen;
