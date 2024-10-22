import {
    View,
    Text,
    StatusBar,
    Platform,
    TouchableOpacity,
    Image,
    StyleSheet,
  } from 'react-native';
  import React, { useEffect } from 'react';
  
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
        {/* Header Row with Back Arrow and Title */}
        <View style={styles.headerRow}>
          <TouchableOpacity>
            <Image
              source={require('../assets/backarrow.png')}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Registration</Text>
        </View>
  
        {/* Centered Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/numberverify.png')}
            style={styles.image}
          />
        </View>
  
        <Text style={styles.verifyText}>Success</Text>
        <Text style={styles.subtitle}>
          Your Phone Number is verified Successfully.
        </Text>
  
        <View style={{ alignItems: 'center', paddingTop: 50 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: 'white' }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default PhoneNumberVerified;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Ensure content starts below the status bar
      backgroundColor: 'white',
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center', // Vertically center the content
      paddingHorizontal: 10,
      marginTop: 25,
    },
    backArrow: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    title: {
      fontSize: 23,
      color: '#FF9401',
      textAlign: 'center',
      flex: 0.9, // Pushes the title to center
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
      marginHorizontal: 20,
    },
    button: {
      backgroundColor: '#FF9401',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      width: '60%',
    },
  });
  