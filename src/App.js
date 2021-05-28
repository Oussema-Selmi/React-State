import React, { Component } from 'react'
import Profile from './Profile'
export class App extends Component {

    state = {
        Person : { 
            fullName:"Oussema Selmi",
            bio:"Oussema Selmi is a 22-year-old town counsellor who enjoys watching YouTube videos, photography and football. He is intelligent and reliable, but can also be very pessimistic and a bit moody.", 
            imgSrc:"https://picsum.photos/200/300", 
            profession:"Web developper",
        },
        show: false ,
    }

    togg = () =>{this.setState(()=>this.state.show = !this.state.show)}
    
    render() {
        return (
            <div>
                <button onClick={this.togg}>{this.state.show?"Hide Profile":"Show Profile"}</button>
                {this.state.show?<Profile 
                fullName={this.state.Person.fullName}
                bio={this.state.Person.bio}
                imgSrc={this.state.Person.imgSrc}
                profession={this.state.Person.profession}
                />:null}
                
            </div>
        )
    }
}

export default App
