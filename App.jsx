import React from 'react';

import {Button, Text, View} from 'react-native';

function App() {
  const fruit = () => {
    console.warn('Function called');
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Hi</Text>
      <Button title={`'Press Me'`} />
    </View>
  );
}

export default App;
