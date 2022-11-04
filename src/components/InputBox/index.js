import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';
import { AntDesign,MaterialIcons  } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');
  const onSend = () => { setNewMessage('') };
  
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <AntDesign name="plus" size={20} color="royalblue"/>

      <TextInput placeholder='Start Discussion' style={styles.input} value={newMessage} onChangeText={setNewMessage}/>

      <MaterialIcons name='send' onPress={onSend} size={16} color="white" style={styles.send}/>
    </SafeAreaView>
  )
}

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
})