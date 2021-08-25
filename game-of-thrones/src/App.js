import React from 'react'
import Character from './component/Character'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: []
    }
  }


  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(result => result.json())
      .then(result => this.setState({ characters: result }))
  }


  render() {
    return (
      <>
        <h1>Game of thrones</h1>
        
        <ul className="d-flex flex-wrap">
          {this.state.characters.map((character) => {
            console.log(character)
            return (
              <Character 
               name={character.fullName} 
               title={character.title} 
               image={character.imageUrl}
               >
                </Character>

            )
          })}
        </ul>
      </>
    )
  }
}
export default App