import React from 'react'
import { Button } from 'react-native'

//Função
export default props => {

    const executar = () => {
        console.warn('Exec #01!!!')
    }

    return (
        <>
            <Button
                title="Executar #01!"
                //Executar a função
                onPress={executar()}
            />

            <Button
                title="Executar #02 !"
                //Executar a função
                onPress={function() {
                    console.warn('Exec #02!!!')
                }}
            />
            <Button
                title="Executar #03 !"
                onPress={() => console.warn('Exec #03 !!!')}
            />


        </>
    )

}