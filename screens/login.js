import { View, Text, Button,StyleSheet,Image, TextInput} from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image  style={styles.img} source={require('../images/faceUser.png')}/>

        <View >
            <Text style={styles.textLogin}> Login</Text>
        </View>
        <View>
        <TextInput  style={styles.textInput} placeholder='username'/>
        <TextInput style={styles.textInput}  placeholder='password'/>
        </View>

      <Button title='goBack' onPress={()=> navigation.navigate('TheredPage')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
        //flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    img:{
        resizeMode:'contain',
        height:300,
    },
    textLogin:{
        fontSize:46,
    },
    
})

export default Login