import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import DigiteSeuNome from './components/DigiteSeuNome'
//import Pai from './components/indireta/Pai'

//  import Contador from './components/Contador'
/*
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import ListaProdutos from './components/produtos/ListaProdutos'
import UsuarioLogado from './components/UsuarioLogado'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
import Botao from './components/Botao'
import Titulo from './components/Titulo'
import Aleatorio from './components/Aleatorio'
import MinMax from './components/MinMax'
import CompPadrao, {Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro'
*/

export default () => (
   <SafeAreaView style={style.App}>
        <DigiteSeuNome />

        {/*sss
        <ListaProdutosV2 />
        <UsuarioLogado usuario={{ nome: 'Gui', email: 'guinotafiscal@gmail.com'}}/>
        <UsuarioLogado usuario={{ email: 'guinotafiscal@gmail.com'}}/>
        <UsuarioLogado usuario={{ nome: 'Gui'}}/>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Joao" sobrenome="Carlos" />
            <Membro nome="Paulo" sobrenome="Carlos" />
        </Familia>
        <Contador inicial={23} passo={20}/>
        <Botao />
        <Titulo principal="Cadastro Produto"
        secundario="Tela de cadastro do Produto"/>
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />*/}

    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})