import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default function UserForm({
  username,
  setUsername,
  handleUsernameSubmit,
}) {
  return (
    <View style={{backgroundColor: 'beige', minHeight: '100%'}}>
      <View
        style={{
          marginVertical: '60%',
        }}>
        <Text style={{color: 'purple', fontSize: 18, alignSelf: 'center'}}>
          Please enter your user name:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: '3%',
            marginTop: '5%',
          }}>
          <View style={{width: '70%'}}>
            <TextInput
              style={{
                backgroundColor: '#7c64b5',
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#432882',
                flexGrow: 1,
                padding: 5,
                color: '#cabceb',
              }}
              placeholder={'Enter Username'}
              onChangeText={text => {
                setUsername(text);
                console.log({text});
              }}
              value={username}
            />
          </View>
          <Button
            onPress={() => handleUsernameSubmit()}
            title={'Submit'}
            color="#560c7a"
          />
        </View>
      </View>
    </View>
  );
}
