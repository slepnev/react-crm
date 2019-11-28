import React, { useEffect, useState } from 'react';
import * as styles from './DealForm.module.scss';
import DealFormView from './DealFormView';

const DealForm = (props: any) => {
  const [deal, setDeal] = useState({});

  useEffect(() => {
    console.log(props);
    document.title = 'Deal Form';

    const fetchData = async () => {
      try {
        const result = await fetch('/api/v1/deals', {method: 'GET'})
          .then(result => result.json());
        setDeal(result);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const createDeal = () => {
  };

  const updateDeal = () => {
  };

  return (
    <div className={styles['deal-form']}>
      {/*<DealFormView deal={deal} />*/}
    </div>
  );
};

export default DealForm;
