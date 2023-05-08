import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Cards from './Cards';

export default function Filme(props) {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Entretenimento/Filme/Interestelar.jpg"),
      titulo: "Interestelar",
      descricao: "Uma equipe de exploradores viaja para além desta galáxia em um novo túnel espacial para descobrir se a humanidade tem algum futuro entre as estrelas.",
    },
    {
      id:"2",
      imagem: require("../assets/Entretenimento/Filme/Bastardos inglorios.jpg"),
      titulo: "Bastardos Inglorios",
      descricao:  "Na Segunda Guerra Mundial, a França está ocupada pelos nazistas. O tenente Aldo Raine (Brad Pitt) é o encarregado de reunir um pelotão de soldados de origem judaica, com o objetivo de realizar uma missão suicida contra os alemães.",
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
