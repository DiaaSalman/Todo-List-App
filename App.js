import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native'
import { useState } from 'react'
import Task from './Components/Task'
import Header from './Components/Header'
import EmptyState from './Components/EmptyState'

export default function App() {
  const [isActvie, setIsActive] = useState(false)
  const [task, setTask] = useState(null)
  const [taskItems, setTaskItems] = useState([])

  function handleSubmitTask() {
    if (task.trim().length === 0) {
      return
    }

    setTaskItems([...taskItems, task])
    setTask(null)
    setIsActive(false)
  }

  const buttonStyle = isActvie ? styles.activeButton : styles.disabledButton
  return (
    <>
      {taskItems.length !== 0 ? (
        <View style={styles.container}>
          <Header tasks={taskItems} setTasks={setTaskItems} />
          <ScrollView>
            <View style={styles.tasksContainer}>
              <Task tasks={taskItems} setTasks={setTaskItems} />
            </View>
          </ScrollView>
        </View>
      ) : (
        <EmptyState />
      )}

      <View style={styles.inputsContainer}>
        <TextInput
          value={task}
          placeholder="Add new task..."
          style={styles.input}
          placeholderTextColor="#DBDBDB"
          onChangeText={(text) => {
            setTask(text)
            if (text.trim().length === 0) setIsActive(false)
            else setIsActive(true)
          }}
        />
        <Pressable
          style={[styles.button, buttonStyle]}
          onPress={() => handleSubmitTask()}
        >
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    paddingTop: 48,
  },
  tasksContainer: {
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 196,
    gap: 8,
  },
  inputsContainer: {
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#DBDBDB',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    gap: 16,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    backgroundColor: '#FBFBFB',
    borderRadius: 8,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#5438DC',
  },
  disabledButton: {
    backgroundColor: '#74767D',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
    fontWeight: '700',
  },
})
