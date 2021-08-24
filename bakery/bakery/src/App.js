import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "add",
      items: []
    }
  }


  handleButtonClick = (e) => {
    // console.log("App handleButtonClick e" , e)
    this.setState({ activeTab: e.target.innerText })
  }


  render() {
    // console.log(this.state.activeTab)
    return (

      <>
        {/* <h1>App</h1> */}
        <Button onClick={this.handleButtonClick} isSelected={this.state.activeTab === "add"}>add</Button>
        <Button onClick={this.handleButtonClick} isSelected={this.state.activeTab === "list"}>list</Button>
        <Button onClick={this.handleButtonClick} isSelected={this.state.activeTab === "pay"}>pay</Button>

        {this.state.activeTab === "add" && <Add/>}
        {this.state.activeTab === "list" && <List/>}
        {this.state.activeTab === "pay" && <Pay/>}
      </>
    )
  }
}

export default App