import { compare } from "../util";

export default class PokemonService {

    constructor(resource) {
      this._resource = resource;
    }

    getPokemon(id) {

      let pokemons = [];

      let cache = localStorage.getItem("pokemons");

      if (cache) {
          pokemons = JSON.parse(cache);
      }

      let pokemon = null;

      pokemons.forEach(item => {
          if (item.id == id) {
              pokemon = item;
          }
      });

      if(pokemon) {

        return new Promise((resolve, reject) => {
          resolve(pokemon);
        });

      } else {
        return new Promise((resolve, reject) => {
          this._resource(`pokemon/${id}`)
            .query()
            .then(res => res.json(), err => reject(err))
            .then(data => {

              if(!pokemons.filter(item => item.id === data.id).length > 0) {
                pokemons.push(data);
                pokemons.sort(compare);
                localStorage.setItem("pokemons", JSON.stringify(pokemons));
              }

              resolve(data);

            });
        });
      }
    }

    getSpecie(id) {

      let species = [];

      let cache = localStorage.getItem("species");

      if (cache) {
          species = JSON.parse(cache);
      }

      let specie = null;

      species.forEach(item => {
        if (item.id == id) {
          specie = item;
        }
      });

      if(specie) {

        return new Promise((resolve, reject) => {
          resolve(specie);
        });

      } else {

        return new Promise((resolve, reject) => {
          this._resource(`pokemon-species/${id}`)
            .query()
            .then(res => res.json(), err => reject(err))
            .then(data => {

              if(!species.filter(item => item.id === data.id).length > 0) {
                species.push(data);
                species.sort(compare);
                localStorage.setItem("species", JSON.stringify(species));
              }

              resolve(data);

            });
        });
      }

    }

    getEvolutionChain(id) {

      let chains = [];

      let cache = localStorage.getItem("chains");

      if (cache) {
          chains = JSON.parse(cache);
      }

      let chain = null;

      chains.forEach(item => {
        if (item.id == id) {
          chain = item;
        }
      });

      if(chain) {

        return new Promise((resolve, reject) => {
          resolve(chain);
        });

      } else {

        return new Promise((resolve, reject) => {
          this._resource(`evolution-chain/${id}`)
            .query()
            .then(res => res.json(), err => reject(err))
            .then(data => {

              if(!chains.filter(item => item.id === data.id).length > 0) {
                chains.push(data);
                chains.sort(compare);
                localStorage.setItem("chains", JSON.stringify(chains));
              }

              resolve(data);

            });
        });

      }



    }

}
