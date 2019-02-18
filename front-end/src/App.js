import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Row, Col} from 'reactstrap'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      transactionMade: false,
      submittedForm: false,
      error: '',
    }
  }
  handleNewUser = (event) => {
    axios('http://localhost:5000/', {
      method: 'post',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      },
      data:{
        name: event.target.name,
        surname: event.target.surname,
        userID: event.target.userID
      }
    })
    .then((res) => {
      if(res.status == 203){
        this.setState({submittedForm: true, error: 'User created, please make a transaction :D'})
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleTransaction = (event) => {
     axios('http://localhost:5000/', {
      method: 'post',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      },
      data:{
        ID: event.target.userID,
        quantity: event.target.quantity,
      }
    })
    .then((res) => {
      if(res.status == 203){
        this.setState({transactionMade: true, error: 'Transaction made'})
      }
      else{
        this.setState({error: 'This is not a registered user, please register in the database before making a transaction'})
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    if(this.state.submittedForm){
      return(
        <div>
          <Row>
              <Col>
                <form onSubmit={this.handleTransaction}>
                  <Row>
                    <h2>Make a transaction (you have to register first)</h2>
                    <Col md={6}>
                      <label>ID</label>
                      <input type="text" name="userID"/>
                    </Col>
                    <Col md={6}>
                      <label>Quantity you want to put into your account</label>
                      <input type="text" name="quantity" ></input>
                    </Col>
                    <button type="submit">Send</button>
                  </Row>
                </form>
              </Col> 
          </Row>
          {this.state.error}
        </div>
      )
    }
    else if(this.state.transactionMade){
      return(
        <div>
          <Row>
            <Col>
              <div>
                <form onSubmit={this.handleNewUser}>
                  <Row>
                    <h2>Register with your ID</h2>
                    <Col md={6}>
                      <label>Name</label>
                      <input type="text" name="name" id="nameInput" placeholder="Eg: Jose"/>
                    </Col>
                    <Col md={6}>
                      <label>Surname</label>
                      <input type="text" name="surname" id="surnameInput" placeholder="Eg: Martin"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label>Identification Document (ID)</label>
                      <input type="text" name="userID" id="idInput" placeholder="Eg: 00000000A"></input>
                    </Col>
                    <button type="submit">Submit</button>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
          {this.state.error}
        </div>
      )
    }
    else{
      return (
        <div>
          <Row>
            <Col>
              <div>
                <form onSubmit={this.handleNewUser}>
                  <Row>
                    <h2>Register with your ID</h2>
                    <Col md={6}>
                      <label>Name</label>
                      <input type="text" name="name" id="nameInput" placeholder="Eg: Jose"/>
                    </Col>
                    <Col md={6}>
                      <label>Surname</label>
                      <input type="text" name="surname" id="surnameInput" placeholder="Eg: Martin"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label>Identification Document (ID)</label>
                      <input type="text" name="userID" id="idInput" placeholder="Eg: 00000000A"></input>
                    </Col>
                    <button type="submit">Submit</button>
                  </Row>
                </form>
              </div>
            </Col>
            <Col>
              <form onSubmit={this.handleTransaction}>
                <Row>
                  <h2>Make a transaction (you have to register first)</h2>
                  <Col md={6}>
                    <label>ID</label>
                    <input type="text" name="userID"/>
                  </Col>
                  <Col md={6}>
                    <label>Quantity you want to put into your account</label>
                    <input type="text" name="quantity" ></input>
                  </Col>
                  <button type="submit">Send</button>
                </Row>
              </form>
            </Col> 
          </Row>
        </div>
      );
    } 
  }
}

export default App;
