/* state management
**
** Import :
** All functions that will change properties (observables)
** will have to be declared as action
** in the constructor of the mobx store class.
*/

import { makeObservable, observable, computed, action } from 'mobx';


class Store {
  pokemons = require('./pokemon.json');
  filter = "";
  selectedItem = null

  constructor(){
    makeObservable(this, {
      pokemons: observable,
      filter: observable,
      selectedItem: observable,
      setPokemons: action,
      setFilter: action,
      setSelectedItem: action,
      filteredPokemons: computed
    });
  }

  get filteredPokemons(){
    return this.pokemons
    .filter(
      (pokemon) => pokemon.name.english.toLowerCase().includes(this.filter.toLowerCase())
    )
  }

  // Actions
  setPokemons(pokemons){
    this.pokemons = pokemons;
  }

  setFilter(filter){
    this.filter = filter;
  }

  setSelectedItem(selectedItem){
    this.selectedItem = selectedItem;
  }
};

const store = new Store();

export default store;