import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/reducers/userSlice";

const Home = () => {

  const dispatch = useDispatch();
  const counter = useSelector(store => store.user.counter);
  const {user} = useSelector((store) => ({user: store.user}));

  const [userData, setUserData] = useState({
    name: '',
    age: '',
    id: '',
  })

  const onUpdateValue = () => {
    dispatch(updateUser({...userData, counter: counter+1}));
    setUserData({
      name: '',
      age: '',
      id: '',
    })
  }

  return (
    <View style={styles.container}>
      <CustomTextInput placeholder='Name' setText={(txt) => setUserData({...userData, name: txt})} value={userData.name}/>
      <CustomTextInput placeholder='Age' setText={(txt) => setUserData({...userData, age: txt})} keyboardType="numeric" value={userData.age}/>
      <CustomTextInput placeholder='ID' setText={(txt) => setUserData({...userData, id: txt})} value={userData.id}/>
      <TouchableOpacity style={styles.button} onPress={onUpdateValue}>
        <Text>Update Redux Value</Text>
      </TouchableOpacity>
      <View style={styles.container}>
      <Text>Name: {user?.name}</Text>
      <Text>Age: {user?.age}</Text>
      <Text>ID: {user?.id}</Text>
      <Text>User Details Updated Counter: {user?.counter}</Text>
    </View>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    height: '8%',
    backgroundColor: 'teal',
    width: '80%',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20
  }
});
