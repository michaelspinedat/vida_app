import { scheme } from "../resources/global";

export const drawerItemsMain = [
    {
        key: 'Home',
        title: 'Home',
        routes: [{ nav: 'MainDrawer', routeName: 'Home', title: 'Home' }],
    },
    {
        key: '1.0',
        title: scheme["1.0"],
        routes: [{ nav: 'MainDrawer', routeName: '1.0', title: scheme["1.0"] }],
    },
    {
        key: '2.0',
        title: scheme["2.0"],
        routes: [
            { nav: 'MainDrawer', routeName: '2.1', title: scheme["2.1"] },
            { nav: 'MainDrawer', routeName: '2.2', title: scheme["2.2"] },
            { nav: 'MainDrawer', routeName: '2.3', title: scheme["2.3"] }
        ],
    },
    {
        key: '3.0',
        title: scheme["3.0"],
        routes: [{ nav: 'MainDrawer', routeName: '3.0', title: scheme["3.0"] }],
    },
    {
        key: '4.0',
        title: scheme["4.0"],
        routes: [
            { nav: 'MainDrawer', routeName: '4.1', title: scheme["4.1"] },
            { nav: 'MainDrawer', routeName: '4.2', title: scheme["4.2"] },
            { nav: 'MainDrawer', routeName: '4.3', title: scheme["4.3"] },
            { nav: 'MainDrawer', routeName: '4.4', title: scheme["4.4"] }
        ],
    },
    {
        key: '5.0',
        title: scheme["5.0"],
        routes: [
            { nav: 'MainDrawer', routeName: '5.1', title: scheme["5.1"] },
            { nav: 'MainDrawer', routeName: '5.2', title: scheme["5.2"] },
            { nav: 'MainDrawer', routeName: '5.3', title: scheme["5.3"] },
            { nav: 'MainDrawer', routeName: '5.4', title: scheme["5.4"] }
        ],
    },
    {
        key: '6.0',
        title: scheme["6.0"],
        routes: [
            { nav: 'MainDrawer', routeName: '6.1', title: scheme["6.1"] },
            { nav: 'MainDrawer', routeName: '6.2', title: scheme["6.2"] },
            { nav: 'MainDrawer', routeName: '6.3', title: scheme["6.3"] },
            { nav: 'MainDrawer', routeName: '6.4', title: scheme["6.4"] }
        ],
    },
    {
        key: '7.0',
        title: scheme["7.0"],
        routes: [{ nav: 'MainDrawer', routeName: '7.0', title: scheme["7.0"] }],
    },
];