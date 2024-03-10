import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const FoodListItem = () => {
  return (
    <View
      style={{
        backgroundColor: 'gainsboro',
        padding: 10,
        borderRadius: 5,
        gap: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pizza</Text>
        <Text style={{ color: 'dimgray' }}>350 cal, Dominos</Text>
      </View>
      <AntDesign
        name='pluscircleo'
        size={24}
        color='royalblue'
      />
    </View>
  )
}

export default function App() {
  return <View style={styles.container}>{</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
})
