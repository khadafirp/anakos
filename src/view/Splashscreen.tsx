import React, {Component} from "react";
import {View, Text, SafeAreaView} from "react-native";
import SplashScreenStyle from "../style/splashscreen_style/SplashScreenStyle";

class Splashscreen extends Component {

    render(): React.ReactNode {
        return (
            <SafeAreaView>
                <View style={SplashScreenStyle.style.container}>
                    <Text style={SplashScreenStyle.style.container}>Splash Screen</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default Splashscreen;