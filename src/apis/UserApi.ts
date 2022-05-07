import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import configs from '@/config/configuration';

export const getUserGET = ({ userId }: any) => {
  const config = {};

  return axios.get(`${configs.MOCK_API_URL}/api/v1/users/${userId || ''}`, config)
    .then(res => res.data);
}

export const useGetUserGET = ({ userId }: any) => {
  return useQuery('getUser', () => {
    return getUserGET({ userId });
  });
};

export const listOfUsersGET = ({ limit }: any) => {
  const config = {};

  return axios.get(`${configs.MOCK_API_URL}/api/v1/users`, config)
    .then(res => res.data);
}

export const useListOfUsersGET = ({ limit }: any) => {
  return useQuery('listOfUsers', () => {
    return listOfUsersGET({ limit });
  });
};

export const FetchListOfUsersGET = async ({
  children,
  onData = () => {},
  limit,
}: any) => {
  const { isLoading: loading, error, data, refetch } = useListOfUsersGET({ limit: 10 });

  React.useEffect(() => {
    if (error) {
      // console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);

  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};
