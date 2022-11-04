import { FlatList, ImageBackground,StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import bg from '../../assets/images/BG.png'
import Message from '../../src/components/Message';
import messages from '../../assets/data/messages.json';
import InputBox from '../../src/components/InputBox';
import { useEffect } from 'react';


const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useEffect(()=>{
    navigation.setOptions({ title: route.params.name });
  },[route.params.name]);
  
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
    style={styles.bg}
    >
    <ImageBackground source={bg} style={styles.bg}>
        <FlatList 
        data={messages} 
        renderItem={({item})=> <Message message={item}/>} 
        style={styles.list}
        inverted/>
        <InputBox/>
    </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
bg: {
    flex: 1,
},
list: {
  padding: 10,
},
})
export default ChatScreen;