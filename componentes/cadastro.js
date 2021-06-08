import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView,TouchableOpacity} from 'react-native';
import { Ionicons, Feather  } from '@expo/vector-icons';

export default function Cadastro ({ navigation }){

    const [nome, setNome]= useState('')
    const [data, setData]= useState('')
    const [altura, setAltura]= useState('')
    const [peso, setPeso]= useState('')
    const [sexo, setSexo]= useState('')
    const [email, setEmail]= useState('')
    const [senha, setSenha]= useState('')
    const [cadsenha, setCadsenha]= useState('')
    const [mostrar, setMostrar]= useState(true)
    
    

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={estilos.conteudo}>
                    <View style={estilos.container}>
                        <View style={estilos.bloco}>
                        
                                <View style={estilos.bloco}>
                                    <TextInput 
                                        style={estilos.txt}
                                        autoFocus={false}
                                        autoCorrect={false}
                                        placeholder="Nome"
                                        onChangeText={(texto)=>setNome(texto)}
                                        value={nome}
                                    ></TextInput> 
                                </View>

                                <View style={estilos.bloco}>
                                    <TextInput 
                                        style={estilos.txt}
                                        autoFocus={false}
                                        autoCorrect={false}
                                        placeholder="Data de Nascimento - ex: 00/00/0000"
                                        onChangeText={(texto)=>setData(texto)}
                                        value={data}
                                        keyboardType="numbers-and-punctuation"
                                    ></TextInput> 
                                </View>

                                <View style={estilos.bloco}>
                                    <TextInput 
                                        style={estilos.txt}
                                        autoFocus={false}
                                        placeholder="Sexo - ex: F/M"
                                        autoCorrect={false}
                                        onChangeText={(texto)=>setSexo(texto)}
                                        value={sexo}   
                                    ></TextInput> 
                                </View>                                         
                                                            
                            
                                <View style={estilos.bloco}>
                                    <TextInput 
                                        style={estilos.txt}
                                        autoFocus={false}
                                        placeholder="Email"
                                        autoCorrect={false}
                                        onChangeText={(texto)=>setEmail(texto)}
                                        value={email}
                                        keyboardType="email-address"
                                    ></TextInput> 
                                </View>

                                <View style={estilos.bloco}>
                                    <TextInput
                                        style={estilos.txt}
                                        placeholder="Digite sua altura"
                                        autoCorrect={false}
                                        onChangeText={(texto)=>setAltura(texto)}
                                        value={altura}
                                        keyboardType="numeric"
                                    />
                                </View>

                                <View style={estilos.bloco}>
                                    <TextInput
                                        style={estilos.txt}
                                        placeholder="Digite seu peso"
                                        autoCorrect={false}
                                        onChangeText={(texto)=>setPeso(texto)}
                                        value={peso}
                                        keyboardType="numeric"
                                    />
                                </View>
                                
                                <View style={estilos.bloco}>
                                    <TextInput 
                                        style={estilos.txt}
                                        autoFocus={false}
                                        placeholder="Cadastrar Senha"
                                        secureTextEntry={mostrar}
                                        autoCorrect={false}
                                        onChangeText={(texto)=>setSenha(texto)}
                                        value={senha}
                                    ></TextInput>

                                    <TouchableOpacity 
                                        style={estilos.icone}
                                        //trocando o valor da constante para aparecer a senha
                                        onPress={()=>setMostrar(!mostrar)}
                                    >   
                                        {mostrar?
                                        <Feather name="eye-off" size={24} color="black" />
                                        :
                                        <Ionicons name="eye" color="black" size={24}/>
                                        }
                                    </TouchableOpacity> 
                                </View>
                                

                                <View style={estilos.bloco}>
                                    <TouchableOpacity
                                        style={estilos.btnLogar}
                                        onPress={() => navigation.navigate('Home')}
                                    >
                                        <Text style={{color:'#fff'}}>Cadastrar</Text>
                                    </TouchableOpacity>
                                </View>                                                                      
                        </View>
                    </View>
                </View>    
            </ScrollView>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({

    conteudo:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"rgb(101, 37, 131)",
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'80%',
        borderRadius:5,
        margin:20
    },    

    bloco:{
        marginBottom:10,
        padding:10,
    },

    txt:{
        width:'100%',
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
    },

    btnLogar:{
        backgroundColor: "rgb(101, 37, 131)",
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        color:'#fff',
        borderRadius:7,
    },


    img:{
        width:'100%',
        resizeMode:'cover',
        marginTop:170,
        marginBottom:150,
        borderColor:'black',
        borderWidth:1,
        borderRadius:40,
    },
    icone:{
        width:"15%",
        height:45,
        marginBottom:-10,
        marginTop:-30,
        marginLeft:230
    },
})