import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Education from '../screens/Education';
import Information from '../screens/Information';
import Factors from '../screens/Factors';
import Actions from '../screens/Actions';
import Strategies from '../screens/Strategies';
import Tools from '../screens/Tools';
import Emotions from '../screens/Emotions';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Education" component={Education} />
            <Drawer.Screen name="Information" component={Information} />
            <Drawer.Screen name="Factors" component={Factors} />
            <Drawer.Screen name="Actions" component={Actions} />
            <Drawer.Screen name="Tools" component={Tools} />
            <Drawer.Screen name="Strategies" component={Strategies} />
            <Drawer.Screen name="Emotions" component={Emotions} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;