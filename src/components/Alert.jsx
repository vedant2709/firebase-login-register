import React, { useEffect } from 'react';

function Alert({ error, setError }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 3000); // Change 3000 to the number of milliseconds you want the alert to stay visible

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [error, setError]);

  if (!error) return null;

  return (
    <div className='bg-red-300 w-[25vw] px-5 py-2 absolute top-10 right-10 border-[1px] border-red-500 rounded-md text-xl text-red-600 font-semibold flex justify-center'>
      {error}
    </div>
  );
}

export default Alert;
