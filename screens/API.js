import { View, Text,StyleSheet,ActivityIndicator,Button ,SafeAreaView, FlatList} from 'react-native'
import { useState,useEffect } from 'react'
import React from 'react'


const moiveURL = "https://reactnative.dev/movies.json";

const API = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [data ,setData] = useState({});

  useEffect(()=> {

    fetch(moiveURL)
    .then((response)=>response.json())
    .then((json)=> setData(json.movies))
    .catch((error) => alert(error))
    .finally(()=>setIsLoading(false));

  })
 

  return (
    <SafeAreaView>
      {isLoading?<ActivityIndicator/>: <FlatList
      data={data}
      keyExtractor={({id}, index) => id}
      renderItem={({item})=>{
        return (

          <Text style={styles.text}>{item.title},{item.releaseYear}</Text>
        )
      }}
      />}
    </SafeAreaView>


  )
}
const styles = StyleSheet.create({
    container: {
       // alignItems:'center',
        justifyContent:'center',
    },
    Header:{
        backgroundColor:'gray',
    },
    text:{
        fontSize:26,
        alignSelf:'center'
    },
})

export default API