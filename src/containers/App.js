import React, { Component }  from 'react';
import CardList from '../components/CardList'
import Search from '../components/search';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            robofield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => {this.setState({robots: users})});
    }
    onSearchRobots = (event) => {
        this.setState({robofield: event.target.value})
        
    }
    render(){
        const {robots, robofield} = this.state;
        const SearchFilter = robots.filter(robot => {
            return robot.name.toLowerCase().includes(robofield.toLowerCase());
        })
        return !robots.length ?
        <h1>Loading</h1> :
        (
                <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <Search OnSeachChange={this.onSearchRobots}/>
                <Scroll>
                <CardList robots={SearchFilter} />
                </Scroll>
                
            </div>
            );
    }
    
    
}
export default App;