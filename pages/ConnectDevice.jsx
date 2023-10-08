// CenteredImage.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';

const ConnectDevice = () => {
    const navigation = useNavigation(); 

    useEffect(() => {
       const timer = setTimeout(() => {
          navigation.navigate('Home'); 
        }, 1000);
        return () => clearTimeout(timer);
      }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/logo.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F2F0DD'
  },
  image: {
    width: 200, // Set the width of your image
    height: 200, // Set the height of your image
    resizeMode: 'contain', // Adjust this as needed
  },
});

export default ConnectDevice;
