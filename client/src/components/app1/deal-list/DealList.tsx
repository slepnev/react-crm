import React, { useEffect, useState } from 'react';
import * as styles from './DealList.module.scss';
import DealListView from './DealListView';
import mapKeys from 'lodash/mapKeys';

const DealList = () => {
  const [deals, setDeals] = useState({});
  console.log(styles);

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

  return (
    <div className={styles['deal-list-wrapper']}>
      <DealListView deals={deals} />
    </div>
  );
};

export default DealList;
