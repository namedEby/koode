import { useState } from 'react';
import { Modal, TouchableOpacity, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './pages/SplashScreen';
import HomeScreen from './pages/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ListPage from './pages/ListPage';

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
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Modal Content</Text>
            <Button title="Go to Another Page" onPress={navigateToAnotherPage} />
            <Button title="Close Modal" onPress={() => setModalVisible(false)} />
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
});
