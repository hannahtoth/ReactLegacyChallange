import React, {Component} from 'react'
import { Button } from 'reactstrap';
import Dogs from './Dogs'

export default class DogIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            img: ""
        }
    }


componentDidMount(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => (
    this.setState({
            img: data.message
        })
))
}
render(){
    return(
        <div>
         <Button outline color="secondary" onClick={e => this.componentDidMount(e)}> Dogs! </Button>
         <br/>
         <br/>
            <img src={this.state.img}></img>
            <br />
        </div>
    )
}
}