import React from 'react';

const HomeTest = () => {
  const handleTest = async () => {
    try {
      const res = await axios.post(
        'http://localhost:300S1/api/products/create',
        payload
      );
      console.log('res :>> ', res);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };
  return (
    <div>
      <Button onClick={handleTest}>post new products</Button>
    </div>
  );
};

export default HomeTest;
