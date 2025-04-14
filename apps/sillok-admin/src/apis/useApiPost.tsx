import { useQuery } from '@tanstack/react-query';
import { instance } from './instance';
import { useCookies } from 'react-cookie';

const fetchPostAllApi = async (access_token: string) => {
  const { data } = await instance.get('/post/admin', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return data;
};

export const useApiPost = () => {
  const [cookies] = useCookies(['access_token']);

  const access_token = cookies.access_token;

  return useQuery({
    queryKey: ['post'],
    queryFn: () => fetchPostAllApi(access_token),
    enabled: !!access_token,
    onSuccess: (data) => {
      console.log('✅ 데이터 불러오기 성공:', data);
    },
    onError: (error) => {
      console.error('❌ 데이터 불러오기 실패:', error);
      alert('데이터를 불러오는 데 실패했습니다.');
    },
  });
};
