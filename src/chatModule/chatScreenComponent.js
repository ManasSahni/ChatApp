import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MainStyles from './styles/styles';
import Styles from './styles/styles';

export default function ChatScreenComponent({
  serverMessages,
  serverState,
  submitMessage,
  messageText,
  setMessageText,
  disableButton,
  inputFieldEmpty,
  setInputFieldEmpty,
  username,
}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 30,
          backgroundColor: '#6C4AB6',
          padding: 5,
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%',
          alignSelf: 'center',
        }}>
        <View
          style={[
            serverState === 'Online'
              ? MainStyles.serverStateSignalOnline
              : MainStyles.serverStateSignalOffline,
          ]}></View>
        <Text style={{color: 'white'}}>{serverState}</Text>
      </View>
      <View
        style={{
          margin: 10,
          backgroundColor: '#d3c7ed',
          padding: 8,
          flexGrow: 1,
          borderRadius: 10,
          elevation: 15,
        }}>
        <ScrollView>
          {serverMessages.map((item, ind) => {
            return (
              <View
                key={ind}
                style={[
                  JSON.parse(item)?.user?.toString() !== username?.toString()
                    ? {}
                    : MainStyles.alignSelfEnd,
                  {
                    backgroundColor: '#8161ad',
                    margin: 8,
                    borderRadius: 5,
                    width: '50%',
                    elevation: 7,
                  },
                ]}>
                <Text
                  style={{
                    color: 'white',
                    marginHorizontal: 12,
                    marginVertical: 2,
                  }}>
                  {JSON.parse(item)?.user}
                </Text>
                <View
                  key={ind}
                  style={{
                    backgroundColor: 'white',
                    padding: 12,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                  }}>
                  <Text style={{color: '#8161ad'}}>
                    {JSON.parse(item)?.msg}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: '3%',
          marginVertical: '2%',
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
            placeholder={'Add Message'}
            onChangeText={text => {
              setMessageText(text);
              setInputFieldEmpty(text.length > 0 ? false : true);
            }}
            value={messageText}
          />
        </View>
        <Button
          onPress={submitMessage}
          title={'Submit'}
          disabled={disableButton || inputFieldEmpty}
          // color="#cbbbf0"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8D72E1',
    paddingTop: 30,
    padding: 8,
  },
});
