import React ,{useState}from 'react'

import 
      { View, 
        Image,
        Text,
        ScrollView,
        StyleSheet,
        TouchableOpacity,
      FlatList,
      SliderComponent} from 'react-native';
      import { AntDesign } from '@expo/vector-icons';


const images=['https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/3302537/pexels-photo-3302537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/5704736/pexels-photo-5704736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/4199069/pexels-photo-4199069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/7821528/pexels-photo-7821528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]

const subimages=[['https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/3302537/pexels-photo-3302537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',],
['https://images.pexels.com/photos/5704736/pexels-photo-5704736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/4199069/pexels-photo-4199069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',],
['https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/7821528/pexels-photo-7821528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',]
]

const description =['This is the best bag of \nshopping  and out the home',
                    'beautiful beautiful and \nDress to go out home',
                    'beautiful beautiful and \nDress to go out home',
                    'beautiful beautiful and \nDress to go out home',
                    'beautiful beautiful and \nDress to go out home',
                    'beautiful beautiful and \nDress to go out home',
                  ]
 const supDes=[
  'Clothes can serve a variety of functions,\n such as providing warmth in cold weather,',
 'Clothes can serve a variety of functions,\n such as providing warmth in cold weather,',
 'Clothes can serve a variety of functions,\n such as providing warmth in cold weather,',
 'Clothes can serve a variety of functions,\n such as providing warmth in cold weather,',
 'Clothes can serve a variety of functions,\n such as providing warmth in cold weather,',
 'Clothes can serve a variety of functions,\n such as providing warmth in cold weather,',]                 


const dataAPIFake = [
  {key:1,image:images[0],name:'WRANGLER',description:description[0],price:'$100',off:'10%',subDescription:supDes[0],subIm:subimages[0][0]},
  {key:2,image:images[1],name:'GUCCI',   description:description[1],price:'$215',off:'10%',subDescription:supDes[1],subIm:subimages[0][1]},
  {key:3,image:images[2],name:' H & M',  description:description[2],price:'$300',off:'10%',subDescription:supDes[2],subIm:subimages[1][0]},
  {key:4,image:images[3],name:'ZARA',    description:description[3],price:'$150',off:'10%',subDescription:supDes[3],subIm:subimages[1][1]},
  {key:5,image:images[4],name:'CHANEL',  description:description[4],price:'$175',off:'10%',subDescription:supDes[4],subIm:subimages[2][0]},
  {key:6,image:images[5],name:'NIKE',    description:description[5],price:'$175',off:'10%',subDescription:supDes[5],subIm:subimages[2][1]},
]


const CardListUnderImgSlider = ({navigation}) => {
  const [heart,setHeart] = useState("hearto")
  const [data ,setData] = useState(dataAPIFake)

  const handeledHeart=(heart) => {
    if(heart !='hearto'){
      setHeart(()=>'heart')
    }
  
  }
  const returnData =({item})=> {
    
    return(
     
        <View style={styles.container}>
          <TouchableOpacity  onPress={() => navigation.navigate('SecondPage',item)}>
          <Image 
          source={{uri:item.image}}
          resizeMode='cover'
          style={styles.img}/>
          <TouchableOpacity style={styles.icon} onPress={handeledHeart()}>
          <AntDesign name='hearto' size={20} color="pink"  />
          </TouchableOpacity>

        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textPrice}>{item.price}</Text>
        </TouchableOpacity>
        </View>
        
     
    )
  }
  return (
    <View>
      <FlatList
      data={data}
      style={styles.list}
      keyExtractor={item=>'key-${item.id}'}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={returnData}
      />
    </View>
  )
}
const styles = StyleSheet.create({

  list:{
    marginHorizontal:15
  },
  container:{
    marginLeft:10,
    width:130,
    height:200
  },
  img:{
    borderRadius:10,
    width:130,
    height:140,  
    marginBottom:10,
  },
  icon:{
    position:'absolute',
    top:5,
    right:5
  },
  textName:{
    color:'#87240f',
    marginBottom:5,

  },
  textPrice:{
    color:'gray'
  }
})

export default CardListUnderImgSlider