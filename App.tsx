import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
// import {Navigation} from './src/Navigation';
import {Navigation} from './src'

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}

export {App}
