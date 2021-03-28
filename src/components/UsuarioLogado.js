import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'


export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <if teste={usuario && usuario.email && usuario.nome}>
                <Text style={Estilo.txtG}>Usuario Logado: </Text>
                <Text style={Estilo.txtG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </if>
        </>
    )
}
