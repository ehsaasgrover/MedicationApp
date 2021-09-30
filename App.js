import React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.background}>
                <View style={styles.medicationHeaderContainer}>
                    <Text style={styles.medicationHeader}> Medication </Text>
                </View>
                <View style={styles.reminderAlertContainer}/>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#fff"
    },
    medicationHeaderContainer: {
        marginTop: 40,
        height: "10%",
        backgroundColor: "dodgerblue"
    },
    medicationHeader: {
        fontSize: 40,
        bottom: -30
    },

    reminderAlertContainer: {
        marginTop: 5,
        height: '8%',
        width: '90%',
        backgroundColor: "dodgerblue",
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20
    }

});
