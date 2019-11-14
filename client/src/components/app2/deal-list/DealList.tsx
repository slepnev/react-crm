import React, { useEffect } from 'react';
import DealListView from './DealListView';
import { connect } from 'react-redux';
import { fetchDealList } from './dealListActions';
import { State } from '../../_app/reducers';
import { DealListWrapper } from './dealListStyle';

const DealList = ({deals, fetchDealList}: any) => {
  useEffect(() => {
    fetchDealList();
  }, []);

  return (
    <DealListWrapper center={true}>
      <DealListView deals={deals} />
    </DealListWrapper>
  );
};

const mapStateToProps = ({app2: {deals}}: State) => {
  return {deals};
};

export default connect(mapStateToProps, {fetchDealList})(DealList);
