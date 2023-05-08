import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Cards from './Cards';

export default function Serie(props) {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Entretenimento/Serie/Atypical.jpg"),
      titulo: "Atypical",
      descricao: "Quando um adolescente com traços de autismo resolve arrumar uma namorada, sua busca por independência coloca a família toda em uma aventura de autodescoberta.",
    },
    {
      id:"2",
      imagem: require("../assets/Entretenimento/Serie/The Last of Us.jpg"),
      titulo: "The Last of Us",
      descricao:  "Um futuro pandêmico que foi devastador para humanidade, deixando os seres humanos à beira da extinção.",
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
