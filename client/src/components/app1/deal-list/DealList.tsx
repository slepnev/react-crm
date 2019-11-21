import React, { useEffect, useState } from 'react';
import * as styles from './DealList.module.scss';
import DealListView from './DealListView';
import mapKeys from 'lodash/mapKeys';

const DealList = () => {
  const [deals, setDeals] = useState({});

  useEffect(() => {
    document.title = 'Deal List';

    const fetchData = async () => {
      try {
        const result = await fetch('/api/v1/deals', {method: 'GET'})
          .then(result => result.json());
        const dealMap = mapKeys(result, 'id');
        setDeals(dealMap);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const renderButtons = () => {
    return (
      <div className={styles['deal-list__buttons']}>
        <a className="waves-effect waves-light btn"><i className="material-icons left">add</i>Добавить сделку</a>
      </div>
    );
  };

  return (
    <div className={styles['deal-list']}>
      {renderButtons()}
      <div className={styles['deal-list__wrapper']}>
        <DealListView deals={deals} />
      </div>
    </div>
  );
};

export default DealList;
