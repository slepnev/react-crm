import React, { useEffect, useState } from 'react';
import * as styles from './DealList.module.scss';
import DealListView from './DealListView';
import mapKeys from 'lodash/mapKeys';
import { Link } from 'react-router-dom';
import { MenuItemParams, MenuList } from '../../_app/sidebar/sidebarStyled';

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

        <Link className="waves-effect waves-light btn" to="/app1/new">
          <i className="material-icons left">add</i>Добавить сделку
        </Link>

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
