import React, { useEffect } from 'react';
import DealListView from './DealListView';
import { connect } from 'react-redux';
import { fetchEntities } from './dealActions';
import { State } from '../../_app/reducers';

const DealList = ({deals, fetchEntities}: any) => {
  useEffect(() => {
    fetchEntities();
  }, []);

  return (
    <DealListView deals={deals} />
  );
};

const mapStateToProps = ({deals}: State) => {
  return {deals};
};

export default connect(mapStateToProps, {fetchEntities})(DealList);
