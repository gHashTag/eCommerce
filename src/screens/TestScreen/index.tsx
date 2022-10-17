import React, {useState} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  StatusBar,
  ListRenderItem,
} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'

interface ItemT {
  id: number
  text: string
  count: number
}

function TestScreen() {
  const [initialElements, changeEl] = useState<ItemT[]>([
    {id: 1, text: 'Object 1', count: 0},
  ])

  const [exampleState, setExampleState] = useState(initialElements)
  const [idx, incr] = useState(2)

  const addElement = () => {
    const newArray = [
      ...initialElements,
      {id: idx, text: 'Object ' + idx, count: 0},
    ]
    incr(idx + 1)
    setExampleState(newArray)
    changeEl(newArray)
  }

  const increment = (id: number) => {
    const newState = exampleState.map(obj => {
      if (obj.id === id) {
        return {id, text: 'Object ' + id, count: obj.count + 1}
      }
      return obj
    })
    setExampleState(newState)
  }

  const decriment = (id: number) => {
    const newState = exampleState.map(obj => {
      if (obj.id === id) {
        return {
          id,
          text: 'Object ' + id,
          count: obj.count >= 1 ? obj.count - 1 : 0,
        }
      }
      return obj
    })
    setExampleState(newState)
  }

  const renderItem: ListRenderItem<ItemT> = ({item: {id, text, count}}) => {
    return (
      <View style={styles.direction}>
        <Text>{text}</Text>
        <Text> {'--- '}</Text>
        <Text>{count}</Text>
        <View style={styles.button}>
          <Button title="+" onPress={() => increment(id)} color="#841584" />
          <Button title="-" onPress={() => decriment(id)} color="#841584" />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={exampleState}
        renderItem={renderItem}
      />
      <Button title="Add element" onPress={addElement} color="#841584" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  direction: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingBottom: 10,
  },
  button: {
    flexDirection: 'row',
    bottom: 12,
  },
})

export {TestScreen}
