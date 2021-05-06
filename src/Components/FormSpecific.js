import { useState, useEffect, useRef } from "react";
import './css/formControl.css'


const FromComponent = () => {


    const my_style={
        background: "rgb(122 72 142)",
        padding: "7px"
    }

    

    const sendData = (e) =>{
        e.preventDefault();
        
        setObjData({ title, desc, imgUrl })
        setTitle("")
        setDesc("")
        setImgUrl("")

        setSubmitData(true)
    }


    
    const [title, setTitle] = useState('title');
    const [desc, setDesc] = useState("description");
    const [imgUrl, setImgUrl] = useState('https://example.com/image/file.jpeg');

    const [submitData, setSubmitData] = useState(false);

    const [objData, setObjData] = useState({});


    useEffect( () =>{
        document.getElementById("title").placeholder ='title'
        document.getElementById("textDescription").placeholder ='description'
        document.getElementById("urlImg").placeholder ='https://example.com/image/file.jpeg'

        if(submitData){

            title_element.current.style.color='white'
            title_element.current.style.backgroundColor='mediumseagreen'
            title_element.current.style.padding='3px'
    
            desc_element.current.style.color='white'
            desc_element.current.style.backgroundColor='mediumseagreen'
            desc_element.current.style.padding='3px'
    
            urlImg_element.current.style.color='white'
            urlImg_element.current.style.backgroundColor='mediumseagreen'
            urlImg_element.current.style.padding='3px'
        }


// desc_element
// urlImg_element
    })
    
    const title_element = useRef(null);
    const desc_element = useRef(null);
    const urlImg_element = useRef(null);

    return(
        <div>

            <h1>
                Form component, specific function controll
            </h1>
            <p className='p-5'>
                This component shows how to manage all the controls of a form through a specific function for a single control to check their status. 
            </p>

                <div style={{marginBottom: "77px"}}>
                    <form className='from-group' onSubmit={ (e) => sendData(e) }> 
                        <label  className='mt-3 form-control my_label' htmlFor="title">Title</label>
                        <input onChange={  (e) => { setTitle(e.target.value) } } className='form-control' value={title}  required type="text" name="title" id="title" placeholder={title}/>
                        
                        <label className='mt-3 form-control my_label' htmlFor="textDescription">Description</label>
                        <textarea  onChange={  (e) => { setDesc(e.target.value) } } style={{maxHeight:"75px"}} value={desc} className='form-control'  required name="textDescription" id="textDescription" placeholder={desc} cols="30" rows="10"></textarea>
                        
                        <label className='mt-3 form-control my_label' htmlFor="urlImg">Image url</label>
                        <input onChange={ (e) => { setImgUrl(e.target.value) } } value={imgUrl} className='form-control'  required type="text" name="urlImg" placeholder={imgUrl} id="urlImg"/>

                        <input className='form-control btn btn-primary mt-2 mb-2' type="submit" value="send data"/>
                    </form>
                </div>

                <div>

                    {
                        submitData && (

                            <div style={my_style}>

                                <h3 className='text-white'>
                                    output box
                                </h3>
                                <div>
                                    <span  >title: </span> <span ref={title_element} > { objData.title } </span> 
                                </div>

                                <div>
                                    <span  >description: </span> <span ref={desc_element} > { objData.desc } </span> 
                                </div>

                                <div>
                                    <span  >image url: </span> <span ref={urlImg_element} > { objData.imgUrl } </span> 
                                </div>

                            </div>

                        )
                    }
                    
                    
                </div>

        </div>
    )
}


export default FromComponent