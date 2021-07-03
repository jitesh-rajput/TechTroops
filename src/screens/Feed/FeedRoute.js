import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AddPost from './AddPost';
import FeedScreen from "./FeedScreen";
const FeedTab = createStackNavigator();
const FeedRoute = ({ navigation }) => (
    <FeedTab.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <FeedTab.Screen name="Home" component={FeedScreen} options={{
            title: 'TechTroops',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()} />
            )
        }} />
        <FeedTab.Screen name="Add Post" component={AddPost} />
    </FeedTab.Navigator>
)
export default FeedRoute;