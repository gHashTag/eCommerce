import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {PopUp} from './components/'
import {Home} from './UI'
import {
  SuccessScreen,
  SignUpScreen,
  LoginScreen,
  PasswordScreen,
  FiltersListScreen,
  MyProfileScreen,
  FiltersScreen,
  MyOrdersScreen,
  SettingsScreen,
  MyBag,
  TestScreen,
  OrderDetailsScreen,
} from './screens'

const Stack = createNativeStackNavigator()

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OrderDetailsScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          component={PopUp}
          name={'POPUP'}
          options={{presentation: 'transparentModal', animation: 'fade'}}
        />
        <Stack.Screen component={Home} name={'HomeScreen'} />
        <Stack.Screen
          component={SuccessScreen}
          name={'SuccessScreen'}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          component={SignUpScreen}
          name={'SignUpScreen'}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          component={LoginScreen}
          name={'LoginScreen'}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          component={PasswordScreen}
          name={'PasswordScreen'}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          component={FiltersListScreen}
          name={'FiltersListScreen'}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          component={MyProfileScreen}
          name={'MyProfileScreen'}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          component={FiltersScreen}
          name={'FiltersScreen'}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          component={MyOrdersScreen}
          name={'MyOrdersScreen'}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          component={SettingsScreen}
          name={'SettingsScreen'}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          component={MyBag}
          name={'MyBag'}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          component={TestScreen}
          name={'TestScreen'}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          component={OrderDetailsScreen}
          name={'OrderDetailsScreen'}
          options={{animation: 'fade'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export {Navigation}
