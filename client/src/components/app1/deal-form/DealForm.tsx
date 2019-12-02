import React, { useEffect, useState } from 'react';
import * as styles from './DealForm.module.scss';

enum Type {
  Edit = 'edit',
  Create = 'create',
}

const DealForm = (props: any) => {
  const [deal, setDeal] = useState({});
  const [type, setType] = useState();

  useEffect(() => {
    console.log(props);

    setType(props.match.params && props.match.params.id ? Type.Edit : Type.Create);

    if (type === Type.Edit) {
      document.title = 'Deal Edit';
    } else {
      document.title = 'Deal Create';
    }

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

  function renderCaption() {
    return type === Type.Edit
      ? 'Редактирование сделки'
      : 'Создание сделки';
  }

  const createDeal = () => {
  };

  const updateDeal = () => {
  };

  return (
    <div className={styles['deal-form']}>
      <h4>{renderCaption()}</h4>
      {/*<DealFormView deal={deal} />*/}
    </div>
  );
};

export default DealForm;
