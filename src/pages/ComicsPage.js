import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';
import BannerApp from '../components/bannerApp/BannerApp';
import ComicsList from '../components/comicsList/ComicsList';

const ComicsPage = () => {
   return (
      <>
         <BannerApp/>
         <ErrorBoundary>
            <ComicsList/>
         </ErrorBoundary>
      </>
   )
}

export default ComicsPage;