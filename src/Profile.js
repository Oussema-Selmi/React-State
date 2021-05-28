
import React, { Component } from 'react'

export class Profile extends Component {



    render() {
        return (
            <div>
                <ul>
                    <img src={this.props.imgSrc} alt="person1"/>
                    <li>Fullname : {this.props.fullName}</li>
                    <li>Bio : {this.props.bio} </li>
                    <li>Profession  : {this.props.profession} </li>
                </ul>
            </div>
        )
    }
}

export default Profile
