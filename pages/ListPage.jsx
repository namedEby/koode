import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    // Add more data items as needed
  ];

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View>
        <Text style={styles.listItemText}>{item.title}</Text>
        <View style={styles.separator} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Popup Content</Text>
            <Text>{selectedItem ? selectedItem.title : ''}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={closeModal}>
                <View style={styles.buttonBackground}>
                  <Icon name="arrow-left" size={30} color="black" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <View style={styles.buttonBackground}>
                  <Icon name="times" size={20} color="#FFFFFF" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F0DD',
    padding: 10,
  },
  listItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A42929',
    marginBottom: 5,
    padding: 15,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#D5D3BF',
    height: 400,
    width: 350,
    padding: 20,
    borderRadius: 8,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#A42929',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    height:50,
    width:'80%'
  },
  button: {
    flex: 1,
    marginHorizontal: 30, // Adjust the gap between buttons as needed
  },
  buttonBackground: {
    flex: 1,
    backgroundColor: '#A42929',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListPage;
