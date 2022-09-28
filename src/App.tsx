import React, { FC, useEffect, useState } from 'react';
import { getAssets } from './api';

const App: FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const newData = await getAssets();
      console.log('newData', newData); // debug
      // setData(newData); // TODO
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      {data && <div className="data">Data...</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default App;
