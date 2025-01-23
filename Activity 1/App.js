import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
    
      <Text style={{ textAlign: "center"}}>Duran, Gabriel Martin V.</Text>
      <View>
        
        <Text style={{ textAlign: "center"}}> IT-302 </Text>
        
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.KxUtABZCawEDr5eLnyLSvAHaFj?w=224&h=180&c=7&r=0&o=5&pid=1.7',
          }}
          style={{width: 200, height: 200, alignSelf: 'center',}}
          
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
        style={{
          textAlign: 'center',
        }}
      />
    </ScrollView>
  );
};

export default App;