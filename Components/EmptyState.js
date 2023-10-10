import { Image, StyleSheet, Text, View } from 'react-native'

const emptyState = require('../assets/emptyState.png')

function EmptyState() {
  return (
    <View style={styles.emptyItemsContainer}>
      <Image source={emptyState} style={styles.emptyStateImage} />
      <View style={styles.emptyStateText}>
        <Text style={styles.emptyStateTitle}>Your Tasks List is Empty!</Text>
        <Text style={styles.emptyStateSubTitle}>
          You don’t have any active tasks right now, Try to add some!
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  emptyItemsContainer: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },
  emptyStateImage: {
    width: 204,
    height: 235,
  },
  emptyStateText: {
    alignItems: 'center',
    textAlign: 'center',
    gap: 8,
  },
  emptyStateTitle: {
    color: '#303036',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
    textAlign: 'center',
  },
  emptyStateSubTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#74767D',
    textAlign: 'center',
    width: 294,
  },
})

export default EmptyState
