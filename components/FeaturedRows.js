import { View, Text } from 'react-native'
import React from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import RestaurantCard from './RestaurantCard';
const FeaturedRows = ({id,title, description, featuredCategory}) => {
  return (
    <View>
    <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
    </View>
    <Text className="text-xs text-gray-500 px-4">{description}</Text>
    <ScrollView
     horizontal
     contentContainerStyle={{paddingHorizontal:15}}
     showsVerticalScrollIndicator={false}
     className="pt-4">
     {/* restaurantcards */}
<RestaurantCard
    id={123}
    imgUrl="https://links.papareact.com/gn7"
    title="Yo! Sushi"
    rating={4.5}
    genre="Japanese"
    address="123 Main St, City"
    short_description="The best sushi in town!"
    dishes={['sushi', 'rolls', 'nigiri', 'sashimi']}
    log={40.7128}
    lat={45.7128}
/>
<RestaurantCard
    id={123}
    imgUrl="https://links.papareact.com/gn7"
    title="Yo! Sushi"
    rating={4.5}
    genre="Japanese"
    address="123 Main St, City"
    short_description="The best sushi in town!"
    dishes={['sushi', 'rolls', 'nigiri', 'sashimi']}
    log={40.7128}
    lat={45.7128}
/>
<RestaurantCard
    id={123}
    imgUrl="https://links.papareact.com/gn7"
    title="Yo! Sushi"
    rating={4.5}
    genre="Japanese"
    address="123 Main St, City"
    short_description="The best sushi in town!"
    dishes={['sushi', 'rolls', 'nigiri', 'sashimi']}
    log={40.7128}
    lat={45.7128}
/>
    </ScrollView>
    </View>
  )
}

export default FeaturedRows