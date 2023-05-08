
import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Cards from './Cards';

export default function Adidas() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Entretenimento/Anime/Given.jpeg"),
      titulo: "Given",
      descricao: "Por algum motivo, a guitarra que ele amava tocar e o basquete que ele adorava jogar perderam a graça. ",
    },
    {
      id:"2",
      imagem: require("../assets/Entretenimento/Anime/Noragami.jpeg"),
      titulo: "Noragami",
      descricao:  "Yato é um deus menor, mas está determinado a ser grande. Ele tem um plano, mas infelizmente as coisas não se dão como ele quer.",
    },
    {
      id:"3",
      imagem: require("../assets/Entretenimento/Anime/Violet Evergarden.jpg"),
      titulo: "Violet Evergarden",
      descricao:  "Ao escrever cartas por quem não pode, Violet Evergarden descobre a história de seu país devastado pela guerra e a dureza do próprio coração.",
    },
  ];
 
  return (
    
    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={produtos}
          renderItem={({item})=>
            <Cards 
                imagem={item.imagem}
                titulo={item.titulo}
                descricao={item.descricao}
            />
          }
          keyExtractor={item => item.id}
        />        
      </View>
    </ScrollView>
  );
}