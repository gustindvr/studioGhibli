import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAllPeoples } from '../../app/slices/peoples';

type Props = {};

const Films = (props: Props) => {
  const dispatch = useAppDispatch();

  const { docs } = useAppSelector((state) => state.people);

  console.log(docs);
  useEffect(() => {
    dispatch(getAllPeoples());
  }, [dispatch]);

  return <div></div>;
};

export default Films;
