import { StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const CustomTextInput = ({placeholder, setText, keyboardType = 'default', value=null}) => {
  return (
    <TextInput 
        style={styles.container}
        placeholder={placeholder}
        onChangeText={(txt) => setText(txt)}
        keyboardType={keyboardType}
        value={value}
    />
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    container:{
        width: '80%',
        borderWidth:1,
        borderRadius: 10,
        borderColor: 'teal',
        height: '7%',
        paddingLeft: 10,
        marginVertical: 10
    }
})