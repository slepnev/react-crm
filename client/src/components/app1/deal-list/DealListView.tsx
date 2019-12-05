import React, { ReactElement } from 'react';
import { Deal } from '../../../interfaces/dealInterface';
import { Link } from 'react-router-dom';
import * as styles from './DealList.module.scss';

type Props = {
  deals: Deal[],
  [key: string]: any,
}

const DealListView: React.FC<any> = React.memo(({deals}: Props): ReactElement<any> => {
  const renderList = () => {
    const dealsIds = Object.keys(deals || {});

    return dealsIds.length ? dealsIds.map((itemId: any) => (
      <tr key={deals[itemId].id}>
        <td><b>{deals[itemId].id}</b></td>
        <td>{deals[itemId].title}</td>
        <td>{deals[itemId].description}</td>
        <td className={styles['deal-list__edit']}>
          <Link className="waves-effect waves-light btn" to={`/app1/edit/${deals[itemId].id}`}>
            <i className="material-icons left">edit</i>Редактировать
          </Link>
        </td>
      </tr>
    )) : <tr />;
  };

  return (
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Наименование</th>
        <th>Уточнения</th>
        <th />
      </tr>
      </thead>
      <tbody>
      {renderList()}
      </tbody>
    </table>
  );
});

export default DealListView;
