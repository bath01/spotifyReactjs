import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import * as AppAuth from "expo-app-auth";

export default function LoginScreen() {
  async function authenticate () {
    const config = {
      issuer:"https://accounts.spotify.com",
      clientId:"5f5990072e314481952de3f23ccdcd1a",
      scopes:[
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public"
      ],
      redirectUrl:"exp://192.168.252.19:8081"
    }
    const result = await AppAuth.authAsync(config);
    console.log(result);
  }

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{flex:1}}>
        <SafeAreaView>
            {/* <Text>LoginScreen</Text> */}
            <View style={{height:80}}/>
            <Entypo style={{textAlign:'center'}} name="spotify" size={80} color="white" />
            <Text style={{color:"white", fontSize: 40, fontWeight: 'bold', textAlign:'center',marginTop:40}}>Millions of songs Free on spotify!</Text>
            <View style={{height:80}}/>
            <Pressable style={{backgroundColor:"#1DB954",
                padding:10,
                marginLeft:"auto",
                marginRight:"auto",
                width:300,
                borderRadius:25,
                alignItems:"center",
                justifyContent:"center",
                marginVertical: 10,

                }}>
                <Text>Sign In width spotify</Text>
            </Pressable>

            <Pressable style={{
                backgroundColor: "#131624",
                padding:10,
                marginLeft:"auto",
                marginRight:"auto",
                width:300,
                borderRadius:25,
                alignItems:"center",
                justifyContent:"center",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
                borderColor: "#C0C0C0",
                borderWidth: 0.8
              }}>
              <MaterialIcons name="phone-android" size={24} color="white" />
              <Text style={{fontWeight:"500",color:"white",textAlign:"center", flex:1}}>Continue with phone number</Text>
            </Pressable>

            <Pressable style={{
                backgroundColor: "#131624",
                padding:10,
                marginLeft:"auto",
                marginRight:"auto",
                width:300,
                borderRadius:25,
                alignItems:"center",
                justifyContent:"center",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
                borderColor: "#C0C0C0",
                borderWidth: 0.8
              }}>
              <AntDesign name="google" size={24} color="red" />
              <Text style={{fontWeight:"500",color:"white",textAlign:"center", flex:1}}>Continue with Google</Text>
            </Pressable>

            <Pressable style={{
                backgroundColor: "#131624",
                padding:10,
                marginLeft:"auto",
                marginRight:"auto",
                width:300,
                borderRadius:25,
                alignItems:"center",
                justifyContent:"center",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
                borderColor: "#C0C0C0",
                borderWidth: 0.8
              }}>
              <AntDesign name="facebook-square" size={24} color="blue" />
              <Text style={{fontWeight:"500",color:"white",textAlign:"center", flex:1}}>Sign In with facebook</Text>
            </Pressable>
        </SafeAreaView>
    </LinearGradient>
    
  )
};

// export default LoginScreen;

const styles = StyleSheet.create({})