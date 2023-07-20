import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const UserDetails = () => {
    const {user} = useSelector((store) => ({user: store.user}));
    console.log({user});
  return (
    <View style={styles.container}>
      <Text><Text style={styles.bold}>Name:</Text> {user?.name}</Text>
      <Text><Text style={styles.bold}>Age:</Text> {user?.age}</Text>
      <Text><Text style={styles.bold}>ID:</Text> {user?.id}</Text>
      <Text><Text style={styles.bold}>User Details Updated Counter:</Text> {user?.counter}</Text>
      <Text style={{color: 'gray'}}>***Values Retrieve from the userSlice***</Text>
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
    },
    bold:{
        fontWeight: 'bold',
    }
})