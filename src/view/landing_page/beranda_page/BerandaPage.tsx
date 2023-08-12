import React, {Component} from "react";
import { SafeAreaView, Text, View } from "react-native";
import BerandaPageStyle from "../../../style/berandapage_style/BerandaPageStyle"

class BerandaPage extends Component {

    render(): React.ReactNode {
        return (
            <SafeAreaView>
                <View style={BerandaPageStyle.style.container}>
                    <Text style={BerandaPageStyle.style.container}>Beranda Screen</Text>
                </View>
            </SafeAreaView>
        );
    }
    
}

export default BerandaPage;