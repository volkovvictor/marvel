class MarvelService {
   _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   _apiKey = 'apikey=7695820e65fa9cbabd92784f0d6557b6';

   getRecource = async (url) => {
      let res = await fetch(url);

      if (!res.ok) throw new Error(`Could not fetch ${url}, status ${res.status}`);

      return await res.json();
   }

   getAllCharacters = async () => {
      const res = await this.getRecource(`${this._apiBase}characters?limit=9&${this._apiKey}`)
      return res.data.results.map(this._transformCharacter);
   }

   getCharacter = async (id) => {
      const res = await this.getRecource(`${this._apiBase}characters/${id}?${this._apiKey}`);
      return this._transformCharacter(res.data.results[0])
   }

   _transformCharacter = (res) => {
      return {
         name: res.name,
         description: res.description,
         thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
         homepage: res.urls[0].url,
         wiki: res.urls[1].url,
      }
   }
}

export default MarvelService;