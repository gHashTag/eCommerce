import React from 'react'
import {StyleSheet, View, Pressable} from 'react-native'
import {vs} from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Text, Space} from '../'
import {WHITE, winWidth} from '../../constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingLeft: winWidth * 0.015,
    justifyContent: 'flex-start',
    height: vs(66),
    flexDirection: 'row',
    paddingRight: winWidth * 0.015,
  },
  textStyle: {
    color: WHITE,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconStyle: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    // marginRight: vs(10),
  },
})

interface SmallTextHeaderT {
  title: string
  onPress: () => void
  onPressSearch: () => void
}

function SearchSmallHeader({
  title = 'Example Title',
  onPress,
  onPressSearch,
}: SmallTextHeaderT) {
  const {container, textStyle, textContainer, iconStyle} = styles
  return (
    <View style={container}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [{opacity: pressed ? 0.7 : 1}]}>
        <Ionicons name={'chevron-back'} size={vs(26)} color={WHITE} />
      </Pressable>
      <View style={textContainer}>
        <Text title={title} h1 textStyle={textStyle} />
      </View>
      <Space width={vs(5)} />
      <Pressable
        onPress={onPressSearch}
        style={({pressed}) => [{opacity: pressed ? 0.7 : 1}]}>
        <Ionicons
          name={'search'}
          size={vs(26)}
          color={WHITE}
          style={iconStyle}
        />
      </Pressable>
    </View>
  )
}

export {SearchSmallHeader}
