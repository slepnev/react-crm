import styled from 'styled-components';

interface Props {
  center: boolean;
}

export const DealListWrapper = styled.div`
  text-align: ${(props: Props) => props.center ? 'center' : 'left'};
  margin: 0 auto;
`;
