import { View, Button } from 'react-native';
import { Auth } from 'aws-amplify';
const SettingScreen = () => {
    
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItem: 'center'}}>
      <Button title="Sign out" onPress={()=> Auth.signOut()}/>
    </View>
  )
}

export default SettingScreen;