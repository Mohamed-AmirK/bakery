import React from 'react'

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            price: 0
        }
    }


    handleNameChange = (e) => {
        // console.log("App handleButtonClick e" , e)
        this.setState({ name: e.target.value })
    }
    
    handlePriceChange = (e) => {
        this.setState({price: e.target.value})
    }


    render() {
        console.log(this.state)
        return (
            <>
            <h1>Add</h1>
            <input type="Text" onChange={this.handleNameChange}/>
            <input type="range" min="1" max="10" onChange={this.handlePriceChange}/> 
            </>
        )
    }
}

export default Add