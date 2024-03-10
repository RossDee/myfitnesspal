import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'gainsboro',
          padding: 10,
          borderRadius: 5,
          gap: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pizza</Text>
        <Text style={{ color: 'dimgray' }}>350 cal, Dominos</Text>
        <AntDesign
          name='pluscircleo'
          size={24}
          color='royalblue'
        />
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
