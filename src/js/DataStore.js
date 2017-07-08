import { autorun, observable} from "mobx"


class DataStore {
   @observable sequence = [];
   @observable random = [];
   @observable  round = 1;
   @observable  check = 0;
   @observable  color = ['green', 'red', 'blue','yellow'];
   @observable  highestRound = 1;

}




var store = window.store = new DataStore

export default store
