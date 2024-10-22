import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, StatusBar, Platform,  } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { Dropdown } from 'react-native-element-dropdown';


const Registration: React.FC = () => {
    const[show, setShow] = useState<boolean>(true);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');
    // const [ countryCode, setCountryCode] = useState<string>('+1');
    // const [isDropdownFocused, setIsDropdownFocused] = useState<boolean>(false);
    useEffect(() => {
        // Make the status bar transparent
        StatusBar.setBarStyle('dark-content'); // Dark icons for better visibility
        if (Platform.OS === 'android') {
          StatusBar.setTranslucent(true);
          StatusBar.setBackgroundColor('transparent');
        }
      }, []);
    const countries = [
        { label: '+1 (US)', value: '+1' },
        { label: '+44 (UK)', value: '+44' },
        { label: '+91 (India)', value: '+91' },
    ];
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Image 
         source={require('../assets/backarrow.png')} style={{width: "6%", height:20, marginLeft: 5, top: 25}}
         />
        </TouchableOpacity>
        <View>
            <Text style={{fontSize: 23, color: '#FF9401', textAlign: 'center',}}>
                Registration
            </Text>
            <Text style={{fontSize:25, color:'black', textAlign:'center', paddingTop:30,}}>
                Enter your Phone No.
            </Text>
            <Text style={{fontSize: 20, color: 'gray', textAlign: 'center', paddingTop: 20, marginHorizontal: 10}}>
                Please enter your phone number. We will send OTP to verify
            </Text>
            <Text style={{color:"black", paddingLeft:40, marginTop:45}}>
                Phone Number
            </Text>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder='Enter Phone Number'
                placeholderTextColor="gray"
                keyboardType='phone-pad'
                maxLength={15}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                />
            </View>
            {/* <View style={styles.phoneContainer}>
                    <Dropdown
                        style={[
                            styles.dropdown,
                            isDropdownFocused && { borderColor: '#FF9401' },
                        ]}
                        data={countries}
                        labelField="label"
                        valueField="value"
                        placeholder={!isDropdownFocused ? 'Select Code' : '...'}
                        value={countryCode}
                        onFocus={() => setIsDropdownFocused(true)}
                        onBlur={() => setIsDropdownFocused(false)}
                        onChange={(item) => setCountryCode(item.value)}
                    />
                    <TextInput
                        style={styles.phoneInput}
                        placeholder="Enter Phone Number"
                        placeholderTextColor="gray"
                        keyboardType="phone-pad"
                        maxLength={15}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View> */}
                
            <Text style={{color:'black', paddingLeft: 40, marginTop:15}}> 
                Create Password
            </Text>
           
            <View style={styles.inputContainer}>
                <View style={styles.passwordContainer}>
            <TextInput
                style={styles.inputPassword}
                placeholder='Create Password'
                placeholderTextColor="gray"
                secureTextEntry={show}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShow(!show)}>
                <Image
                source={show ? require('../assets/eye.png') : require('../assets/eyeoff.png')}
                style={styles.eyeIcon}
            />
        </TouchableOpacity>
    </View>
</View>

            <Text style={{color: "gray", paddingLeft: 40}}>
                Min. 8 Characters
            </Text>
            <Text style={{color: "black", paddingLeft: 40, marginTop: 25}}>
                Re-enter Password
            </Text>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder='Re-enter Password'
                placeholderTextColor={"gray"}
                secureTextEntry={true}
                value={rePassword}
                onChangeText={setRePassword}
                />
            </View>
        </View>
        <View style={{alignItems: 'center', paddingTop: 250}}>
            <TouchableOpacity style= {styles.button}>
                <Text style={{color: 'white'}}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Registration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Ensure content starts below the status bar
        backgroundColor: 'white',
      },
    inputContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    inputPassword: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: 'black',
    },
    eyeIcon: {
        width: 20,
        height: 14,
        marginRight: 8, // Add some space between the icon and the input's edge.
        marginTop:10,
    },
    button: {
        backgroundColor: '#FF9401',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '60%',
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        padding: 10,
        marginBottom: 10,
        color: 'black',
        fontSize: 16,
    },
    phoneContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        width:"25%",
        borderBottomWidth: 1,
        borderBlockColor: 'gray',
    },
    phoneInput: {
        width: '55%',
        borderBottomWidth: 1,
        borderBlockColor: "gray",
        padding: 10,
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
    },
    dropdown: {
        width: '25%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'white',
    },
    
});
