import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {

    const [entered, setEntered] = useState('')

    const goalInputHandler = (enteredText) => {
        console.log(enteredText);
        setEntered(enteredText);
    };

    const addGoalHandler = () => {
        props.addGoal(entered);
        setEntered('');
        console.log("AFTER aaD", entered);
    };



    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Course goal"
                        style={styles.input}
                        onChangeText={goalInputHandler}
                        value={entered}
                    />
                    <View style={styles.inputButtons}>
                        <View style={styles.button}>
                            <Button title="CANCEL"
                                color='red'
                                onPress={props.onCancel}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button title="ADD NEW"
                                onPress={addGoalHandler}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    inputButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '60%'
    },
    button: {
        width: "40%"
    }
});

export default GoalInput;