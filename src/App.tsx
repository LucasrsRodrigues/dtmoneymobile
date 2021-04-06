import React from 'react';
import { View, StatusBar } from 'react-native';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5429CC" />
      <View style={{ flex:1, backgroundColor: '#F0F2F5' }} >
        <Header />
        <Dashboard />
      </View>
    </>
  );
}

export default App;
