import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons,Entypo } from "@expo/vector-icons"
import ChatsScreen from "../Screens/ChatsScreen";
import NotImplementedScreen from "../Screens/NotImplementedScreen";
import SettingScreen from "../Screens/SettingScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator 
    initialRouteName="Discuss"
    screenOptions={{
      tabBarStyle: { backgroundColor: "whitesmoke" },
      headerStyle: { backgroundColor: "whitesmoke" },
    }}
    >
      <Tab.Screen name="Status" component={NotImplementedScreen} 
        options={{tabBarIcon: ({ color, size }) => (
        <Ionicons name="logo-whatsapp" size={size} color={color} />)}}
      />
      <Tab.Screen name="Calls" component={NotImplementedScreen} 
        options={{tabBarIcon: ({ color, size }) => (
        <Ionicons name="call-outline" size={size} color={color} />)}}
      />
      <Tab.Screen name="Camera" component={NotImplementedScreen} 
        options={{tabBarIcon: ({ color, size }) => (
        <Ionicons name="camera-outline" size={size} color={color} />)}}
      />
      <Tab.Screen name="Discuss" component={ChatsScreen}
        options={({navigation}) => ({tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />),
        headerRight: () => (
            <Entypo
              name="new-message"
              size={18}
              color={"royalblue"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("Contacts")}
            />
          ),})}
      />
      <Tab.Screen name="Settings" component={SettingScreen} 
        options={{tabBarIcon: ({ color, size }) => (
        <Ionicons name="settings-outline" size={size} color={color} />)}}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;    