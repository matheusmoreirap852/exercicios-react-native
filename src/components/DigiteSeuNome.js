import React, {useState} from 'react'
import { Text, TextInput, View } from 'react-native'
import Estilo from './Estilo'

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View >
            <Text>{nome}</Text>
            <TextInput
            keyboardType={'numeric'}
            placeholder="Digite seu nome"
            value = {nome}
            onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}