import React from 'react'
import {View,Text,StyleSheet, TextInput, Image,TouchableNativeFeedback,Picker} from 'react-native'
import LogoImage from '../assest/logo.png'

export const TextButton=({text,onClick})=>{
  
    return   <TouchableNativeFeedback onPress={()=>onClick()}>
                <View style={{...styles.TextBox}} >
                    <Text style={styles.Text}>{text}</Text>
                </View>
            </TouchableNativeFeedback>
}
export const Logo=()=>{
    return<Image source={LogoImage} width={'100%'} height={'100%'} resizeMode="stretch" />
}
export const Input=({placeholder})=>{
    const Asterik=<Text style={{color:'red'}}>*</Text>
    return  <View style={{width:"100%",marginVertical:15}}>
    <TextInput placeholder={placeholder} style={styles.input}  />
    </View>
}

export const Select=({item,placeholder})=>{
    return  <View style={styles.picker}>
    <Picker>
        <Picker.Item label={placeholder} value={null} ></Picker.Item>
        {
            item.map((item,i)=>{
                return <Picker.Item key={i} label={item} value={item}></Picker.Item>
            })
        }
        
    </Picker>
</View>
}
const styles=StyleSheet.create({
    Text:{
        fontSize:20,
        letterSpacing:1,
        
    },
    TextBox:{
        padding:5,
        borderColor:'black',
        borderWidth:2,
        alignItems:'center',
        borderRadius:58,
        width:'100%',
        marginVertical:15
     },
     image:{
         width:20,
         height:20,
         alignItems:'center'
     },
     input:{
        borderBottomColor:'black',
        borderBottomWidth:1,
    },
    picker:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        width:'100%'
    }
})