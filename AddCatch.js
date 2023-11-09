import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { firebase } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const AddCatchScreen = ({ route }) => {
  const [catchText, setCatchText] = useState('');

  const handleUpload = async () => {
    try {
      // Get coordinates from the route (passed from MapScreen)
      const { latitude, longitude } = route.params.coordinates;

      // Add data to Firestore
      await firestore().collection('catches').add({
        text: catchText,
        coordinates: {
          latitude,
          longitude,
        },
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      // Reset the text input
      setCatchText('');
    } catch (error) {
      console.error('Error uploading catch:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add Catch Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your catch"
        value={catchText}
        onChangeText={(text) => setCatchText(text)}
      />
      <Button title="Upload Catch" onPress={handleUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default AddCatchScreen;