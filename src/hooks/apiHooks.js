import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const mediaData = await fetchData(
        import.meta.env.VITE_MEDIA_API + '/media',
      );

      const authApiUrl = import.meta.env.VITE_AUTH_API;
      const newData = await Promise.all(
        mediaData.map(async (item) => {
          const data = await fetchData(`${authApiUrl}/users/${item.user_id}`);
          return {...item, username: data.username};
        }),
      );

      console.log('usersData: ', newData);

      setMediaArray(newData);
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);
  return mediaArray;
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions,
    );

    window.localStorage.setItem('token', loginResult.token);
    return loginResult;
  };
  return {postLogin};
};

const useUser = () => {
  const postUser = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/users',
      fetchOptions,
    );
  };

  const getUserByToken = async (token) => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer: ' + token,
      },
    };

    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
      fetchOptions,
    );

    console.log('userResult', userResult);
    return userResult;
  };
  return {getUserByToken, postUser};
};

export {useMedia, useAuthentication, useUser};
