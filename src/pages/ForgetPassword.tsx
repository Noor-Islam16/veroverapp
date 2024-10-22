import {
    View,
    Text,
    StatusBar,
    Platform,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
  } from 'react-native';
  import React, { useEffect } from 'react';
  
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
  
  const PhoneNumberVerified = () => {
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
        {/* Back Arrow and Title in the same row */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('../assets/backarrow.png')}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Forget Password</Text>
        </View>
  
        {/* Centered Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/numberverify.png')}
            style={styles.image}
          />
        </View>
  
        <Text style={styles.subtitle}>
          Enter your Registered Email
        </Text>
        <Text style={styles.instructionText}>
          We will send link to Reset this on your Email address.
        </Text>
        <Text style={styles.emailLabel}>
          Email
        </Text>
        <View style={styles.inputContainer}>
          <Field placeholder="Enter your Email" />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: 'white' }}>
              Send Link
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default PhoneNumberVerified;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      paddingHorizontal: 15,
    },
    backArrow: {
      width: '230%',
      height: 17,
      marginRight: 10,
    },
    title: {
      fontSize: 23,
      color: '#FF9401',
      textAlign: 'center',
      flex: 0.95, // Allows the title to take up available space
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
    subtitle: {
      fontSize: 25,
      color: 'black',
      textAlign: 'center',
      paddingTop: 30,
    },
    instructionText: {
      fontSize: 20,
      color: 'gray',
      textAlign: 'center',
      paddingTop: 20,
      marginHorizontal: 20,
    },
    emailLabel: {
      color: 'black',
      paddingLeft: 45,
      marginTop: 25,
    },
    inputContainer: {
      alignItems: 'center',
    },
    buttonContainer: {
      alignItems: 'center',
      paddingTop: 280,
    },
    button: {
      backgroundColor: '#FF9401',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      width: '60%',
    },
  });
  