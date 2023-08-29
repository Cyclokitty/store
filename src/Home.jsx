import {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTags } from './ReduxSlices/tag/tagSlice';
import Loader from './components/Loader';
import HomeGallery from './components/HomeGallery';
import HomeGallery2 from './components/HomeGallery2';

export default function Home() {
    const { isLoading } = useSelector((store) => store.tags);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTags());
    }, []);


    if (isLoading) {
      return (
        <>
          <Loader/>
        </>
      )
    }

  return (
    <div>
      <HomeGallery2/>
    </div>
  );
}