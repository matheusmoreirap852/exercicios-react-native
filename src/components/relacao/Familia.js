import { Text } from 'react-native'
import React from 'react'

export default props => {
    return (
        <>
            <Text>Membros da Família:</Text>
          {props.children}
        </>
    )
}