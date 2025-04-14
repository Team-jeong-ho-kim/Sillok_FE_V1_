import { useMutation } from '@tanstack/react-query';
import { instance } from './instance';

export const useApiPostDetail = () => {
  return useMutation({
    mutationFn: async (post_id: number) => {
      const response = await instance.get(`/post/${post_id}`);
      return response;
    },
    onSuccess: (response) => {
      console.log('성공');
      window.open(response.data.link, '_blank');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
