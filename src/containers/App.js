import React, { Component } from 'react'
import Robots from '../components/Robots'
import {robots} from '../robotsList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }
  onSearchChange = (e) => {
    this.setState({searchField : e.target.value})

  }
  render() {
    const {robots, searchField} = this.state
    
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField
        .toLocaleLowerCase())
    })

      return !robots.length ? <h1>Loading</h1> : (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
             <Robots robots={filteredRobots}/>
          </Scroll>
        </div>
      )
  }
}
