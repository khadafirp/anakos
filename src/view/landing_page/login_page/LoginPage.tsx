import React, {Component} from "react";
import { SafeAreaView, Text, View } from "react-native";
import LoginPageStyle from "../../../style/loginpage_style/LoginPageStyle"

class LoginPage extends Component {

    render(): React.ReactNode {
        return (
            <SafeAreaView>
                <View style={LoginPageStyle.style.container}>
                    <Text style={LoginPageStyle.style.container}>Login Screen</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default LoginPage;