import { useEffect, useState } from 'react';

const toCapital = str => str.charAt(0).toUpperCase() + str.slice(1);

export const includeUpdatableResource = (Component, url, name) => props => {
  const [initialData, setInitialData] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      setInitialData(response);
      setData(response);
    })();
  }, []);

  const handleChangeData = newData => {
    setData({ data, ...newData });
  };

  const handlePostData = async () => {
    const response = await axios.post(url, { [name]: data });
    setInitialData(response);
    setData(response);
  };

  const handleResetData = () => {
    setData(initialData);
  };

  const dataProps = {
    [name]: data,
    [`onChange${toCapital(name)}`]: handleChangeData,
    [`onPost${toCapital(name)}`]: handlePostData,
    [`onReset${toCapital(name)}`]: handleResetData,
  };

  return <Component {...props} {...dataProps} />;
};
