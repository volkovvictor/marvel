import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleComic from '../components/singleComic/SingleComic';
import SingleChar from '../components/singleChar/SingleChar';
import Page404 from './Page404';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Spinner from '../components/spinner/Spinner';
import useMarvelService from '../services/MarvelService';
import './single.scss';

const SinglePage = ({pageType}) => {
   const [data, setData] = useState(null);
   const {dataId} = useParams();

   const {loading, error, clearError, getComic, getCharacter} = useMarvelService();

   useEffect(() => {
      updateData();
   }, [dataId])

   const onDataLoaded = (data) => {
      setData(data)
   }

   const updateData = () => {
      clearError();
      pageType === 'comic' ? getComic(dataId).then(onDataLoaded) : getCharacter(dataId).then(onDataLoaded);
   }

   const page = pageType === 'comic' ? <SingleComic comic={data}/> : 
                pageType === 'char' ? <SingleChar char={data}/> : <Page404/>;

   const errorMessage = error ? <ErrorMessage/> : null;
   const spinner = loading ? <Spinner/> : null;
   const content = !(loading || error || !data) ? page : null;

   return (
      <>
         {errorMessage}
         {spinner}
         {content}
      </>
   )
}

export default SinglePage;