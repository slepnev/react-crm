import React, { ClassAttributes, Props, PropsWithRef, useEffect, useState } from 'react';
import * as styles from './DealForm.module.scss';
import { Deal } from '../../../interfaces/dealInterface';

enum Type {
  Edit = 'edit',
  Create = 'create',
}

const DealForm = (props: any) => {
  const [id, setId] = useState<string | null>();
  const [deal, setDeal] = useState<Deal>();
  const [type, setType] = useState<Type>();

  useEffect(() => {
    console.log(props);

    setId((props.match.params && props.match.params.id) || null);
    console.log(id);
    setType(id ? Type.Edit : Type.Create);

    const fetchData = async () => {
      try {
        const result = await fetch('/api/v1/deals/' + id, {method: 'GET'})
          .then(result => result.json());
        setDeal(result);
      } catch (e) {
        console.log(e);
      }
    };

    if (type === Type.Edit) {
      document.title = 'Deal Edit';

      fetchData();
    } else {
      document.title = 'Deal Create';
    }
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
