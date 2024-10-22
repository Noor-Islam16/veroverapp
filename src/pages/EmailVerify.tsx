import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  StatusBar,
  Platform,
} from 'react-native';

const NumberVerify = () => {
  const [otp, setOtp] = useState(['', '', '', '']); // State for 4-digit OTP
  const inputRefs = useRef<TextInput[]>([]); // References to OTP input fields

  // Focus state to control dynamic border colors
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

   useEffect(() => {
    // Make the status bar transparent
    StatusBar.setBarStyle('dark-content'); // Dark icons for better visibility
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
  }, []);
  
  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return; // Ignore non-numeric input

    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    // Move to the next input if value is entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      // Move to the previous input field if Backspace is pressed on an empty field
      if (index > 0) inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../assets/backarrow.png')}
          style={{ width: '6%', height: 20, marginLeft: 5, top: 25 }}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>Registration</Text>

        {/* Centered Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/numberverify.png')}
            style={styles.image}
          />
        </View>

        <Text style={styles.verifyText}>Verify Email ID</Text>

        <Text style={styles.subtitle}>
          Enter the Verification Code sent to your Email ID
        </Text>

        {/* OTP Input Fields */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <View
              key={index}
              style={[
                styles.TextInputView,
                { borderColor: focusedIndex === index ? '#FF9401' : 'black' },
              ]}
            >
              <TextInput
                ref={(el) => (inputRefs.current[index] = el!)}
                style={styles.TextInputText}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
                onChangeText={(value) => handleChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                selectionColor="transparent"
              />
            </View>
          ))}
        </View>

        <Text style={styles.resendText}>Didn't receive OTP?</Text>
        <TouchableOpacity>
          <Text style={styles.resendButton}>Resend OTP</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', paddingTop: 130 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>Verify Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NumberVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Ensure content starts below the status bar
    backgroundColor: 'white',
  },
  title: {
    fontSize: 23,
    color: '#FF9401',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  verifyText: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    paddingTop: 30,
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
    paddingTop: 20,
    marginHorizontal: 50,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    paddingVertical: 50,
    alignSelf: 'center',
  },
  TextInputView: {
    borderWidth: 0.7,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  TextInputText: {
    fontSize: 20,
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  resendText: {
    textAlign: 'center',
    color: 'gray',
  },
  resendButton: {
    textAlign: 'center',
    color: '#FF9401',
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FF9401',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop:20,
    width: '60%',
  },
});
