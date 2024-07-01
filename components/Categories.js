import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal
    contentContainerStyle={{paddingHorizontal:15, paddingTop:10}}
    >
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="pizza"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="pizza"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="pizza"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="pizza"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="pizza"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="pizza"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="pizza"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="pizza"/>
    </ScrollView>
  )
}

export default Categories