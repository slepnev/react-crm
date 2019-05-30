import React, { useEffect, useState } from 'react';

const EntitieList = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    document.title = 'Компании';

    const fetchData = async () => {
      try {
        const result = await fetch('/api/v1/entities', {method: 'GET'})
          .then(result => result.json());
        setEntities(result);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const renderList = () => {
    return entities.length ? entities.map((item: any) => (
      <tr key={item.id}>
        <td><b>{item.id}</b></td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td/>
      </tr>
    )) : <tr/>;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Наименование</th>
          <th>Уточнения</th>
          <th/>
        </tr>
      </thead>
      <tbody>
        {renderList()}
      </tbody>
    </table>
  );
};

export default EntitieList;
