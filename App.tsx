import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './src/pages/Onboarding';
import { RootStackParamList } from './src/types/navigation'; // Import the types
import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import NumberVerify from './src/pages/NumberVerify';
import PhoneVerified from './src/pages/PhoneVerified';
import Personalinfo from './src/pages/PersonalInfo';
import PhoneNumberVerified from './src/pages/PhoneNumberVerified';
import ForgetPassword from './src/pages/ForgetPassword';
import EmailVerify from './src/pages/EmailVerify';
import EmailVerifiedSuccess from './src/pages/EmailVerifiedSuccess';
import EmailSentBack from './src/pages/EmailSentBack';

const Stack = createNativeStackNavigator<RootStackParamList>(); // Apply the types here

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Registration" component={Registration} /> */}
        {/* <Stack.Screen name="NumberVerify" component={NumberVerify} /> */}
        {/* <Stack.Screen name="PhoneVerified" component={PhoneVerified} /> */}
        {/* <Stack.Screen name="Personalinfo" component={Personalinfo} /> */}
        {/* <Stack.Screen name="PhoneNumberVerified" component={PhoneNumberVerified} /> */}
        {/* <Stack.Screen name="ForgetPassword" component={ForgetPassword} /> */}
        {/* <Stack.Screen name="EmailVerify" component={EmailVerify} /> */}
        {/* <Stack.Screen name="EmailSentBack" component={EmailSentBack} /> */}
        {/* <Stack.Screen name="EmailVerifiedSuccess" component={EmailVerifiedSuccess} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
