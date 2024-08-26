import {View,Text,StyleSheet,FlatList ,TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const OCB=()=>{
    const [data,setData]=useState([]);
    const [textInput,setTextInput]=useState('')
    const sendQuery= async () => {
        const question=textInput
        const apiUrl="https://final-project-api-w4e3.onrender.com/tfm4/llama_rag/" + question +"?="
        const response= await axios.post(apiUrl,{
            headers: {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"  
            }
        });
        console.log("results")
        console.log(response["data"]["data"]["response"])
        const text= response["data"]["data"]["response"]
        setData([...data,{type:'user','text':question},{type:'dagbot','text':text}])
        setTextInput('');
    }   

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Pregúntame lo que sea </Text>
            <TextInput 
                style={styles.input}
                value={textInput}
                onChangeText={text => setTextInput(text)}
                placeholder='Preguntame lo que sea caerca de los cursos del Master en AI!!!'
            />
            <TouchableOpacity 
                style={styles.buttonText}
                onPress={sendQuery}
                >
                <Text style={styles.buttonText}> Send your question </Text>
            </TouchableOpacity>
            <FlatList
                data={data}
                keyExtractor={(item,index)=>index.toString()}
                style={styles.body}
                renderItem={({item})=> (
                    <View style={{flexDirection:'row',padding:10}}>
                        <Text style={{fontWeight:'bold',color:item.type==='user' ? 'green':'red'}}> 
                            {item.type==='user' ? 'user' : 'dagbot'}
                        </Text>
                        <Text style={styles.content}>{item.text}</Text>
                    </View>
                )}               
            />
        </View>
    )
}

export default OCB

const styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize: 30,
        width:'102%',
        color:"green"
    },
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      marginBottom:10
    },
    body:{
        backgroundColor: 'white',
        width:'90%',
        margin:10,
        borderColor:"green",
        backgroundColor:"black",
        height:400
    },
    bot:{
        fontSize: 20,
        width:'102%',
    },
    content:{
        fontSize: 20,
        color:'white',
        marginLeft:10,
        marginRight:40,
        textAlign:"justify",
        backgroundColor:"black",
    },
    input:{
        borderWidth: 2,
        borderColor:'green',
        width:350,
        marginBottom:10,
        marginTop:15,
        borderRadius:10,
        fontSize:25,
        color:"green"
    },
    button:{
        backgroundColor: 'yellow',
        width:'90%',
        height:60,
        marginBottom:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        width:200,
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:"green",
        alignItems:"center",
        borderRadius:10,
    }
  });