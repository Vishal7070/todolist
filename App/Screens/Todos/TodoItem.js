import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

function TodoItem(props) {
    const { todo } = props;
    return(
        <View style={styles.itemContainer}>
            <View style={styles.itemRow}>
                <View style={styles.textView}>
                    <Text style={styles.textStyles}>{todo.text}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.deleteBtn} onPress={() => props.onDeleteTodo(todo.id)}>
                        <Text style={styles.deleteBtnText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    itemRow: {
        flexDirection: 'row',
    },
    textView: {
        width: width * 0.7,
        justifyContent: 'center',
    },
    textStyles: {
        color: '#000',
        fontSize: 20
    },
    deleteBtn: {
        backgroundColor: '#008080',
        borderRadius: 5,
    },
    deleteBtnText: {
        color: "#FFF",
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})

export default TodoItem