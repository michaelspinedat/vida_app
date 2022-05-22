import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import DrawerNavigation from "./src/navigation/DrawerNavigation";

import App1 from "./src/prueba/App";

const App = () => {
    return (
        // <NavigationContainer>
        //     <DrawerNavigation />
        //     {/* <SafeAreaView style={styles.body}>
        //     </SafeAreaView> */}
        // </NavigationContainer>
        <App1 />
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