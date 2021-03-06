import React from 'react';
import './App.css';
import {Route,Link,Switch} from 'react-router-dom'
import Home from './components/common/Home'
import Login from './components/common/Login'
import Book from './components/auth/Book'
import Success from './components/auth/Success'
import Navbar from './components/common/Navbar'
import NotFound from './components/common/NotFound'
import Bookings from './components/auth/Bookings'

function App() {
  return (
    <div>
      <Navbar/>
     <Switch>
        <Route exact path="/" render={()=><Home/>}/>
        <Route exact path="/book" render={(props)=><Book {...props}/>}/>
        <Route exact path="/confirmed" render={(props)=><Success {...props}/>}/>
        <Route exact path="/login" render={()=><Login/>}/>
        <Route exact path="/bookings" render={()=><Bookings/>}/>
        <Route render={()=><NotFound />} />
     </Switch>
    </div>
  );
}

export default App;
