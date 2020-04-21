import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
//components
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/users" component={Users} />
        <Route path="/" component={SignupForm} />
      </Switch>
    </div>
  );
}

export default App;
