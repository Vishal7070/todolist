import React from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo } from '../../Redux/Actions';

function TodoList(props) {
    const { todos } = props;
    console.log("render Todos",todos);

    const onDeleteTodo = (id) => {
        props.deleteTodo(id);
    }
    return(
        <View style={styles.container}>
            <FlatList 
                data={todos}
                renderItem={({ item, index }) => (
                <TodoItem 
                todo={item} 
                onDeleteTodo={(id) => onDeleteTodo(id)}
                />
                )}
                ItemSeparatorComponent={() => (
                    <View style={styles.line} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    line: {
        borderBottomColor: "gray",
        borderBottomWidth: 1
    },
})

const mapStateToProps = state => ({
    todos: state.todos
  })

const mapDispatchToPros = (dispatch) => ({
    deleteTodo: (id) => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToPros)(TodoList)