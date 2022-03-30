import {
  StatusBar, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  Image,
  Dimensions,
  View,
  ScrollView,
  FlatList
} from 'react-native';

import Topo from './source/telas/Carrinho/Topo';
import Detalhes from './source/telas/Carrinho/Detalhes';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Mocks from './source/mocks/carrinho';
import Item from './source/telas/Carrinho/Item';
import Texto from './source/components/Texto';



export default function App() {
  
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold 
  });
  
  if (!fontsLoaded) {
    return 
    <View> </View>;
  }
  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={Mocks.itens.lista}
        renderItem={Item}
        keyExtractor={({nome})=>nome}
        ListHeaderComponentStyle={
          ()=>{
            return <>
              <Topo {...Mocks.topo}/>
              <Detalhes {...Mocks.detalhes}/>
              <Texto style={styles.titulo}>
                {Mocks.itens.titulo}
              </Texto>      
            
            </>
          }
        }
        ListFooterComponent={
          () =>{
            return <>
            <FlatList
              data={Mocks.itens.novaLista}
              renderItem={Item}
              keyExtractor={({nome})=>nome}           
            />
          
            </>
          }
        }
      />

      <StatusBar />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titulo: {
    color:"#ffa500",
    fontWeigth: 'bold',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 25
}
});
