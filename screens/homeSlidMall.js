import { View, Text, SafeAreaView ,ScrollView} from 'react-native'
import React,{useState} from 'react'
import CardUnderHeader from '../pagesSlidMall/cardUnderHeader'
import Header from '../pagesSlidMall/header';
import ImageSlider from '../pagesSlidMall/imageSlider';
import CardListUnderImgSlider from '../pagesSlidMall/cardListUnderImgSlider';





const HomeSlidMall = ({navigation}) => {


  return (
    <SafeAreaView>
        <ScrollView>
            <CardUnderHeader/>
            <ImageSlider/>
            <CardListUnderImgSlider navigation={navigation}/>

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeSlidMall