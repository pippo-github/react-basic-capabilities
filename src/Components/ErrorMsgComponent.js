const ErrorMsgComponent = () =>{
    return (
        <div style={{minHeight: "100%"}}>
            <h1 className='text-dark'>
            ErrorMsgComponent, la pagina richiesta non esiste: <span style={{color:"red"}}>404 error</span>
            </h1>

            <p className='jumbotron mt-5' style={{color: "#eee",backgroundColor:"rgba(0, 123, 255,.8)"}}>
                C'e stato un errore, si prega di verificare di aver inserito l'indirizzo correttamente.

            </p>
            <a className='btn btn-primary' href="/"> Torna alla home</a>
        </div>
    )
}

export default ErrorMsgComponent