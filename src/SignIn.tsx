import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type SignInScreenProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigation = useNavigation<SignInScreenProp>();

  const userSignIn = () => {
    setLoading(true);
    setError(''); // Clear previous errors
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User Signed in!');
        setLoading(false);
        navigation.navigate('Successfull'); // Navigate to Successfull page after sign-in
      })
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/user-not-found') {
          setError('No account found for this email.');
        } else if (error.code === 'auth/wrong-password') {
          setError('Incorrect password.');
        } else if (error.code === 'auth/invalid-email') {
          setError('That email address is invalid!');
        } else {
          setError('An error occurred. Please try again.');
        }
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Your Email"
        placeholderTextColor={'black'}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Your Password"
        placeholderTextColor={'black'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.input, styles.marginTop]}
      />
      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={userSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { width: '90%', height: 50, borderWidth: 0.5, borderRadius: 20, paddingLeft: 20, color: 'black' },
  marginTop: { marginTop: 30 },
  button: { width: '90%', height: 50, borderRadius: 20, marginTop: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  buttonText: { color: '#fff' },
  errorText: { color: 'red', marginTop: 10 }
});

export default SignIn;
