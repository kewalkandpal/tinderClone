import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tinder from './Tinder';
import Chats from './Chats'
import FooterBtn from './FooterBtn';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Tinder />
          <FooterBtn />
        </Route>
        <Route exact path="/chats">
          <Header toBack="/"/>
          <Chats />
        </Route>
        <Route exact path="/chats/:abc">
          <Header toBack="/chats"/>
          <ChatScreen />
        </Route>
      </Switch>
      </Router>    
    </div>
  );
}

export default App;

