import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type SuccessfullScreenProp = StackNavigationProp<RootStackParamList, 'Successfull'>;

const Successfull = () => {
  const navigation = useNavigation<SuccessfullScreenProp>();

  const goToHome = () => {
    navigation.navigate('CreateUser'); // Adjust 'Home' to the main screen's name in your app
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.message}>You have successfully signed in.</Text>
      <TouchableOpacity style={styles.button} onPress={goToHome}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'black' },
  message: { fontSize: 16, textAlign: 'center', marginBottom: 40, color: 'black' },
  button: { width: '80%', height: 50, backgroundColor: '#4CAF50', justifyContent: 'center', alignItems: 'center', borderRadius: 20 },
  buttonText: { color: '#fff', fontSize: 18 },
});

export default Successfull;
