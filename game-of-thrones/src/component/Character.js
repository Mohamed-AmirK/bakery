import React from 'react'
class Character extends React.Component { 
    render(){
        return (
            
                <div className="col-4" style={{ height:"350px"}}>
                    <img className="rounded img-fluid" src={this.props.image} style={{width:"60%", height:"200px", objectFit:"cover"}} />
                    <div className="container">
                        <h4><b>{this.props.name}</b></h4>
                        <p>{this.props.title}</p>
                    </div>
                </div>
        
        )
    }
}

export default Character