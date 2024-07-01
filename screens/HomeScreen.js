import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import Categories from '../components/Categories';
import FeaturedRows from '../components/FeaturedRows';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <SafeAreaView className="bg-white my-6 pt-5">
            <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
                <Image
                    source={{ uri: "https://links.papareact.com/wru" }}
                    className="rounded-full w-10 h-10 p-4 bg-gray-300"
                />
                <View className="flex-1">
                    <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <Entypo name="chevron-down" size={24} color="#00CCBB" />
                    </Text>
                </View>
                <AntDesign name="user" size={35} color="#00CCBB" />
            </View>

            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 rounded-md bg-gray-200 p-3">
                    <AntDesign name="search1" size={24} color="gray" />
                    <TextInput placeholder="50-50 chips" keyboardType='default' />
                </View>
              
            </View> 
             <ScrollView 
             className="bg-gray-100"
             contentContainerStyle={{paddingBottom:100,}}
             >
                    {/* categories */}
                    <Categories/>
                {/* featured */}
                <FeaturedRows
                id="1"
            title="Featured"
            description="Paid placements from partners"
            featuredCategory="featured"
                />
                  <FeaturedRows
                  id="2"
            title="Tasty discounts"
            description="Everyone been enjoying juicy discounts"
            featuredCategory="featured"
                />
                  <FeaturedRows
                  id="3"
                title="OFFERS NEAR YOU"
                description="Why not support local restaurants"
                featuredCategory="featured"
                />
                </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
