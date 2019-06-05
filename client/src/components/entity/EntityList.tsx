import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import EntityListView from './EntityListView';

const EntityList = () => {
  const [entities, setEntities] = useState({});

  useEffect(() => {
    document.title = 'Компании';

    const fetchData = async () => {
      try {
        const result = await fetch('/api/v1/entities', {method: 'GET'})
          .then(result => result.json());
        const entities = _.mapKeys(result, 'id');
        setEntities(entities);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <EntityListView entities={entities} />
  );
};

export default EntityList;
