import React, { useEffect, useState } from 'react';
import * as styles from './DealList.module.scss';
import DealListView from './DealListView';
import _ from 'lodash';

const DealList = () => {
  const [deals, setDeals] = useState({});

  useEffect(() => {
    document.title = 'Deal List';

    const fetchData = async () => {
      try {
        const result = await fetch('/api/v1/deals', {method: 'GET'})
          .then(result => result.json());
        const dealMap = _.mapKeys(result, 'id');
        setDeals(dealMap);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.dealListWrapper}>
      <DealListView deals={deals} />
    </div>
  );
};

export default DealList;
