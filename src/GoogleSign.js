import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleSign = () => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '217106069180-ui75rlm2h9t3ma6ohra8ink3o61nq244.apps.googleusercontent.com', // Replace with your webClientId from Firebase Console
    });
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('Sign In Failed')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        console.log('Sign In Progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('Sign In Outdated')
      } else {
        // some other error happened
        console.log('Sign In error')
      }
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {userInfo != null && <Text>{userInfo.user.name}</Text>}
      {userInfo != null && <Text>{userInfo.user.email}</Text>}
      {/* {userInfo != null && <TImage>{userInfo.user.p}</Text>} */}
      {userInfo == null ? (
      <Text
        style={{padding: 20, borderWidth: 1}}
        onPress={() => {
          signIn();
        }}>
        GoogleSignIn
      </Text>) : (<Text style={{padding: 20, borderWidth: 1, marginTop: 20}}>
        GoogleSignOut
      </Text>)}
    </View>
  );
};

export default GoogleSign;
