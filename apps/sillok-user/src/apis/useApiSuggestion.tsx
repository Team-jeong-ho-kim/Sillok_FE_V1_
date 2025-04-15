import { useMutation } from '@tanstack/react-query';
import { instance } from './instance';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface SuggestionRequest {
  title: string;
  introduction: string;
  link: string;
  category: string;
  image: File;
}

export const useApiSuggestion = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: SuggestionRequest) => {
      const formData = new FormData();

      const json = {
        title: data.title,
        introduction: data.introduction,
        link: data.link,
        category: data.category,
      };

      formData.append(
        //application/json 우회
        'request',
        new Blob([JSON.stringify(json)], { type: 'application/json' })
      );
      formData.append('image', data.image);

      const response = await instance.post('/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    },

    onSuccess: (data) => {
      toast.success('글이 성공적으로 추천되었습니다!');
      navigate('/');
    },

    onError: (error) => {
      toast.error(error.request.response);
    },
  });
};
