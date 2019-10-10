import React, { ReactElement } from 'react';
import { Deal } from '../../../interfaces/dealInterface';

type DealListView = {
  deals: Deal[],
  [key: string]: any,
}

const DealListView: React.FC<any> = React.memo(({deals}: DealListView): ReactElement<any> => {
  const renderList = () => {
    const dealsIds = Object.keys(deals || {});

    return dealsIds.length ? dealsIds.map((itemId: any) => (
      <tr key={deals[itemId].id}>
        <td><b>{deals[itemId].id}</b></td>
        <td>{deals[itemId].title}</td>
        <td>{deals[itemId].description}</td>
        <td />
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
