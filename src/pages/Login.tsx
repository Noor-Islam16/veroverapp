import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  Dimensions, 
  TextInput 
} from "react-native";

const { height, width } = Dimensions.get("window");

const Login: React.FC = () => {
  const [secureEntry, setSecureEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureEntry((prev) => !prev);
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity>
        <Image 
          source={require('../assets/backarrow.png')} 
          style={{ width: "6%", height: 20, marginLeft: 5, top: 25 }}
        />
      </TouchableOpacity>

      <View style={{ paddingHorizontal: 5 }}>
        <View style={{ padding: 20 }}>
          <Image
            source={require("../assets/verover.png")}
            style={styles.headingImage}
          />
          <View style={{ marginTop: 25 }}>
            <Text style={styles.labelText}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Mobile Number or Email ID"
                keyboardType="default"
                placeholderTextColor="gray"
                maxLength={100}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.labelText}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Password"
                  placeholderTextColor="gray"
                  secureTextEntry={secureEntry}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Image 
                    source={secureEntry ? require('../assets/eye.png') : require('../assets/eyeoff.png')}
                    style={{ width: 28, height: 28, marginRight: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={{ marginTop: 5 }}>
              <Text style={styles.passText}>Forget Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or Login with</Text>

            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <Image 
                  source={require('../assets/google1.png')} 
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.socialButton, { marginHorizontal: 20 }]}>
                <Image 
                  source={require('../assets/fb.png')} 
                  style={{ width: 10, height: 25 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image 
                  source={require('../assets/apple.png')} 
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </View>

            <Image
              source={require('../assets/Curve.png')}
              style={{ height: 250, width: "120%", alignSelf: "center", marginRight: 20, marginTop: 30 }}
            />

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: '#ffffff',
                    fontWeight: 'bold',
                    marginRight: 7,
                  }}
                >
                  Sign In
                </Text>
                <Image 
                  source={require('../assets/arrow.png')} 
                  style={{ width: "10%", height: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  headingImage: {
    height: 48,
    width: 192,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 50,
  },
  labelText: {
    fontSize: 12,
    color: "#000000",
    marginBottom: 5,
  },
  passText: {
    fontSize: 12,
    color: "#F99026",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#000000",
    borderBottomWidth: 1,
  },
  textInput: {
    color: "#000000",
    flex: 1,
    height: 40,
    paddingHorizontal: 0,
  },
  button: {
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 20,
    elevation: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  orText: {
    color: "#808080",
    fontSize: 13,
    textAlign: "center",
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  socialButton: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 10,
    elevation: 5,
  },
});
