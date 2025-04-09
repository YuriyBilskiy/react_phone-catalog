import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchPhones } from '../features/phonesSlice';
import { Phone } from '../types/phonesType';

export const usePhones = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { phones, status, error } = useSelector(
    (state: RootState) => state.phone,
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPhones());
    }
  }, [status, dispatch]);

  return {
    phones: phones as Phone[],
    isLoading: status === 'loading',
    error: status === 'failed' ? error : null,
  };
};
