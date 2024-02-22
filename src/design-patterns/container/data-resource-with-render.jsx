import { useEffect, useState } from 'react';

const DataResourceWithRender = ({ getData = () => {}, render }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setData(response.data);
    })();
  }, [getData]);

  return render(data);
};

export default DataResourceWithRender;
