import React from 'react';
import Texto from '../../components/Texto';
import { View, Image, ScrollView } from 'react-native';


export default function Itens ({titulo, lista}){

    return <>
        <Texto>
            {titulo}
        </Texto>
        {
            lista.map(
                (
                    {
                        nome, imagem
                    }
                ) => {
                    return
                    <View key={nome}>
                        <Texto>{nome}</Texto>
                        <Image source={imagem}/>
                    </View>
                }
            )
        }
    </>;
    
    
}