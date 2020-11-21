import React from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'

import string from '../lang'
import {TextButton,Logo} from '../Shared'
const Language=(props)=>{
 
 
    const changelang=(language)=>{
  
        props.navigation.navigate('auth')
        string.setLanguage(language)
       
    }
    return <View style={styles.wrapper}>
        <Text style={{fontSize:25}}>Choose Language</Text>
        <Logo/>
        <View style={styles.options}>
            <TextButton text={"English"} onClick={()=>{changelang('en')}}/>
            <TextButton text={"हिंदी"} onClick={()=>{changelang('hn')}}/>
        </View>
        
    </View>
}
const styles=StyleSheet.create({
    wrapper:{
  
        alignItems:'center',
        paddingVertical:40,
        paddingHorizontal:15
    },
    options:{
        marginVertical:50,
        width:'100%'
    }
})
export default Language