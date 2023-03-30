import * as React from 'react';
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import SecondPage from './screens/secondPage';
import Login from './screens/login';
import HomeSlidMall from './screens/homeSlidMall';
import Header from './pagesSlidMall/header';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SlidMall" component={HomeSlidMall} 
        options={{headerTitle: (props) => <Header {...props} />}}  />
        <Stack.Screen name="SecondPage" component={SecondPage} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}