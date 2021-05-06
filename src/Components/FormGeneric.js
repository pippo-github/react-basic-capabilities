/* eslint-disable */

import { useState, useEffect, useRef } from "react";
import './css/formControl.css'


const FromComponent = () => {


    const [dataSend, setDataSend] = useState(false)
    
    const sendData = (e) =>{
        e.preventDefault();

        setValoriGenerica({...valoriGenerici }  )
        const { title, textDescription, urlImg }  = valoriGenerici; 

        out_title_element.current.innerText = "Title: " + title;
        out_desc_element.current.innerText = "Description: " + textDescription;
        out_urlImg_element.current.innerText = "Img url: " + urlImg;

        title_element.current.value = ''
        desc_element.current.value = ''
        urlImg_element.current.value = ''

        setDataSend(true);

    }

    const generiFuncToGetData = (e) => {

        let name = e.target.name
        let value = e.target.value
        setValoriGenerica({...valoriGenerici, id: new Date().getTime().toString(), [name]:value })

    }
    
    const [valoriGenerici, setValoriGenerica] = useState([]);
    const [title, setTitle] = useState('title');
    const [desc, setDesc] = useState("description");
    const [imgUrl, setImgUrl] = useState('https://example.com/image/file.jpeg');


    useEffect( () =>{

    },[])
    
    const title_element = useRef(null);
    const desc_element = useRef(null);
    const urlImg_element = useRef(null);

    const out_title_element = useRef(null);
    const out_desc_element = useRef(null);
    const out_urlImg_element = useRef(null);

    return(
        <div>

            <h1>
                Form component, generic function controll
            </h1>
            <p className='p-5'>
                This component shows how to manage all the controls of a form through a single generic function to check their status. 
            </p>

                <div style={{marginBottom: "77px"}}>
                    <form className='from-group' onSubmit={ (e) => sendData(e) }> 
                        <label  className='mt-3 form-control my_label' htmlFor="title">Title</label>
                        <input onChange={  generiFuncToGetData } className='form-control' ref={title_element} required type="text" name="title" id="title" placeholder={title}/>
                        
                        <label className='mt-3 form-control my_label' htmlFor="textDescription">Description</label>
                        <textarea  onChange={  generiFuncToGetData } style={{maxHeight:"75px"}} className='form-control' ref={desc_element} required name="textDescription" id="textDescription" placeholder={desc} cols="30" rows="10"></textarea>
                        
                        <label className='mt-3 form-control my_label' htmlFor="urlImg">Image url</label>
                        <input onChange={ generiFuncToGetData } className='form-control' ref={urlImg_element} required type="text" name="urlImg" placeholder={imgUrl} id="urlImg"/>

                        <input className='form-control btn btn-primary mt-2 mb-2' type="submit" value="send data"/>
                    </form>
                </div>

<div>
    <h2>
        {
            dataSend ? "Output" : ""             
        }
        
       {/* { (out_title_element.length > 0) || (out_desc_element.length > 0) || (out_urlImg_element.length > 0) && "output" } */}
    </h2>

    <div ref={out_title_element}></div>
    <div ref={out_desc_element}></div>
    <div ref={out_urlImg_element}></div>

</div>

        </div>
    )
}

export default FromComponent