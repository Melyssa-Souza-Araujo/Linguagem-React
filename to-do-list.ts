// App.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa"
          value={newTask}
          onChangeText={setNewTask}
        />
        <Button title="Adicionar" onPress={addTask} />
      </View>

      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.task}>{item}</Text>
            <TouchableOpacity onPress={() => removeTask(index)}>
              <Text style={styles.remove}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  list: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  task: {
    fontSize: 16,
  },
  remove: {
    color: 'red',
  },
});
