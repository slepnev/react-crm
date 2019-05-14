import React, { useEffect, useState } from 'react';
import styles from './DealList.module.scss';

const DealList = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    document.title = 'Deal List';

    const fetchData = async () => {
      const result = await fetch('/api/deals', {method: 'GET'})
        .then(result => result.json());
      setDeals(result);
    };

    fetchData();
  }, []);

  const renderList = () => {
    return deals.length && deals.map(item => (
      <div key={item.id}>
        <b>{item.id}</b>
        <span>{item.title}</span>
        <div>{item.description}</div>
      </div>
    ));
  };

  return (
    <div className={styles.host}>
      {renderList()}
    </div>
  );
};

export default DealList;
