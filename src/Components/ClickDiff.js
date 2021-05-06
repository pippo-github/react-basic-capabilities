/* eslint-disable */

import { useEffect, useState } from "react"

const ButtonComponent = ({label, bntType, functionClick}) =>{ 
    return(
        <div>
            <button className={bntType} onClick={ functionClick }>{label}</button>
        </div>
    )
}

const ClickDiff = () =>{

    const my_style_div = {
        textAlign: "left",
        marginTop: "44px",
        background: "black",
        color: "green",
        padding: "7px",
        minHeight: "280px"
    }

    const my_style_label = {
        color: "white",
        padding: "11px"
    }


    const [stateBtnSyns, setStateBtnSyns] = useState(0)
    const [stateBtnAsyns, setStateBtnAsyns] = useState(0)

    const textFunAsync = `
    const clickAsync = () => {
        setTimeout( () =>{
            setStateBtnAsyns( (stateBtnAsyns) => {
                return stateBtnAsyns + 1
            })
        }, 2000)
    }`
    
    const textFunSync = `
    const  clickSync = () => {
        setTimeout( () =>{
            setStateBtnSyns( stateBtnSyns + 1)
        }, 2000)
    }`
    

    const clickAsync = () => {
        setTimeout( () =>{
            setStateBtnAsyns( (stateBtnAsyns) =>{
                return stateBtnAsyns + 1
            })
        }, 2000)
    } 

    const  clickSync = () => {
        setTimeout( () =>{
            setStateBtnSyns( stateBtnSyns + 1)
        }, 2000)
    }

    return(
        <div>
            <h1>
                Click Event diff page
            </h1>

            <div>

                <p>
                    React produces asynchronous updates for UI elements.
                </p>
                <p>
                    This page demonstrates how instead the events are controlled by the framework in a synchronous way differently  from what one might think.
                </p>

                <p>
                    To verify this behavior, press several times on the synchronous key, after two seconds it will carry out the increase, not taking into account how many times this has been pressed, the increase will always be one unit, then carry out the same operation on the another key, this instead after the delay executes the increment of the variable every time it has been clicked.
                </p>
            </div>

<div className='row'>
    <div className='col-6 text-center mb-3'>
        <span>Sync count: </span>{ stateBtnSyns }
        <ButtonComponent bntType="btn btn-primary mt-4" label='btn sync event'  functionClick={ () => clickSync() }/>

        <div style={ my_style_div }>
            <div style={ my_style_label }> sintax </div>
            <div> 
                <pre style={{color: "green", minHeight: "222px"}}>

{ textFunSync }
    
                </pre> 
            </div>
        </div>
    </div>


    <div className='col-6 text-center mb-3'>
        <span>Async count: </span>{ stateBtnAsyns }
        <ButtonComponent bntType="btn btn-success mt-4" label='btn async event'  functionClick={ () => clickAsync() }/>

        <div style={ my_style_div }>
            <div style={ my_style_label }> sintax </div>
            <div> 
                <pre style={{color: "green", minHeight: "222px"}}>

{ textFunAsync }
    
                </pre> 
            </div>
        </div>

        
    </div>
</div>            

        </div>
    )
}


export default ClickDiff