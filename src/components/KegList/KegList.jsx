import React from 'react';
import styles from './KegList.css';
import Keg from '../Keg/Keg.jsx';
import NewKegForm from '../NewKegForm/NewKegForm.jsx';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <div>
      <h2>Beers On Tap:</h2>
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
          key={kegId}/>;
        })}
      </div>
      <NewKegForm/>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onPurchasePint: PropTypes.func
};

export default KegList;
