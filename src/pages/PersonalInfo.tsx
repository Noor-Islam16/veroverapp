import React, { useEffect } from 'react';
import {TouchableOpacity, Image,StyleSheet, View, Text, TextInput, TextInputProps, StatusBar, Platform} from 'react-native';

interface FieldProps extends TextInputProps {
  placeholder: string;
}

const Field: React.FC<FieldProps> = (props) => {
  return (
    <TextInput
      {...props}
      placeholderTextColor="gray"
      style={{
        color: 'black',
        width: '80%',
        borderBottomWidth: 1,
        fontSize: 18,
        textDecorationLine: 'none',
      }}
    />
  );
};

const Personalinfo: React.FC = () => {
  useEffect(() => {
    // Make the status bar transparent
    StatusBar.setBarStyle('dark-content'); // Dark icons for better visibility
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
  }, []);
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Image 
         source={require('../assets/backarrow.png')} style={{width: "6%", height:20, marginLeft: 5, top: 25}}
         />
        </TouchableOpacity>
        <Text style={{fontSize: 23, color: '#FF9401', textAlign: 'center'}}>
          Registration
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            textAlign: 'center',
            paddingTop: 30,
          }}>
          Enter Your Personal info
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'gray',
            textAlign: 'center',
            paddingTop: 20,
          }}>
          Please enter the below details. We will send OTP to email to verify
        </Text>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          First name
        </Text>
        <View style={{alignItems: 'center'}}>
          <Field placeholder="Enter your First name" />
        </View>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          Last name
        </Text>
        <View style={{alignItems: 'center'}}>
          <Field placeholder="Enter your Last name" />
        </View>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          Enter email Id
        </Text>
        <View style={{alignItems: 'center'}}>
          <Field placeholder="Enter email Id" />
        </View>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          Country
        </Text>
        <View style={{alignItems: 'center'}}>
          <Field placeholder="Enter country name" />
        </View>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          State
        </Text>
        <View style={{alignItems: 'center'}}>
          <Field placeholder="Enter state name" />
        </View>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          ZIP code
        </Text>
        <View style={{alignItems: 'center'}}>
          <Field placeholder="Enter zip code" />
        </View>
        <View style={{alignItems: 'center', paddingTop: 60}}>
            <TouchableOpacity style= {styles.button}>
                <Text style={{color: 'white'}}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Ensure content starts below the status bar
    backgroundColor: 'white',
  },
    button: {
        backgroundColor: '#FF9401',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '60%',
    },
});

export default Personalinfo;