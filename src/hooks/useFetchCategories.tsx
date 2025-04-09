// hooks/useFetchCategories.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchTablets } from '../features/tabletsSlice';
import { fetchAccessories } from '../features/accessoriesSlice';
import { fetchPhones } from '../features/phonesSlice';

export const useFetchCategories = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { phones, status: phoneStatus } = useSelector(
    (state: RootState) => state.phone,
  );
  const { tablets, status: tabletStatus } = useSelector(
    (state: RootState) => state.tablets,
  );
  const { accessories, status: accessoryStatus } = useSelector(
    (state: RootState) => state.accessories,
  );

  useEffect(() => {
    if (phoneStatus === 'idle') {
      dispatch(fetchPhones());
    }
  }, [phoneStatus, dispatch]);

  useEffect(() => {
    if (tabletStatus === 'idle') {
      dispatch(fetchTablets());
    }
  }, [tabletStatus, dispatch]);

  useEffect(() => {
    if (accessoryStatus === 'idle') {
      dispatch(fetchAccessories());
    }
  }, [accessoryStatus, dispatch]);

  return {
    phones,
    tablets,
    accessories,
    isLoading:
      phoneStatus === 'loading' ||
      tabletStatus === 'loading' ||
      accessoryStatus === 'loading',
    error:
      phoneStatus === 'failed' ||
      tabletStatus === 'failed' ||
      accessoryStatus === 'failed',
  };
};
