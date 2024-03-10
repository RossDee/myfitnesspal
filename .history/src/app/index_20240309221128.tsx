import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: 'gainsboro', padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: 'gray' }}>350 cal, Dominos</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
    padding: 20,
  },
})
