import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

function Header({ tasks, setTasks }) {
  function handleClearAll() {
    setTasks([])
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Todays’ Tasks</Text>
      </View>
      <Pressable
        style={styles.clearAllButtonContainer}
        onPress={handleClearAll}
      >
        <Text style={styles.clearAllButtonText}>Clear All</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  titleContainer: {
    gap: 4,
  },
  headerTitle: {
    fontSize: 24,
    color: '#303036',
    lineHeight: 32,
    fontWeight: '700',
  },

  clearAllButtonContainer: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  clearAllButtonText: {
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#5438DC',
  },
})

export default Header
