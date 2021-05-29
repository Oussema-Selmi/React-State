
import React, { Component } from 'react'


export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }


    render() {
        return (
            <div>
                <ul>
                    <img src={this.props.imgSrc} alt="person1"/>
                    <li>Fullname : {this.props.fullName}</li>
                    <li>Bio : {this.props.bio} </li>
                    <li>Profession  : {this.props.profession} </li>
                </ul>
                <div className="text-muted">{this.state.date.toLocaleTimeString()}</div>


               
            </div>

            
        )
    }
}

export default Profile
