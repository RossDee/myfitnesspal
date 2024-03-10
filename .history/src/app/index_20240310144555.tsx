import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const FoodListItem = ({ item }) => {
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
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
        <Text style={{ color: 'dimgray' }}>
          {item.cal} col, {item.brand}
        </Text>
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
  return (
    <View style={styles.container}>
      <FoodListItem item={{ label: 'Pizza',, }} />
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
