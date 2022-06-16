import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import TextScreen from './screens/TextScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            if (route.name === 'Accueil') {
              if (Platform.OS == 'ios') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              } else {
                iconName = focused ? 'md-information-circle' : 'md-information-circle-outline';
              }
            } else if (route.name === 'Image') {
              if (Platform.OS == 'ios') {
                iconName = focused ? 'ios-image' : 'ios-image-outline';
              } else {
                iconName = focused ? 'md-image' : 'md-image-outline';
              }
            } else if (route.name === 'Text') {
              if (Platform.OS == 'ios') {
                iconName = focused ? 'ios-document-text' : 'ios-document-text-outline';
              } else {
                iconName = focused ? 'md-document-text' : 'md-document-text-outline';
              }
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'rgba(8,2,55, 1)',
          tabBarInactiveTintColor: 'rgba(8,2,55, 0.5)',
        })}>
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Text" component={TextScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



