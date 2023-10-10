import React, { useState, useEffect } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const checkboxDefault = require('../assets/CheckboxDefault.png')
const checkboxClicked = require('../assets/CheckboxClicked.png')
const trash = require('../assets/trash.png')

function Task({ tasks, setTasks }) {
  const [checkedTasks, setCheckedTasks] = useState([])

  const handleToggleTask = (index) => {
    setCheckedTasks((prevCheckedTasks) => {
      const updatedCheckedTasks = [...prevCheckedTasks]
      updatedCheckedTasks[index] = !updatedCheckedTasks[index]
      return updatedCheckedTasks
    })
  }

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks]
      updatedTasks.splice(index, 1)
      return updatedTasks
    })

    setCheckedTasks((prevCheckedTasks) => {
      const updatedCheckedTasks = [...prevCheckedTasks]
      updatedCheckedTasks.splice(index, 1)
      return updatedCheckedTasks
    })
  }

  const checkedTaskCount = checkedTasks.filter((isChecked) => isChecked).length

  return (
    <>
      <Text style={styles.tasksComplete}>
        ({checkedTaskCount}/{tasks.length}) Completed Tasks
      </Text>
      {tasks.map((task, index) => {
        const isChecked = checkedTasks[index] || false

        return (
          <View style={styles.task} key={index}>
            <View style={styles.taskTextContainer}>
              <Pressable onPress={() => handleToggleTask(index)}>
                <Image
                  source={isChecked ? checkboxClicked : checkboxDefault}
                  style={styles.checkboxImage}
                />
              </Pressable>
              <Text
                style={[styles.taskText, isChecked ? styles.checkedTask : null]}
              >
                {task}
              </Text>
            </View>
            <Pressable
              style={styles.deleteTaskContainer}
              onPress={() => handleDeleteTask(index)}
            >
              <Image source={trash} style={styles.trash} />
            </Pressable>
          </View>
        )
      })}
    </>
  )
}

const styles = StyleSheet.create({
  tasksComplete: {
    lineHeight: 24,
    fontWeight: '500',
    color: '#74767D',
  },
  task: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 16,
    shadowColor: '#5438DC56',
  },
  taskTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkboxImage: {
    height: 20,
    width: 20,
  },
  taskText: {
    fontSize: 16,
    color: '#303036',
    fontWeight: '500',
    lineHeight: 24,
  },
  checkedTask: {
    color: '#DBDBDB',
  },
  deleteTaskContainer: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#ED0D0D14',
  },
  trash: {
    width: 16,
    height: 16,
  },
})

export default Task
