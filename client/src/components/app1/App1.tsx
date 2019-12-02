import React, { ReactElement } from 'react';
import { renderRoutes } from 'react-router-config';

type Props = {
  [key: string]: any,
}

const App1: React.FC<any> = (props: React.PropsWithChildren<Props>): ReactElement<any> => {

  return (
    <div>
      {renderRoutes(props.route.routes)}
    </div>
  );
};

export default App1;
