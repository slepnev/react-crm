import React, { ReactElement } from 'react';
import { Entity } from './entityInterface';
import { EntityState } from './entityReducer';

type EntityListView = {
  entities: EntityState,
  [key: string]: any,
}

const EntityListView: React.FC<any> = React.memo(({entities}: EntityListView): ReactElement<any> => {
  const renderList = () => {
    const entitiesIds = Object.keys(entities || {});

    return entitiesIds.length ? entitiesIds.map((itemId: any) => (
      <tr key={entities[itemId].id}>
        <td><b>{entities[itemId].id}</b></td>
        <td>{entities[itemId].title}</td>
        <td>{entities[itemId].description}</td>
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

export default EntityListView;
