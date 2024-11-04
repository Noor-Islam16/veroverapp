import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const EmailPassAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
    }
    const userSignIn = () => {
        auth()
        .signInWithEmailAndPassword(email,password)
        .then(() => {
            console.log('User Signed in!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
    
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
    
            console.error(error);
    });
}

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Enter Your Email"
        value={email}
        onChangeText={txt => setEmail(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 0.5,
          borderRadius: 20,
          paddingLeft: 20,
        }}
      />

      <TextInput
        placeholder="Enter Your Password"
        value={password}
        onChangeText={txt => setPassword(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 0.5,
          borderRadius: 20,
          marginTop: 30,
          paddingLeft: 20,
        }}
      />

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderRadius: 20,
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}
        onPress={() => {
        //   createUser();
        userSignIn();
        }}>
        {/* <Text style={{color: '#fff'}}>Create Account?</Text> */}
        <Text style={{color: '#fff'}}>Signed In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailPassAuth;
