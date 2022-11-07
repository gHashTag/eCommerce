import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {BLACK, GRAY, PRIMARY, SUCCESS, WHITE, winWidth} from '../../constants'
import {
  Header,
  Space,
  Text,
  TwoColorText,
  CardProductOrderInfo,
  Button,
} from '../../components'
import {SafeAreaView} from 'react-native-safe-area-context'
import {vs} from 'react-native-size-matters'

interface OrderDetailsScreenT {
  delivered: boolean
  navigation: any
}

const cardsArray = [
  {
    id: 0,
    color: 'Gray',
    clothes: 'Pullover',
    size: 'L',
    price: '51',
    brand: 'Mango',
    units: '1',
    imageUri: 'https://martkin.ru/4173-large_default/kostyum-vulf.jpg',
  },
  {
    id: 1,
    color: 'Gray',
    clothes: 'Pullover',
    size: 'L',
    price: '51',
    brand: 'Mango',
    units: '1',
    imageUri: 'https://martkin.ru/4173-large_default/kostyum-vulf.jpg',
  },
  {
    id: 2,
    color: 'Gray',
    clothes: 'Pullover',
    size: 'L',
    price: '51',
    brand: 'Mango',
    units: '1',
    imageUri: 'https://martkin.ru/4173-large_default/kostyum-vulf.jpg',
  },
]

function OrderDetailsScreen({navigation, delivered}: OrderDetailsScreenT) {
  const {
    container,
    safeAreaViewStyle,
    textStyle,
    textStyleGray,
    textContainer,
    twoColorTextContainer,
    deliveredContainer,
    cardContainer,
    bottomViewContainer,
    actionsContainer,
  } = styles
  const deliveredColor = delivered ? {color: SUCCESS} : {color: PRIMARY}

  return (
    <SafeAreaView style={safeAreaViewStyle}>
      <Header onPress={navigation.goBack} title={'Order Details'} h2s />
      <ScrollView style={container}>
        <Space height={vs(20)} />
        <View style={textContainer}>
          <Text title={'Order №1947023'} h3 textStyle={textStyle} />
          <Text title={'05-12-2019'} h5 textStyle={textStyleGray} />
        </View>
        <View style={textContainer}>
          <View style={twoColorTextContainer}>
            <TwoColorText
              leftText={'Tracking number:'}
              rightText={'IW19011901091'}
            />
          </View>
          <View style={deliveredContainer}>
            <Text
              textStyle={deliveredColor}
              h4
              title={delivered ? 'Delivered' : 'Undelivered'}
            />
          </View>
        </View>
        <Space height={vs(8)} />
        <Text title={'3 items'} textStyle={textStyle} h4 />
        <Space height={vs(20)} />
        {cardsArray.map(item => (
          <View style={cardContainer}>
            <CardProductOrderInfo
              color={item.color}
              clothes={item.clothes}
              size={item.size}
              price={item.price}
              brand={item.brand}
              units={item.units}
              imageUri={item.imageUri}
            />
            <Space height={vs(20)} />
          </View>
        ))}
        <Space height={vs(7)} />
        <Text title={'Order information'} textStyle={textStyle} h4 />
        <View style={twoColorTextContainer}>
          <Space height={vs(15)} />
          <TwoColorText
            leftText={'Shipping adress:  '}
            rightText={
              '3 Newbridge Court, Chino Hills, \n CA 91709, United States'
            }
          />
          <Space height={vs(15)} />
          <TwoColorText
            leftText={'Payment method:  '}
            rightText={'**** **** **** 3947'}
          />
          <Space height={vs(15)} />
          <TwoColorText
            leftText={'Delivery method:  '}
            rightText={'FedEx, 3 days, 15$'}
          />
          <Space height={vs(15)} />
          <TwoColorText
            leftText={'Discount:              '}
            rightText={'10%, Personal promo code'}
          />
          <Space height={vs(15)} />
          <TwoColorText leftText={'Total amount:       '} rightText={'133$'} />
          <Space height={vs(100)} />
        </View>
      </ScrollView>
      <View style={bottomViewContainer}>
        <View style={actionsContainer}>
          <Button
            isSmall={true}
            isOutline={true}
            title={'Recorder'}
            onPress={() => {}}
          />
          <Button
            isSmall={true}
            isOutline={false}
            title={'Leave feedback'}
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: vs(42) / 2,
    paddingLeft: vs(16),
    paddingRight: vs(16),
  },
  bottomViewContainer: {
    width: '100%',
    height: vs(94),
    backgroundColor: BLACK,
  },
  cardContainer: {
    alignSelf: 'center',
  },
  deliveredContainer: {
    paddingRight: winWidth * 0.05,
    justifyContent: 'center',
  },
  twoColorTextContainer: {
    paddingLeft: winWidth * 0.05,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: vs(8),
  },
  container: {
    backgroundColor: BLACK,
    width: '100%',
    height: '75%',
  },
  safeAreaViewStyle: {
    backgroundColor: BLACK,
  },
  textStyle: {
    color: WHITE,
    paddingLeft: winWidth * 0.05,
  },
  textStyleGray: {
    color: GRAY,
    paddingRight: winWidth * 0.05,
  },
})

export {OrderDetailsScreen}
