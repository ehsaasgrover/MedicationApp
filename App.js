import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, Switch} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class App extends React.Component {

    state = {
        toggled : false
    }

    toggleSwitch = (value) => {
        this.setState({toggled : value})
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.medicationHeaderContainer}>
                    <Text style={styles.medicationHeader}> Medication </Text>
                </View>
                <View style={styles.reminderAlertContainer}>
                    <Text style={styles.reminderAlertText}> Reminders </Text>
                    <Switch
                        onValueChange={this.toggleSwitch}
                        value={this.state.toggled}
                        style={styles.reminderAlertSwitch}/>
                </View>
                <Agenda></Agenda>
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
        backgroundColor: "#fff"
    },
    medicationHeader: {
        fontSize: 40,
        bottom: -30,
        fontWeight: "bold",
        marginLeft: 15
    },

    reminderAlertContainer: {
        marginTop: 5,
        height: '7%',
        width: '95%',
        backgroundColor: "#85C1E9",
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        marginLeft: 10
    },
    reminderAlertText: {
        fontSize: 30,
        bottom: -10,
        marginLeft: 15,
        color: '#fff',
        fontWeight: "bold",
    },
    reminderAlertSwitch: {
        bottom: 20,
        marginLeft: 320
    }

});
