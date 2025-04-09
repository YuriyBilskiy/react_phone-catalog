import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { Tablets } from '../types/tabletsType';
import { fetchTablets } from '../features/tabletsSlice';

export const useTablets = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tablets, status, error } = useSelector(
    (state: RootState) => state.tablets,
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTablets());
    }
  }, [status, dispatch]);

  return {
    tablets: tablets as Tablets[],
    isLoading: status === 'loading',
    error: status === 'failed' ? error : null,
  };
};
