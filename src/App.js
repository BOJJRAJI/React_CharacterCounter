import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

class App extends Component {
  state = {string: '', stringList: []}

  addString = e => {
    e.preventDefault()
    const {string, stringList} = this.state

    const details = {
      string,
      id: v4(),
      c: string.length,
    }

    this.setState(prevState => ({
      stringList: [...prevState.stringList, details],
      string: '',
    }))
  }

  render() {
    const {string, stringList} = this.state
    console.log(stringList)
    return (
      <div className="bg-container">
        <div className="character-counter-container">
          <div className="heading-container">
            <h1 className="heading">count the characters like a Boss...</h1>
          </div>
          {stringList.length === 0 ? (
            <div className="no-strings-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="image"
              />
            </div>
          ) : (
            <ul className="strings-container">
              {stringList.map(item => (
                <li className="list" key={item.id}>
                  <p>
                    {item.string} : {item.c}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <form className="app-container" onSubmit={this.addString}>
          <h1 className="counter-heading">Character Counter</h1>
          <input
            className="input"
            type="text"
            value={string}
            onChange={e => this.setState({string: e.target.value})}
            placeholder="Enter the Characters here"
          />
          <button type="submit" className="button">
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default App
