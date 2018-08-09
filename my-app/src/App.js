import React, { Component } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <div className="App">

        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header class="mdl-layout__header" >
              <div class="mdl-layout__header-row">
                  <span class="mdl-layout-title" >Notes</span>
              
                  <div class="mdl-layout-spacer"></div>
              
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                    <form action="#">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                    <label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">
                        <i class="material-icons">search</i>
                    </label>
                      <div class="mdl-textfield__expandable-holder">
                        <input class="mdl-textfield__input" type="text" id="sample6"></input>
                        <label class="mdl-textfield__label" for="sample-expandable"></label>
                      </div>
                </div>
              </form>
                
              <button  class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" id="myButton1" onclick="myFunction()">			<i class="material-icons" id="icn" onclick="myFunction1()" >dashboard</i>
              <i class="material-icons" id="change" >list</i>
              </button>
              <button  class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" id="myButton" onclick="myFunction1()">			<i class="material-icons" id="change" onclick="myFunction1()" >dashboard</i>
              <i class="material-icons" id="icn">list</i>
              </button>
        
                    </nav>
              </div>
          </header>
        
          <div class="mdl-layout__drawer">
            <div id="profile">
                    <img src="profile.jpeg"/> 
                   <p><b>Rajashree Naik </b>
              rajashreenaik14@gmail.com </p>
                  </div>
                <nav class="mdl-navigation">
                    <b><a class="mdl-navigation__link" href=""><i class="material-icons">note</i> Notes</a></b>
                    <a class="mdl-navigation__link" href=""><i class="material-icons">alarm</i> Reminder</a>
                    <a class="mdl-navigation__link" href=""><i class="material-icons">delete</i> Trash</a>
                    <a class="mdl-navigation__link" href=""><i class="material-icons">help</i> Help & Feedback</a>
                </nav>
            </div>
        
        
        
            <div class="inside" id="inside1">
        
            <div class="mdl-grid" id="front">
                <div class="mdl-cell mdl-cell--2-col"></div>
                <div class="mdl-cell mdl-cell--6-col">
                <div id="show">
                  <div id="shade">
                      <div class="header2"> 
                      <div>
                <form className="App" onSubmit={this.onSubmit}>
                  <input value={this.state.term} onChange={this.onChange} />
                  <button>Add Todo</button>
                </form>
                    </div>
                  </div>
                </div>				
              
        
                
              </div>
               </div>
                <div class="mdl-cell mdl-cell--3-col">
                <div id="shade">
                    <div class="header2">
                    <div class="mdl-grid">
                        <div class="mdl-cell mdl-cell--3-col">
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                        <i class="material-icons" onclick="change1()">note</i>
                        </button>
                      </div>
                        <div class="mdl-cell mdl-cell--3-col">
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                        <i class="material-icons" onclick="change2()">list</i>
                        </button>
                      </div>
                        <div class="mdl-cell mdl-cell--3-col">
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                        <i class="material-icons">mic</i>
                        </button>
                      </div>
                        <div class="mdl-cell mdl-cell--3-col">
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                        <i class="material-icons" onclick="change3()">photo_camera</i>
                        </button>
                      </div>
                                 </div>
                  </div>
                </div>
              </div>
            </div>
            
        
        
        
        <div id="holder">
        <ul id="todo">
        <br></br>
        
        <List items={this.state.items} />
        
        </ul>
          
        </div>
        </div>
                  </div>
        
        
        </div>
      </div>





    );
  }
}

  
export default App;
