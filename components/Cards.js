import { ImageBackground, Text } from "react-native";
import { StyleSheet} from 'react-native';


const Card = ({imagem,titulo,descricao})=>{
    return(
        <ImageBackground
            style={estilo.produto}
            source={imagem}
            borderRadius={10}
            resizeMode="cover"
        >
            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.descricao}>{descricao}</Text>
        </ImageBackground>
    );
}


const estilo = StyleSheet.create({
    produto:{
        width: 360,
        height: 500,
        backgroundColor: '#ddd',
        borderRadius: 10,
        justifyContent: "space-between",
        marginVertical: 20
               
    },
    titulo:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#040404c4",
        color: "#FFF",
        textAlign: "center"
    },
    descricao:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#040404c4",
        color: "#FFF",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingLeft: 20
        
    },
    
  });
  
  export default Card;