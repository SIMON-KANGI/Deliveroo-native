import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity>
    <Image source={{uri:imgUrl}}
className="h-20 w-20"
    />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard