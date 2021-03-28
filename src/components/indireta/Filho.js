import React,{ useState } from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'

import { Button } from'react-native'

export default props => {

    function gerarNumero(min, max) {
        const fator = max - min + 1
        return parseIn(Math.random() * fator) + min
    }

    return (
        <Button
            title="Executar"
            onPress={function() {
                const n = gerarNumero(props.min, props.max)
                props.funcao(n)

            }}
        />
    )
}