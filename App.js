import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {RestaurantsScreen} from "./src/features/resturants/screens/resturants.screen";
import {ThemeProvider} from "styled-components/native";
import {theme} from "./src/infrastructure/theme";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Text} from "react-native";
import {useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald";
import {useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato";
import {SafeArea} from "./src/components/utility/safe-area.component";
import {Ionicons} from '@expo/vector-icons';
import {RestaurantsContextProvider} from "./src/services/restaurants/restaurants.context";



const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};


const screenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({size, color}) => (
          <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
    };
};

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>
const Map = () => <SafeArea><Text>Map</Text></SafeArea>


export default function App() {

    const [oswaldLoaded] = useOswald({
        Oswald_400Regular
    });


    const [latoLoaded] = useLato({
        Lato_400Regular
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantsContextProvider>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={screenOptions}>
                        <Tab.Screen name="Restaurants" component={RestaurantsScreen}/>
                        <Tab.Screen name="Map" component={Map}/>
                        <Tab.Screen name="Settings" component={Settings}/>
                    </Tab.Navigator>
                </NavigationContainer>
                </RestaurantsContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style='auto'/>
        </>

    );
}
