import React from "react";

const message = {
    message: 'Probando el objeto',
    title: 'Nauzet'

}

const getSaludo = () => {
    if ( message ) {
        return <h2>{ message.message }</h2>
    } else {
        return <h2>Saludo por defecto</h2>
    }
}

    export const FirtsApp = ({ props, title, subTitle }) => {
        console.log( "PROPS", props );
    return (
        <>
            <h1>{ getSaludo() }</h1>
            <h2>FirtsApp</h2>
            <h3>{ title }</h3>
            <p>Soy un subtitulo</p>
            {/* <p>{ JSON.stringify( message ) }</p> */}
        </>

    )
}