import React from 'react';
import styles from './KegList.css';
import Keg from '../Keg/Keg.jsx';
import NewKegForm from '../NewKegForm/NewKegForm.jsx';
import PropTypes from 'prop-types';

function KegList(props){
  let newKegForm = null;
  if (props.showNewKegForm === true && props.currentRouterPath) {
    newKegForm = <NewKegForm onNewKegCreation = {props.onNewKegCreation}/>;
  } else if (props.showNewKegForm === false && props.currentRouterPath) {
    newKegForm = <button onClick={() => {props.onShowNewKegForm();}}>Click here to add a new keg</button>;
  }

  return (
    <div>
      <h2>Beers On Tap:</h2>
      {newKegForm}
      <div className={styles.flex}>
        {Object.keys(props.kegList).map(function(kegId) {
          var keg = props.kegList[kegId];
          return <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          remaining={keg.remaining}
          description={keg.description}
          onPurchasePint={props.onPurchasePint}
          kegId={kegId}
          currentRouterPath={props.currentRouterPath}
          onShowEditKegForm={props.onShowEditKegForm}
          showEditKegForm={props.showEditKegForm}
          selectedKegToEdit={props.selectedKegToEdit}
          onKegEdit = {props.onKegEdit}
          onDeleteKeg = {props.onDeleteKeg}
          key={kegId}/>;
        })}
      </div>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onPurchasePint: PropTypes.func,
  currentRouterPath: PropTypes.string,
  onNewKegCreation: PropTypes.func,
  showNewKegForm: PropTypes.bool,
  onShowNewKegForm: PropTypes.func,
  onShowEditKegForm: PropTypes.func,
  showEditKegForm: PropTypes.bool,
  selectedKegToEdit: PropTypes.string,
  onKegEdit: PropTypes.func,
  onDeleteKeg: PropTypes.func
};

export default KegList;
