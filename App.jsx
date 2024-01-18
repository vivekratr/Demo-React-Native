import React from 'react';

import {Button, Text, View} from 'react-native';

function App() {
  const fruit = () => {
    console.warn('Function called');
  };
  const textStyle = {fontSize: 30};
  return (
    <View>
      <Text style={textStyle}>Hi</Text>
      <Button onPress={fruit} title={"'Press Me'"} />
    </View>
  );
}

export default App;
