import { useEffect, useState } from 'react';
import './App.css';
import { NormalOperator } from './components/CopyArray/NormalOperator';

function App() {
  const [token, setToken] = useState('');

  const getToken = () => {
    const dataReq = new FormData();

    dataReq.append('client_id', 'smdc');
    dataReq.append('username', 'vietvv@beetsoft.com.vn');
    dataReq.append('password', 'Bb@123456');
    dataReq.append('grant_type', 'password');
    dataReq.append('language', 'en');
    fetch('https://dev.api.smdc-dev.com/iam/oauth/token', {
      headers: {
        Authorization: 'Basic c21kYzpzbWRjQEFhMTIzNDU2',
      },
      method: 'POST',
      body: dataReq,
    }).then(res => res.json()).then(res => {
      localStorage.setItem('access_token', res?.access_token);
      setToken(res?.access_token);
    }).catch(e => console.error(e));
  }

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setToken(localStorage.getItem('access_token'))
    }
  }, []);
  return (
    <div className='block px-5'>
      <div className='flex mt-5 justify-end'>
        <button className='border p-1 rounded-md bg-emerald-600 text-white mr-2' onClick={() => {
          getToken();
        }}>Get Token</button>
        <input className='block border rounded outline-0 w-1/2 disabled:bg-gray-300 px-1' value={token} disabled />
      </div>
      <NormalOperator />
    </div>
  );
}

export default App;
