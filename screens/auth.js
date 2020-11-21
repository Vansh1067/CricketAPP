import React from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'
import string from '../lang'
import {Logo,Input,Select} from '../Shared'
const Authentication=()=>{
    return <View style={styles.wrapper}>
            <Text style={{fontSize:25}}>{string.heading}</Text>
            <Logo/>
            <Select item={string.country} placeholder={string.selectText}/>
            <Input placeholder={string.contact}/>
            <Input placeholder={string.email} />
            <View style={{width:'50%'}}>
                <Button title={string.submit} />
            </View>
            
               
            
    </View>
}
const styles=StyleSheet.create({
    wrapper:{
  
        alignItems:'center',
        paddingVertical:40,
        paddingHorizontal:15
    },
   
   
  
})
export default Authentication