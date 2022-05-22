import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import DrawerNavigation from "./src/navigation/DrawerNavigation";

const App = () => {
    return (
        <NavigationContainer>
            <DrawerNavigation />
            {/* <SafeAreaView style={styles.body}>
            </SafeAreaView> */}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default App;