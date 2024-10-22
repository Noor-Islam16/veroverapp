import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const NumberVerify = () => {
  return (
    <View style={{ marginTop: 10, height: '100%' }}>
      <TouchableOpacity>
        <Image
          source={require('../assets/backarrow.png')}
          style={{ width: '6%', height: 20, marginLeft: 5, top: 25 }}
        />
      </TouchableOpacity>

      <View>
        <Text style={{ fontSize: 23, color: '#FF9401', textAlign: 'center' }}>
          Registration
        </Text>

        {/* Centered Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/numberverify.png')}
            style={styles.image}
          />
        </View>

        <Text
          style={{
            fontSize: 25,
            color: 'black',
            textAlign: 'center',
            paddingTop: 30,
          }}>
          Verify OTP
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: 'gray',
            textAlign: 'center',
            paddingTop: 20,
            marginHorizontal: 10,
          }}>
          Enter the verification code sent to your Phone Number.
        </Text>

        <Text style={{ fontSize: 16, color: 'gray', textAlign: 'center' }}>
          Didn't receive OTP?
        </Text>
        <TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            color: '#FF9401',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Resend OTP
        </Text>
        </TouchableOpacity>
        
      </View>

      <View style={{ alignItems: 'center', paddingTop: 40 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NumberVerify;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  image: {
    width: 200, // Adjust the size as needed
    height: 200,
    resizeMode: 'contain', // Ensure the image scales properly
  },
  button: {
    backgroundColor: '#FF9401',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '60%',
  },
});
