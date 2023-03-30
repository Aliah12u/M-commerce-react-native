import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.viewText}>
         <Text style={styles.text}>SlidMall</Text>
         </View>
        <View style={styles.containerIner}>
          <TouchableOpacity>
          <Feather name="search" size={24} color="black" style={{marginRight:10}} />
          </TouchableOpacity>
          <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
          </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        paddingHorizontal:30,

    },
    containerIner:{
        flexDirection:'row', 
        paddingRight:10,

    },
    
    text:{
        fontSize:20,
        alignSelf:'center',
        color:'#3a0b25',
        fontWeight:'400',
        letterSpacing:1
        
    }


})

export default Header