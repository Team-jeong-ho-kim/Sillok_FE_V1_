import { useMutation } from '@tanstack/react-query';
import { instance } from './instance';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface LoginRequest {
  account_id: string;
  password: string;
}

export const useApiLogin = () => {
  const [cookies, setCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: LoginRequest) => {
      const response = await instance.post('/auth', data);
      return response;
    },
    onSuccess: (response) => {
      setCookie('access_token', response.data.access_token, {
        expires: new Date(response.data.exp),
        path: '/',
      });
      toast.success('로그인이 성공적으로 완료되었습니다!');
      navigate('/admin');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
