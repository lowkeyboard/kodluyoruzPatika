import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {CONFIG} from './src/storage/config';
const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  useEffect(() => {
    restoreTodosFromAsync();
  }, []);

  const storeTodosInAsync = newTodos => {
    const stringifiedTodos = JSON.stringify(newTodos);

    AsyncStorage.setItem(CONFIG.asyncStorageKey, stringifiedTodos).catch(
      err => {
        console.warn('Error storing todos in Async');
        console.warn(err);
      },
    );
  };

  const restoreTodosFromAsync = () => {
    AsyncStorage.getItem(CONFIG.asyncStorageKey)
      .then(stringifiedTodos => {
        console.log('Restored Todos:');
        console.log(stringifiedTodos);
        const parsedTodos = JSON.parse(stringifiedTodos);
        if (!parsedTodos || typeof parsedTodos !== 'object') return;
        setTodoItems(parsedTodos);
      })
      .catch(err => {
        console.warn('Error restoring todos from async');
        console.warn(err);
      });
  };

  const [text, setText] = useState('');

  changeText = text => setText(text);

  const addTodoItem = () => {
    if (text.length > 0) {
      const newTodos = [
        {id: uuidv4(), task: text, isComplete: false},
        ...todoItems,
      ];
      setTodoItems(newTodos);
      storeTodosInAsync(newTodos);
    }
    setText('');
  };

  const completeTodoItem = id => {
    AsyncStorage.getItem(CONFIG.asyncStorageKey)
      .then(stringifiedTodos => {
        console.log('Restored Todos:');
        console.log(stringifiedTodos);
        const parsedTodos = JSON.parse(stringifiedTodos);

        parsedTodos.filter(function (todo) {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
        });

        if (!parsedTodos || typeof parsedTodos !== 'object') return;
        setTodoItems(parsedTodos);
        storeTodosInAsync(parsedTodos);
      })
      .catch(err => {
        console.warn('Error restoring todos from async');
        console.warn(err);
      });
  };

  const removeTodoItem = idToRemove =>
    setTodoItems(
      AsyncStorage.getItem(CONFIG.asyncStorageKey)
        .then(stringifiedTodos => {
          console.log('Restored Todos:');
          console.log(stringifiedTodos);
          const parsedTodos = JSON.parse(stringifiedTodos);

          const filteredTodos = parsedTodos.filter(
            todo => todo.id !== idToRemove,
          );

          if (!filteredTodos || typeof filteredTodos !== 'object') return;
          setTodoItems(filteredTodos);
          storeTodosInAsync(filteredTodos);
        })
        .catch(err => {
          console.warn('Error restoring todos from async');
          console.warn(err);
        }),
    );

  return (
    <>
      <ListTodo
        todoItems={todoItems}
        completeTodoItem={completeTodoItem}
        removeTodoItem={removeTodoItem}
      />

      <View style={styles.inputArea}>
        <TextInput
          style={styles.textInput}
          placeholder="Add task ..."
          value={text}
          onChangeText={changeText}
          onSubmitEditing={addTodoItem}
        />
        <TouchableOpacity style={styles.inputAdd} onPress={addTodoItem}>
          <Text style={{textAlign: 'center'}}>Save</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'flex-start',
    backgroundColor: '#221F62',
  },
  inputArea: {
    flex: 1,
    bottom: 0,
    backgroundColor: '#D1D0E5',
    position: 'absolute',
    padding: 40,
    margin: 20,
    right: 10,
    left: 10,
    borderRadius: 15,
  },
  inputText: {
    paddingBottom: 10,
    marginBottom: 2,
    height: 40,
    color: '#20232a',
  },

  inputAdd: {
    backgroundColor: '#F4A108',
    borderRadius: 15,
    padding: 10,
  },
  itemText: {
    color: '#ffffff',
    fontSize: 30,
  },
  textComplete: {
    textDecorationLine: 'line-through',
  },
  button: {
    maxWidth: 120,
    position: 'relative',
    margin: 3,

    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#007bff',
  },
  buttonSuccess: {
    backgroundColor: '#28a745',
  },
  buttonRemove: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'right',
  },
});

export default App;

const ListTodo = ({todoItems, completeTodoItem, removeTodoItem}) => (
  <View style={styles.container}>
    <Text style={{fontSize: 40, color: 'aqua'}}>To-Do List</Text>

    <FlatList
      data={todoItems}
      renderItem={({item}) => (
        <MyItem
          task={item.task}
          isComplete={item.isComplete}
          complete={() => completeTodoItem(item.id)}
          remove={() => removeTodoItem(item.id)}
        />
      )}
      keyExtractor={item => item.id}
    />
  </View>
);

const MyItem = ({task, isComplete, complete, remove}) => {
  return (
    <View>
      <Text style={styles.itemText}>{task}</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonSuccess]}
        onPress={complete}>
        <Text style={styles.buttonText}>
          {isComplete ? 'notCompleted' : 'Completed'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonRemove]}
        onPress={remove}>
        <Text style={styles.buttonText}>Remove Task</Text>
      </TouchableOpacity>
    </View>
  );
};

MyItem.defaultProps = {
  task: 'Default Tasks',
  isComplete: false,
  complete: () => {},
  remove: () => {},
};
