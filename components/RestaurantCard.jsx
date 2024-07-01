import { View, Text, Image   } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Entypo, AntDesign } from '@expo/vector-icons';
const RestaurantCard = ({
    id,imgUrl,title,rating,genre,address,short_description,dishes,log,lat
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
     <Image
     source={{uri:imgUrl}}
     className="h-32 w-64 rounded-md object-cover"
     />
     <View className="px-3 pb-4">
        <Text className="font-bold">{title}</Text>
     </View>
     <View className="flex-row items-center space-x-1">
     <AntDesign name="star" size={22} color="#00CCBB" opacity={0.5} />
     <Text><Text text-green-500>{rating}</Text>. {genre}</Text>
     </View>
     <View className="flex-row items-center space-x-1">
     <Entypo name="location-pin" size={22} color="gray" opacity={0.5} />
     <Text className="text-gray-500 text-xs">Nearby. {address}</Text>
     </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard