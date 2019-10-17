import React, { useEffect } from 'react';
import DealListView from './DealListView';
import { connect } from 'react-redux';
import { fetchDealList } from './dealListActions';
import { State } from '../../_app/reducers';

const DealList = ({deals, fetchDealList}: any) => {
  useEffect(() => {
    fetchDealList();
  }, []);

  return (
    <DealListView deals={deals} />
  );
};

const mapStateToProps = ({app2: {deals}}: State) => {
  return {deals};
};

export default connect(mapStateToProps, {fetchDealList})(DealList);
