import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    
    bloco:{
        marginBottom:10,
        padding:10,
        width:"80%",
        justifyContent:"center",
        alignItems:'center'
    },

    cadastro:{
        paddingBottom:10,
        color:"#F33329",
    },

    txt:{
        width:'100%',
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
    },
    txtedit:{
        width:250,
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
        alignItems:'flex-end',
        marginLeft:-90,
    },
    btnedit:{
        borderColor:'#000'
        
    },

    img:{
        width:'100%',
        height:300,
        resizeMode:'contain',
        marginBottom:-40,
        marginTop:-35
        
        
    },
    icone:{
        width:"15%",
        marginTop:-30,
        marginLeft:200,
        paddingRight:5
    },

    logo:{
        fontSize:50,
        margin:10,
        color:'#FF8C00'
    },

    loginErro:{
        fontWeight:'bold',
        fontSize:22,
        color: '#F33329',
        marginTop:10,
        marginBottom:15,
    },
//////////////////////// Inicio Topo /////////////////////////////////////
    
    containertop:{
        justifyContent:'flex-start'
    },

    topo:{
        flexDirection:'row',
        paddingTop:40,
        paddingBottom:15,
        paddingRight:10,
        paddingLeft:10,
        width:'100%',
        backgroundColor:'#F33329',
        alignItems:'center',
        justifyContent:'space-between',
    },
    topoatividade:{
        flexDirection:'row',
        paddingTop:40,
        paddingBottom:15,
        paddingRight:40,
        paddingLeft:0,
        width:'100%',
        backgroundColor:'#F33329',
        alignItems:'center',
        justifyContent:'space-between',
    },

    title:{
        width:'80%',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
    },
    titledit:{
        width:'80%',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        marginLeft:30
    },

    buttonMenu:{
        textAlign:'left'
    },

    buttonNews:{
        textAlign:'right'
    },
//////////////////////// Fim Topo /////////////////////////////////////

//////////////////////// Inicio Formulario  /////////////////////////////////////
input:{
    width:'100%',
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    borderRadius:10,
    width:300,
    marginTop:10
},

inputnum:{
    width:100,
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    borderRadius:10,
    marginTop:10
},
//////////////////////// Fim Formulario  /////////////////////////////////////


//////////////////////// Inicio Bot??es  /////////////////////////////////////

botao:{
    backgroundColor:"#F33329",
    width:'100%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
},

btnatv:{
    backgroundColor:"#F33329",
    width:300,
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
},

txtBtn:{
    textAlign:'center',
    color:'#fff',
    fontSize:15,
    textTransform:'uppercase'
},

//////////////////////// Fim Bot??es  /////////////////////////////////////

///////////////////// Feed ////////////////////

containerfeed:{
    flex: 1,
    backgroundColor:'#fff'
},

box:{
    flexDirection:'row',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    //justifyContent:'space-around',
    alignContent:'center'
},

infouser:{
    flexDirection:'row',
    paddingTop:5,
    paddingBottom:5,
    paddingTop: 10
},


boxuser:{
    flex:1,
    flexDirection:'row',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    alignItems:'center'
},

acoes:{
    backgroundColor:"#EBEAEA",
    flexDirection:'row',
    marginTop:15,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15,
    justifyContent:'space-between',

},

txtTitulo:{
    fontSize:20,
    fontWeight:'bold',
},

txtInfor:{
    fontSize:20,
    fontWeight:'bold',
    color:"#363636",
},

imagem:{
    width:"100%",
    resizeMode: 'contain',
    marginTop:-110,
    marginBottom:-115,

},
dateComponente:{
    width:350
},
//////////////////////////////// Inicio Perfil /////////////////////////////////////////////

imgprofile:{
    width:80,
    height:80,
    borderRadius:50,
    margin:5
},

txtsubtitle:{   
    fontSize:12, 
    textAlign:'center',
},
//////////////////////////////// fim Perfil /////////////////////////////////////////////       
});
export {styles}

