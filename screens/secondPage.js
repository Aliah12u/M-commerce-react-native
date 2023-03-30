import { View, Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Animated,
  Button} from 'react-native'
import React from 'react'
import { Images } from '../images/images';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ImageLine = [
'../images/line.png',
'../images/line.png',
'../images/line.png',]

const images =[
  'https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg',
  'https://images.pexels.com/photos/2452345/pexels-photo-2452345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3758495/pexels-photo-3758495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

]




const SecondPage = ({route,navigation}) => {
  const{key,image,name,description,price,off,subDescription,subIm} = route.params;


  const width = Dimensions.get('window').width;
  const scrollx = new Animated.Value(0);
  let position = Animated.divide(scrollx,width); 



  return (
    <SafeAreaView style={styles.container}>
    <View>
        <ScrollView 
        showsHorizontalScrollIndicator ={false}
        pagingEnabled
        horizontal
        onScroll={Animated.event( 
          [{nativeEvent:{contentOffset:{x:scrollx}}}],
          {useNativeDriver:false},
        )}
        >
             
            {
            images.map(
                (e) =>
                <Image 
                key={e}
                style={[styles.imgSize]}
                source={{uri:e}}
                resizeMode="cover"
                 />

                
                 
                )
            }
            <TouchableOpacity style={styles.icon}onPress={()=> navigation.navigate('SlidMall')}>
            <FontAwesome5 name="arrow-left" size={20} color="black" />
            </TouchableOpacity>


        </ScrollView>
        <View style={styles.dot}>
              <Text> ●</Text>
              <Text> ●</Text>
              <Text> ●</Text>
            </View>
            <View style={{flexDirection:'row',
            marginTop:10}}>
            <Entypo name="shopping-cart" size={24} color="#4ca0d8" style={{marginLeft:15,marginBottom:20}} />
            <Text style={{color:'#3185bc'}}>Shopping</Text>
            </View>

            <View style={styles.description}>
              <Text style={styles.textDes}>{description}</Text>
              <Feather name="link-2" size={24} style={styles.iconLink} color="blue" />
            </View>
            <Text style={styles.SubDesc}>{subDescription}</Text>

            <View style={{flexDirection:'row',
                           justifyContent:'space-between',
                           
                           alignItems:'center',
                           marginTop:30,
                           marginHorizontal:15}}>
               <View style={styles.iconTex}>
                 <Entypo name="location-pin" size={24} color="#3185bc" 
                 style={{padding:5,
                        backgroundColor:'white',
                        borderRadius:10,
                        marginRight:10
                        }}/>
                 <Text style={{color:'#959ca1'}}>Jordan|AVE 6,{'\n'}17.0.0,Amman</Text>
               </View>
               <MaterialCommunityIcons name="greater-than" size={20} color="black" />
            </View>

            <Text style={styles.price}>{price}</Text>

            <TouchableOpacity style={styles.button} >
              <Text style={{fontSize:16,
                color:'white',
                fontWeight:'bold',
                }}> ADD TO CART</Text>
            </TouchableOpacity>

      </View>
      </SafeAreaView>
  )
}






const styles = StyleSheet.create({
  container:{
    flex:1,
    //marginTop:50
},
  
  imgSize:{
    
    width:400,
    height:400,
    borderRadius:5
},
icon: {
  position:'absolute',
  left:5,
  top:50,
  backgroundColor:'white',
  padding:5,
  borderRadius:5
  
},
dot:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  margin:3,
  color:'black'
},
iconLink : {
  padding:5,
  backgroundColor:'#d7eaec',
  borderRadius:15,
},
description:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginHorizontal:19

},
textDes: {
  fontSize:20,
  fontWeight:'bold',
  letterSpacing:1
  
},
SubDesc: {
  color:'#a0a9af',
  fontSize:13,
  marginTop:7,
  marginLeft:17,
  letterSpacing:1

},
iconTex:{
  flexDirection:'row',
  
},
price: {
  marginTop:30,
  marginHorizontal:18,
  fontSize:20,
  fontWeight:'400',
  letterSpacing:1
},
button:{
  marginTop:30,
  backgroundColor:'#2f49c6',
  width:350,
  height:60,
  borderRadius:20,
  alignItems:'center',
  justifyContent:'center',
  marginHorizontal:15

}
    
})

export default SecondPage