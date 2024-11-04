import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateUser from './src/CreateUser';
import SignIn from './src/SignIn';
import Successfull from './src/Succsessfull';

export type RootStackParamList = {
  CreateUser: undefined;
  SignIn: undefined;
  Successfull: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateUser">
        <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Create Account' }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Sign In' }} />
        <Stack.Screen name="Successfull" component={Successfull} options={{ title: 'Welcome' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
