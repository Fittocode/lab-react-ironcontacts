import React from 'react'
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      actors: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
    }
    this.addActor = this.addActor.bind(this)
    this.sortName = this.sortName.bind(this)
    this.sortPopularity = this.sortPopularity.bind(this)
    this.removeContact = this.removeContact.bind(this)
  }

  addActor() {
    // get random position in contact.json
    let min = Math.ceil(5)
    let max = Math.floor(contacts.length-1)
    let randomPlace = Math.floor(Math.random() * (max - min) + min)
    // add contact at random position of json to actors array
    if (randomPlace >= 5) {
      this.state.actors.push(contacts[randomPlace])
    } else {
      alert('There are no more contacts to add!')
    }
    contacts.splice(randomPlace, 1)
    // re-render 
    this.setState(state => ({
      actors: this.state.actors
    }))
  }

  sortName() {
    this.state.actors.sort(function(a, b) {
      return (a.name < b.name) ? -1 : 1
    })
    this.setState(state => ({
      actors: this.state.actors
    }))
  }

  sortPopularity() {
    this.state.actors.sort(function(a, b) {
      return (a.popularity < b.popularity) ? -1 : 1
    })
    this.setState(state => ({
      actors: this.state.actors
    }))
  }
  removeContact(index) {
    this.state.actors.splice(index, 1)
    this.setState(state => ({
      actors: this.state.actors
    }))
  }
  
  render() {
    return (
      <div className="Contacts-table">
      <h1>IronContacts</h1>
      <button onClick={this.addActor}>Add Random Actor</button>
      <button onClick={this.sortName}>Sort by Name</button>
      <button onClick={this.sortPopularity}>Sort by Popularity</button>
      <table>
        <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {this.state.actors.map((contact, index) => {
          return  <tr key={contact.id}>
                    <td><img src={contact.pictureUrl}></img></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td><button onClick={this.removeContact.bind(undefined, index)} key={contact.id}>delete</button></td>
                  </tr>
        })}
        </tbody>
      </table>
    </div>
    )
  }
}

export default App;
