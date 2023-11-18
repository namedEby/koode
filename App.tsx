import { useState } from 'react';
import { Modal, View, TouchableOpacity, Text, ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './pages/SplashScreen';
import HomeScreen from './pages/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ListPage from './pages/ListPage';
import {BlurView} from '@react-native-community/blur';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [modalVisible, setModalVisible] = useState(false);

  const navigateToAnotherPage = () => {
    setModalVisible(false);
    navigation.navigate('Listpage');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#A42929',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{ marginRight: 10 }}
            >
              <Icon
                name="menu-outline"
                size={30}
                color="#fff"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen
          name="Splashscreen"
          component={SplashScreen}
          options={{
            title: '',
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="Listpage"
          component={ListPage}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
      <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#A42929' }]}
            onPress={navigateToAnotherPage}
          >
            <Text style={styles.buttonText}>Connect Device</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#A42929' }]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Remove Device</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background color
  },
  innerContainer: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    backgroundColor: '#F2F0DD',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 150, // Adjust the width as needed
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    color: 'white',
    fontWeight:'bold'
  },});
 