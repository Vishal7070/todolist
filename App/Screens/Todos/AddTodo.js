import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import { connect } from 'react-redux';
import { addTodo } from '../../Redux/Actions';

const { height, width } = Dimensions.get('window');

function AddTodo(props) {
    const [text, setText] = useState("")

    const onAddTodo = () => {
        props.addTodo(text)
        setText("")
    }
    console.log("value==>", props.value)
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.textInput}
                        value={text}
                        onChangeText={(text) => setText(text)}
                        placeholder="Add Todo"
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.addBtnView}>
                    <TouchableOpacity style={styles.addBtn} onPress={onAddTodo}>
                        <Text style={styles.addBtnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
      
    },
    textInput: {
        width: width * 0.5,
        height: width * 0.1,
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    addBtnView: {
        marginLeft: 20,
    },
    addBtn: {
        backgroundColor: "#175FFF",
        borderRadius: 5,
        height: width * 0.1,
    },
    addBtnText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: "#FFF",
        fontSize: 25,
        fontWeight: 'bold'
    }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToPros = (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToPros)(AddTodo)