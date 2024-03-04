class MarvelService {
   _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   _apiKey = 'apikey=7695820e65fa9cbabd92784f0d6557b6';

   getRecource = async (url) => {
      let res = await fetch(url);

      if (!res.ok) throw new Error(`Could not fetch ${url}, status ${res.status}`);

      return await res.json();
   }

   getAllCharacters = () => {
      return this.getRecource(`${this._apiBase}characters?limit=9&${this._apiKey}`)
   }

   getCharacter = (id) => {
      return this.getRecource(`${this._apiBase}characters/${id}?${this._apiKey}`)
   }
}

export default MarvelService;