import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {Component} from "react";
import { View } from 'react-native';
import LoginPage from './login_page/LoginPage';
import RegisterPage from './register_page/RegisterPage';
import BerandaPage from './beranda_page/BerandaPage';

const Tab = createBottomTabNavigator();

class LandingPage extends Component {

    render(): React.ReactNode {
        return(
            <Tab.Navigator>
                <Tab.Screen name="Beranda" component={BerandaPage} />
                <Tab.Screen name="Masuk" component={LoginPage} />
            </Tab.Navigator>
        );
    }
}

export default LandingPage;