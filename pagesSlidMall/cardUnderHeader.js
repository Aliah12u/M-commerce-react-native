import React from 'react';
import 
      { View, 
        Image,Text,
        ScrollView,
        StyleSheet,
        TouchableOpacity} from 'react-native';



const CardUnderHeader = () => {
  return (
    <View>
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        horizontal 
        style={styles.scr}>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Image style={styles.img}source={require('../images/5.jpeg')}/>
                    <Text style={styles.text}>MENS</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View  style={styles.box}>
                    <Image style={styles.img}source={require('../images/im-3.png')}/>
                    <Text style={[styles.text,styles.textWOM]}>WOMENS</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View  style={styles.box}>
                    <Image style={styles.img}source={require('../images/im-2.jpg')}/>
                    <Text style={[styles.text,styles.texKid]}>KIDS</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View  style={[styles.box,styles.colorBox]}>
                    <Image style={styles.img}source={require('../images/im-7.jpg')}/>
                    <Text style={[styles.text,styles.texKid]}>Other</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    scr:{
        margin:10
    }, 
    img: {
        position:'relative',
        resizeMode: 'contain',
        height:80,
        width:120,
        borderRadius:10,
    },
    
    box:{
        flex:1,
        width:130,
        height:110,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
        borderRadius:5,
    },
    text:{
        position:'absolute',
        bottom:15,
        fontSize:16,
        borderRadius:5,
        paddingHorizontal:39,
        alignSelf:'center',
        paddingVertical:0,
        backgroundColor:'white'
        
    },
    textWOM:{
        paddingHorizontal:28
    },
    texKid:{
        paddingHorizontal:45,

    },


});


export default CardUnderHeader