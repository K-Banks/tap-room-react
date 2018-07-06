import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header/Header.jsx';
import Keglist from './KegList/Keglist.jsx';
import styles from './App.css';
import Error404 from './Error404/Error404.jsx';
import Footer from './Footer/Footer.jsx';

class App extends React.Component {

  render(){
    return (
      <div className={styles.gradient}>
        <div className={styles.wrapper}>
          <Header/>
          <Switch>
            <Route exact path='/' component={Keglist}/>
            <Route component={Error404}/>
          </Switch>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
