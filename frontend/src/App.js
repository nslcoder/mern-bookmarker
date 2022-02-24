import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000')
      .then((res) => res.json())
      .then((parsedData) => setData(parsedData.message));
  }, [data]);

  return <div className='App'>{!data ? <h1>Loading....</h1> : data}</div>;
}

export default App;
