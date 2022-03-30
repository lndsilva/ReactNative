import topo from '../../assets/topo.png';
import logoVendedor from '../../assets/logo.png';

import antena2g from '../../assets/Itens/antena2g3g.png'
import antenaWifi from '../../assets/Itens/antenaWifi.png'
import modem from '../../assets/Itens/modem.png'
import node from '../../assets/Itens/nodeMcu.png'

const carrinho = {
    topo:{
        titulo: "Carrinhos",
        imagem: topo
    },
    detalhes:{
        titulo: "Detalhes  do Carrinho",
        tituloProduto: "Kit IoT",
        descricao: "Kit IoT que revoluciona a vida dos estudates",
        logoVendedor: logoVendedor,
        nomeVendedor: "Nuvem Cloud Shopping",
        preco: "R$ 99,00"

    },
    itens:{
        titulo:"Itens do Carrinho",
        lista:[
            {
                nome:"Antena 2g/3g",
                imagem: antena2g,
            },
            {
                nome:"Antena WiFi",
                imagem: antenaWifi,
            },
            {
                nome:"Modem",
                imagem: modem,
            },
            {
                nome:"Node MCU",
                imagem: node,
            }
        ]
    }
}

export default carrinho;