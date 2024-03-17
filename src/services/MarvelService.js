import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
   const {loading, error, request, clearError} = useHttp();

   const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   const _apiKey = 'apikey=7695820e65fa9cbabd92784f0d6557b6';
   const _baseOffset = 0;

   const getAllCharacters = async (offset = _baseOffset) => {
      const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
      return res.data.results.map(_transformCharacter);
   }

   const getAllComics = async (offset = _baseOffset) => {
      const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`)
      return res.data.results.map(_transformComics);
   }

   const getCharacter = async (id) => {
      const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
      return _transformCharacter(res.data.results[0])
   }

   const getComic = async (id) => {
      const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
      return _transformComics(res.data.results[0])
   }

   const _transformCharacter = (res) => {
      return {
         id: res.id,
         name: res.name,
         description: res.description,
         thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
         homepage: res.urls[0].url,
         wiki: res.urls[1].url,
         comics: res.comics.items
      }
   }

   const _transformComics = (res) => {
      return {
         id: res.id,
         title: res.title,
         description: res.description,
         pages: res.pageCount + ' pages',
         language: res.textObjects.language || 'en-us',
         thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
         price: res.prices[0].price ? res.prices[0].price + "$" : 'NOT AVILABLE',
      }
   }

   return {loading, error, clearError, getAllCharacters, getCharacter, getAllComics, getComic}
}

export default useMarvelService;