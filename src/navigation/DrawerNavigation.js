import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { drawerItemsMain } from './drawerItemsMain';
import CustomDrawerContent from './CustomDrawerContent.js';
import Information_1 from '../screens/information/Information_1';
import Information_2 from '../screens/information/Information_2';
import Information_3 from '../screens/information/Information_3';
import Education from '../screens/Education';
import Factors from '../screens/Factors';
import Actions_1 from '../screens/actions/Actions_1';
import Actions_2 from '../screens/actions/Actions_2';
import Actions_3 from '../screens/actions/Actions_3';
import Actions_4 from '../screens/actions/Actions_4';
import Tools_1 from '../screens/tools/Tools_1';
import Tools_2 from '../screens/tools/Tools_2';
import Tools_3 from '../screens/tools/Tools_3';
import Tools_4 from '../screens/tools/Tools_4';
import Strategies_1 from '../screens/strategies/Strategies_1';
import Strategies_2 from '../screens/strategies/Strategies_2';
import Strategies_3 from '../screens/strategies/Strategies_3';
import Strategies_4 from '../screens/strategies/Strategies_4';
import Emotions from '../screens/Emotions';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => (
                <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
            )}>
            <Drawer.Screen name="Home" component={Education} />
            <Drawer.Screen name="1.0" component={Education} />
            <Drawer.Screen name="2.1" component={Information_1} />
            <Drawer.Screen name="2.2" component={Information_2} />
            <Drawer.Screen name="2.3" component={Information_3} />
            <Drawer.Screen name="3.0" component={Factors} />
            <Drawer.Screen name="4.1" component={Actions_1} />
            <Drawer.Screen name="4.2" component={Actions_2} />
            <Drawer.Screen name="4.3" component={Actions_3} />
            <Drawer.Screen name="4.4" component={Actions_4} />
            <Drawer.Screen name="5.1" component={Tools_1} />
            <Drawer.Screen name="5.2" component={Tools_2} />
            <Drawer.Screen name="5.3" component={Tools_3} />
            <Drawer.Screen name="5.4" component={Tools_4} />
            <Drawer.Screen name="6.1" component={Strategies_1} />
            <Drawer.Screen name="6.2" component={Strategies_2} />
            <Drawer.Screen name="6.3" component={Strategies_3} />
            <Drawer.Screen name="6.4" component={Strategies_4} />
            <Drawer.Screen name="7.0" component={Emotions} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;