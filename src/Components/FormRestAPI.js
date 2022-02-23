/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useRef } from "react";



const FormInput = ({showHide}) => {
  const inputOne = useRef(null);
  const inputTwo = useRef(null);
  const inputThree = useRef(null);

  const [inserimentoForm, setInserimentoForm] = useState({});
  const [inserimentiForm, setInserimentiForm] = useState([]);
  
  const sendData = (e) => {
    e.preventDefault();
  
    setInserimentiForm([...inserimentiForm, inserimentoForm]);

    addData(inserimentoForm);

    inputOne.current.value = "";
    inputTwo.current.value = "";
    inputThree.current.value = "";

  };

  useEffect(() => {
    getFetch(); // previene loop infinito
  }, []);

  const addData = async (data) => {

    const url = "http://localhost:5000/posts";

    const dataRet = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const JsonData = await dataRet.json();

    // console.log("Ritorno inserimento: ", JsonData);

    getFetch();
  };

  const deleteElement = async (id) => {
    const newArray = inserimentiForm.filter((e) => e.id !== id);
    const ret = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    });

    console.log(ret);
    setInserimentiForm(newArray);
  };

  const getFetch = async () => {
    const ret = await fetch("http://localhost:5000/posts");
    const data = await ret.json();

    console.log(data);
    setInserimentiForm(data);
  };

  const getValues = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    setInserimentoForm({
      ...inserimentoForm,
      id: new Date().getTime().toString(),
      [name]: value,
    });
  };



  // gli attributi "name" del from devono corrispondere con quelli
  // del file JSON altrimenti la funzione generica per prendere
  // l'input non funzionara' correttamente

  return (


    <div>
        <div className='mt-0' style={{ display: showHide ? "block" : "none" }}>
            
            <h1>Create elements, form</h1>

            <form 
            className="form-group"
            onSubmit={(e) => {
                sendData(e);
            }}
            >
            <label className="form-control mb-1" htmlFor="nome">
                Nome
            </label>
            <input
                pattern="[^\s][A-Za-z\s]{2,}"
                onInvalid={(e) => {
                e.target.setCustomValidity("only chars, minimum 3");
                }}
                onInput={(e) => e.target.setCustomValidity("")}
                ref={inputOne}
                placeholder="value 1"
                onChange={getValues}
                className="form-control mb-2"
                type="text"
                name="name"
                id="nome"
                required
            />
            <label className="form-control mb-1" htmlFor="cognome">
                Cognome
            </label>
            <input
                required
                ref={inputTwo}
                placeholder="value 2"
                onChange={getValues}
                className="form-control mb-2"
                type="text"
                name="prename"
                id="cognome"
            />
            <label className="form-control mb-1" htmlFor="message">
                message
            </label>
            <input
                required
                ref={inputThree}
                placeholder="value 3"
                onChange={getValues}
                className="form-control mb-2"
                type="text"
                name="message"
                id="message"
            />

            <button className="btn btn-success"> send data </button>
            </form>

            </div>
        <OutputBox elemento={inserimentiForm} deleteElementFunc={deleteElement} />
    </div>
  );
};


const OutputBox = (prop) => {
  console.log(prop);
  const vector = prop.elemento;

  return (
    <div>
        {
          (vector.length) ? <h1>Output box</h1> : ""
        }
      <div>
        {vector.map((e, idx) => {
          return (
            <React.Fragment key={idx}>
            <div  className="card card-body mb-2">
              
              <div>{e.name}</div>
              <div>{e.prename}</div>
              <div>{e.message}</div>

              <form onSubmit={(e) => e.preventDefault()}>
                <button
                  type="submit"
                  onClick={() => {
                    prop.deleteElementFunc(e.id);
                  }}
                  className="btn btn-danger mt-3 mb-3"
                >
                  {" "}
                  delete element{" "}
                </button>
              </form>
            </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const FormRestAPI = () => {

    const [showForm, setShowForm] = useState(false)

    const my_style_label = {
        color: "white",
        padding: "11px"
    }

    const my_style_div = {
        textAlign: "left",
        marginTop: "44px",
        background: "black",
        color: "green",
        padding: "7px",
        minHeight: "80px"
    }



    const textNpmSintax = `
    npm install json-server`
 
    const textPackageJsonSintax = `
    "server": "json-server --watch db.json --port 5000"`
 

  return (
    <div>
      <h1>Rest API page, fake JSON server</h1>

        <p>
          This page allows you to view the contents of the file: "db.json" used by the third-party "json-server" library, which allows, through the fake server backend, to add or remove entries from the archive used to create a REST API .        </p>
        <p>
          The server intercepts and handles HTTP requests for the following verbs: "GET", "POST", "PATCH", "PUT" and "DELETE".
        </p>
        <p>
          In the example of this page we only use: "GET", "POST", and "DELETE", as the contents are taken, added or removed from the "db.json" file.
        </p>

        <p>
          The server must be installed, configured in the "package.json" file in the "scripts" section, and in running state, to activate it follow the instructions below:
        </p>


        <div style={ my_style_div }>
            
            <div style={ my_style_label }> NPM syntax </div>
            <div> 
                <pre style={{color: "green"}}>

                    { textNpmSintax }

                </pre> 

            <div style={ my_style_label }> package.json syntax </div>

                <pre style={{color: "green"}}>

                    { textPackageJsonSintax }

                </pre> 

            </div>
        </div>


      <button   className={ showForm ? 'btn btn-secondary mt-4 mb-4' : 'btn btn-danger mt-4 mb-4' } onClick={ () => setShowForm(!showForm) }> {showForm ? "hide form" : "insert data"  } </button>
      <FormInput showHide={showForm}/> 
    </div>
  );
};

export default FormRestAPI;
