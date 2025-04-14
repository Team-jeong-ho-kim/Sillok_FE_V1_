import { useMutation } from '@tanstack/react-query';
import { instance } from './instance';
import { useCookies } from 'react-cookie';

export const useApiAccept = () => {
  const [cookies] = useCookies(['access_token']);

  const access_token = cookies.access_token;

  return useMutation({
    mutationFn: async (post_id: number) => {
      const response = await instance.patch(`/post/admin/${post_id}`, null, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return response;
    },
    onSuccess: (response) => {
      console.log('성공');
      window.location.reload();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
