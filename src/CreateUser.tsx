import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

type CreateUserScreenProp = StackNavigationProp<RootStackParamList, 'CreateUser'>;

const CreateUser = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigation = useNavigation<CreateUserScreenProp>();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '27382433897-sol4o7a6ebn67t1vbad6udcgpra0jkj6.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const createUser = () => {
    setLoading(true);
    setError(''); // Clear previous errors
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        setLoading(false);
        navigation.navigate('SignIn');
      })
      .catch((error) => {
        setLoading(false);
        const err = error as any;
        if (err.code === 'auth/email-already-in-use') {
          setError('That email address is already in use!');
        } else if (err.code === 'auth/invalid-email') {
          setError('That email address is invalid!');
        } else {
          setError('An error occurred. Please try again.');
        }
        console.error(error);
      });
  };

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      const response: any = await GoogleSignin.signIn();
  
      // Access idToken as any to avoid TypeScript errors
      const idToken = response.idToken;
  // 
      // if (idToken) {
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
        console.log('User signed in with Google!');
        setLoading(false);
        navigation.navigate('Successfull');
      // } else {
      //   setError('Google Sign-In was canceled');
      //   setLoading(false);
      // }
    } catch (error) {
      setLoading(false);
      // const err = error as any;
      // if (err.code === statusCodes.SIGN_IN_CANCELLED) {
      //   setError('Sign-in was canceled by the user');
      // } else if (err.code === statusCodes.IN_PROGRESS) {
      //   setError('Sign-in is already in progress');
      // } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   setError('Play Services not available or outdated');
      // } else {
      //   setError('An error occurred with Google Sign-In. Please try again.');
      // }
      console.error('Google Sign-In Error:', error);
      console.log(error)
    }
  };
  
  

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Your Email"
        placeholderTextColor={"black"}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Your Password"
        placeholderTextColor={"black"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.input, styles.marginTop]}
      />
      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={createUser}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.orText}>OR</Text>
      
      <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
        <Image
          source={require('./google.png')}
          style={styles.googleLogo}
        />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { width: '90%', height: 50, borderWidth: 0.5, borderRadius: 20, paddingLeft: 20, color: 'black' },
  marginTop: { marginTop: 30 },
  button: { width: '90%', height: 50, borderRadius: 20, marginTop: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  buttonText: { color: '#fff' },
  errorText: { color: 'red', marginTop: 10 },
  orText: { marginTop: 20, fontSize: 16, color: '#000' },
  googleButton: { 
    width: '90%', 
    height: 50, 
    borderRadius: 20, 
    marginTop: 20, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#000' 
  },
  googleLogo: { width: 24, height: 24, marginRight: 10 },
  googleButtonText: { color: '#fff', fontSize: 16 }
});

export default CreateUser;
