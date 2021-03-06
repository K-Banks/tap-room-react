import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header/Header.jsx';
import KegList from './KegList/KegList.jsx';
import styles from './App.css';
import Error404 from './Error404/Error404.jsx';
import Footer from './Footer/Footer.jsx';
import {v4} from 'uuid';
import AboutUs from './AboutUs/AboutUs.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {
        1: {
          name: 'The Red Pig Amber Ale',
          brand: 'Porco Rosso',
          price: 7.00,
          abv: 5.6,
          remaining: 9,
          description: 'An ale straight from the Adriatic'
        },
        2: {
          name: 'Sky Pirate Lager',
          brand: 'Laputa',
          price: 4.00,
          abv: 6.8,
          remaining: 110,
          description: 'Talk like a (sky)pirate'
        },
        3: {
          name: 'Howl and Growl',
          brand: 'Howl\'s Moving Castle',
          price: 6.50,
          abv: 4.8,
          remaining: 98,
          description: 'Whine like a true wizard'
        },
        4: {
          name: 'Ashitaka Ale',
          brand: 'Princess Mononoke',
          price: 7.50,
          abv: 8.5,
          remaining: 13,
          description: 'Brewed by the King of the Forest himself'
        },
        5: {
        name: 'Witch\'s Brew',
        brand: 'Kiki\'s Delivery Service',
        price: 4.50,
        abv: 5.0,
        remaining: 57,
        description: 'Something clever about a witch and a cauldron'
      },
    },
      showNewKegForm: false,
      showEditKegForm: false,
      selectedKeg: ''
    };
    this.handlePintPurchase = this.handlePintPurchase.bind(this);
    this.handleNewKegCreation = this.handleNewKegCreation.bind(this);
    this.handleShowNewKegForm = this.handleShowNewKegForm.bind(this);
    this.handleShowEditKeg = this.handleShowEditKeg.bind(this);
    this.handleKegEdit = this.handleKegEdit.bind(this);
    this.handleDeleteKeg = this.handleDeleteKeg.bind(this);
  }

  handlePintPurchase(kegId) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    if (newMasterKegList[kegId].remaining > 0) {
      newMasterKegList[kegId].remaining = newMasterKegList[kegId].remaining - 1;
    }
    this.setState({masterKegList: newMasterKegList});
  }

  handleNewKegCreation(newKeg) {
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {[newKegId]: newKeg});
    this.setState({masterKegList: newMasterKegList});
    this.setState({showNewKegForm: false});
  }

  handleShowNewKegForm() {
    this.setState({showNewKegForm: true});
  }

  handleShowEditKeg(kegId) {
    this.setState({showEditKegForm: true});
    this.setState({selectedKeg: kegId});
  }

  handleKegEdit(kegEdit, kegId) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    newMasterKegList[kegId] = kegEdit;
    this.setState({masterKegList: newMasterKegList});
    this.setState({showEditKegForm: false});
  }

  handleDeleteKeg(kegId) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    delete newMasterKegList[kegId];
    this.setState({masterKegList: newMasterKegList});
    this.setState({showEditKegForm: false});
  }

  render(){
    return (
      <div className={styles.gradient}>
        <div className={styles.wrapper}>
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList}/>}/>
            <Route path='/admin' render={(props)=><KegList kegList={this.state.masterKegList} onPurchasePint={this.handlePintPurchase}
            onNewKegCreation = {this.handleNewKegCreation}
            showNewKegForm = {this.state.showNewKegForm}
            onShowNewKegForm = {this.handleShowNewKegForm}
            onShowEditKegForm = {this.handleShowEditKeg}
            showEditKegForm = {this.state.showEditKegForm}
            selectedKegToEdit = {this.state.selectedKeg}
            onKegEdit = {this.handleKegEdit}
            onDeleteKeg = {this.handleDeleteKeg}
            currentRouterPath={props.location.pathname}/>}/>
            <Route path='/aboutUs' component={AboutUs}/>
            <Route component={Error404}/>
          </Switch>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
