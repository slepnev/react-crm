import * as React from 'react';

const Environment = () => {

  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="text" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form>
    </div>
  );
};

export default Environment;
