import { View, Text,SafeAreaView,Dimensions,Button, StyleSheet,Image, TouchableOpacity ,} from 'react-native';
import React,{useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { onChange } from 'react-native-reanimated';

const images =[
    'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1578997/pexels-photo-1578997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ImageSlider = () => {
    const [imgAcitve,setImgActive] = useState(0)

    const onChange = (nativeEvent)=>{
        if(nativeEvent) {
           const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeassurment);
           if(slide != imgAcitve) {
               setImgActive(slide)
           }
        }
   }

  return (
    <SafeAreaView style={styles.container}>
        <View styles={styles.wrap}>
            <ScrollView 
            onScroll={({nativeEvent})=>onChange(nativeEvent)}
            showsHorizontalScrollIndicator ={false}
            pagingEnabled
            horizontal
            style={[styles.warpMarg]}
            >
                 
                {
                images.map(
                    (e) =>
                     <Image 
                     key={e}
                     style={[styles.warp,styles.imgSize]}
                     source={{uri:e}}
                     />
                     
                    )
                }

                <Text style={[styles.textOFCard,styles.textOFCardFirst]}>WRANGLER</Text>
                <Text style={[styles.textOFCardCenter,styles.textOFCard]}>
                    Fabulous Collections{'\n'}Classy and fashion</Text>
                    <TouchableOpacity  style={[styles.textOFCardButton,styles.textOFCard]}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>SHOP NOW</Text>
                        <AntDesign  style={{marginLeft:12}}name="right" size={20} color="black" />
                    </TouchableOpacity>  
            </ScrollView>

            <View style={styles.warpDot}>
                {
                    images.map((e,index) =>
                    <Text key={e}
                    style={imgAcitve ==index? styles.dotActive:styles.dot}>
                         ●

                    </Text>)
                }               
            </View>

            <View style={styles.TextunderCard}>
                <Text style={{ fontSize:20,fontWeight:'bold'}}> LATEST COLLECTION</Text>
                <Text>See all</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    warpMarg:{
      height:250,
      marginHorizontal:5,
      borderRadius:20,
    },
    warp:{
        width:WIDTH,
        height:HEIGHT*0.25
    }, 
    warpDot: {
        flexDirection:'row',
        alignSelf:'center',

    },
    dotActive:{
        margin:3,
        color:'black'
    },
    dot:{
        margin:3,
        color:'white'
    },
    imgSize:{
        width:350,
        height:240,
        borderRadius:20,
        marginLeft:17
    },
    textOFCard:{
        position:'absolute',
        left:40,
        color:"white",
       
    },
    
    textOFCardFirst:{
        bottom:170,
        fontSize:35,
        fontWeight:'bold'
    },
    textOFCardCenter: {
        fontSize:18,
        


        bottom:120,
    },
    textOFCardButton: {
        bottom:50,
        width:150,
        height:50,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

        
        
    },
    TextunderCard: {
        flex:1,
        flexDirection:'row',
        height:30,
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:23,
        marginBottom:10
       
    }

})

export default ImageSlider