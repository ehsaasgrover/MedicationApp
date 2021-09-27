import React from 'react';
import {View, Button} from 'react-native';

export default function App() {

    return (
        <View style={{
            backgroundColor: "#fff",
            flex: 1,
        }}>
            <View style={{
                backgroundColor: "dodgerblue",
                flex: 1,
            }}/>

            <Button
                color="red"
                title="Click Me"
                onPress={() => alert("Button tapped")}
            />

            <View style={{
                backgroundColor: "gold",
                flex: 1,
            }}/>

            <View style={{
                backgroundColor: "tomato",
                flex: 1,
            }}/>
        </View>
    );
}

 