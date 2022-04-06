import React from "react"

export default class Home extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        console.warn("Constructor called")
    }
    render(){
        return(
            <div>
                <h1>Home Works</h1>
            </div>
        )
    }
}