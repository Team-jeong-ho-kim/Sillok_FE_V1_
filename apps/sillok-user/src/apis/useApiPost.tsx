import { useQuery } from '@tanstack/react-query';
import { instance } from './instance';

const fetchPostAllApi = async (category: string | null) => {
  const { data } = await instance.get('/post', {
    params: category ? { category } : {},
  });
  return data;
};

export const useApiPost = (category: string | null) => {
  return useQuery({
    queryKey: ['post', category],
    queryFn: () => fetchPostAllApi(category),
    onSuccess: (data) => {
      console.log('✅ 데이터 불러오기 성공:', data);
    },
    onError: (error) => {
      console.error('❌ 데이터 불러오기 실패:', error);
      alert('데이터를 불러오는 데 실패했습니다.');
    },
  });
};
