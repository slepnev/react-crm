import React, { useEffect } from 'react';
import EntityListView from './EntityListView';
import { connect } from 'react-redux';
import { fetchEntities } from './entityActions';
import { State } from '../_app/reducers';

const EntityListReduxThunk = ({entities, fetchEntities}: any) => {
  useEffect(() => {
    fetchEntities();
  }, []);

  return (
    <EntityListView entities={entities} />
  );
};

const mapStateToProps = ({entities}: State) => {
  return {entities};
};

export default connect(mapStateToProps, {fetchEntities})(EntityListReduxThunk);
