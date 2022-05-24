import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import CustomHeader from './src/navigation/CustomHeader';
import { StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();


const App = () => {

    useEffect(() => {
        SplashScreen.hide();
    }, [])


    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: '#404554',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    header: (props) => {
                        return <CustomHeader {...props} />;
                    },
                }}>
                <Stack.Screen name="MainDrawer" component={DrawerNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
});

export default App;