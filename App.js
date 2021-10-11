import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, Switch, Alert, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';


export default class App extends React.Component {
    state = {
        toggled: false,
        items: {}
        // toggleColor: true
    }

    changeCheckBox(item) {
        const newState = !item.toggleColor;
        item.toggleColor = newState;
        this.setState({toggleColor:newState})
    }

    toggleSwitch = (value) => {
        this.setState({toggled: value})
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
                <Agenda
                    items={this.state.items}
                    loadItemsForMonth={this.loadItems.bind(this)}
                    selected={'2021-04-02'}

                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );

    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                            toggleColor: false
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {
                newItems[key] = this.state.items[key];
            });
            this.setState({
                items: newItems
            });
        }, 1000);
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    renderItem(item) {
        // const {toggleColor} = item.toggleColor;
        const checkBoxColor = item.toggleColor ?"red":"white";
        return (
            <View style={styles.item} onPress={() => Alert.alert(item.name)}>
                <View>
                    <Text>{item.name}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => this.changeCheckBox(item)}
                    style={{
                        borderWidth: 0.5,
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        marginLeft: 250,
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: -5,
                        backgroundColor: checkBoxColor
                    }}/>
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
    },

    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    },

    checkBox: {
        // backgroundColor: 'white',
        // borderColor: 'black',
        // borderWidth: 0.5,
        // width: 20,
        // height: 20,
        // borderRadius: 10,
        // marginLeft: 250,
        // justifyContent: 'center',
        // alignContent: 'center',
        // marginTop: -5
    }


});
