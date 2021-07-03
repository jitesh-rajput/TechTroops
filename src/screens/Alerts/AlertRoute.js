import FeedScreen from "./OppAlert";
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import JobAlert from "./JobAlert";
import OppAlert from "./OppAlert";
import JobDetail from "./JobDetail";
import OppDetail from "./OppDetail";
const TopTabs = createMaterialTopTabNavigator();
const JobScreenTab = createStackNavigator();
const OppScreenTab = createStackNavigator();
const AlertRoute = ({ navigation }) => (
    <TopTabs.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }} style={{ marginTop: 30 }}>
        <TopTabs.Screen name="Job" component={JobRoute}
        />
        <TopTabs.Screen name="Opportunity" component={ComRoute}
        />
    </TopTabs.Navigator>
);

export default AlertRoute;

const JobRoute = ({ navigation }) => (
    <JobScreenTab.Navigator initialRouteName="Job Alert">
        <JobScreenTab.Screen name="Job Alert" component={JobAlert} options={{ headerShown: false }} />
        <JobScreenTab.Screen name="Job Detail" component={JobDetail} options={{ headerShown: false }} />
    </JobScreenTab.Navigator>
)

const ComRoute = ({ navigation }) => (
    <OppScreenTab.Navigator initialRouteName="Opp Alert">
        <OppScreenTab.Screen name="Opp Alert" component={OppAlert} options={{ headerShown: false }} />
        <OppScreenTab.Screen name="Opp Detail" component={OppDetail} options={{ headerShown: false }} />
    </OppScreenTab.Navigator>
)