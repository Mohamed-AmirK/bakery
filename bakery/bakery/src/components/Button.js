import React from 'react'

class Button extends React.Component {
  render() {
      console.log(this.props)
    return (
			<button onClick={this.props.onClick} className={`btn m-2 ${this.props.isSelected ? "btn-primary" : "btn-outline-primary"}`} isSelected={this.props.activTab}>
                {this.props.children}
            </button>
    )
  }
}

export default Button