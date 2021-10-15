import React from 'react';
import {Text, View, StyleSheet, Switch, Alert, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class App extends React.Component {

    // Model
    state = {
        toggled: false,
        items: {
            '2012-05-22': [{name: '9 AM - One 200 mg Paracetamol '}],
            '2012-05-23': [{name: '9 AM - One 200 mg Paracetamol'}, {name: '10 AM - One 500 mg Magnesium Tablet'}],
            '2012-05-24': [{name: '2 AM - One 200 mg Paracetamol'}],
            '2012-05-25': [{name: '9 AM - One 200 mg Ibuprofen'}, {name: '10 AM - One 500 mg Magnesium Tablet'}]
        }
    }

    // ViewModel
    toggleSwitch = (value) => {
        this.setState({toggled: value})
        if (value === true) {
            Alert.alert ("You will now receive medication reminder notifications");
        } else {
            Alert.alert ("Reminder notifications have been turned off");
        }
    }

    checkList(item) {
        const newState = !item.toggleColor;
        item.toggleColor = newState;
        this.setState({toggleColor: newState});
    }

    renderItem(item) {
        const checkBoxColor = item.toggleColor ? "#2DD312BF" : "white";
        return (
            <View style={styles.item}>
                <View>
                    <Text>{item.name}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => this.checkList(item)}
                    style={{
                        borderWidth: 2,
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        marginLeft: 290,
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: -5,
                        backgroundColor: checkBoxColor
                    }}/>
            </View>
        );
    }

    // View
    render() {
        return (
            <View style={styles.background}>
                <View style={styles.medicationHeaderContainer}>
                    <Text style={styles.medicationHeader}> Medication </Text>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => Alert.prompt(
                            "Add Medication",
                            "Enter time and name of Medicine",
                            [{
                                text: "Cancel",
                                //test
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                                {
                                    text: "OK",
                                    onPress: input => console.log("New item: "+input)
                                    // onPress: Alert.alert("HI")
                                }
                            ],
                        )}
                    >
                        <Text style={styles.addButton}> + </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.reminderAlertContainer}>
                    <Text style={styles.reminderAlertText}> Reminders </Text>
                    <Switch
                        onValueChange={this.toggleSwitch}
                        value={this.state.toggled}
                        style={styles.reminderAlertSwitch}/>
                </View>
                <Agenda
                    items={this.state.items}
                    selected={'2012-05-22'}
                    renderItem={this.renderItem.bind(this)}/>
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
    buttonContainer: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginLeft: 330,
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: -30,
        backgroundColor: '#85C1E9',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowColor: 'black',
        shadowOpacity: 0.4,

    },
    addButton: {
        fontSize: 40,
        bottom: 0,
        fontWeight: "bold",
        alignContent: 'center',
        marginLeft: 4,
        marginTop: -3,
        color: '#FFF'
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
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    }
});
