const HomeComponent = () =>{

    const topicsApplication = ["component", "useState", "userEffect", "useRef", "events", "hooks", "DOM elements styling", "form", "modules import/export", "elements iteration", "destructuring", "props && drilling props", "add/remove value from Rest API", "Fake backend JSON server"]

    return(
        <div>
            <div className='jumbotron pt-1 mt-4'>
                <h1 className='text-dark' >Welcome to React basic application</h1>
                <p>
                    This application allows you to see many of the properties of the framework at work, it can be taken as a starting point for the creation of more complex applications once you understand the concepts described here, considered to be of primary importance.
                </p>
                <p>
                    Among the elements and properties of the application presented in this project stand out:
                </p>



                <ul className='m-5 mb-5' style={{ listStyle: "none"}}>
                {
                    topicsApplication.map( (element, idx) =>{
                        return(
                                <li key={idx}> <img  style={{position: "relative", top: "-1px"}} width='16px' src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/lg/57/white-heavy-check-mark_2705.png" alt=""/> { element } </li>
                                )
                            })
                        }
                </ul>


 
 <div style={{marginTop: "77px"}}>
                <button className='btn btn-primary' onClick={ () => { window.open("https://reactjs.org/docs/getting-started.html", "_blank") } }>React offical documentation</button>
                <button className='btn btn-success ml-2'  onClick={ () => { window.open("https://en.wikipedia.org/wiki/React_(JavaScript_library)", "_blank") } }> React on wikipedia</button>
 </div>
            </div>
        </div>
    )

}

export default HomeComponent